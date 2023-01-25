import "@polkadot/api-augment";
import { ApiPromise, WsProvider } from "@polkadot/api";

export const POLKADOTTERS_ADDRESS = "FVAFUJhJy9tj1X4PaEXX3tDzjaBEVsVunABAdsDMD4ZYmWA";

export const convictionOptions = {
   None: "None",
   "Locked1x - 8 days": "Locked1x",
   "Locked2x - 16 days": "Locked2x",
   "Locked3x - 32 days": "Locked3x",
   "Locked4x - 64 days": "Locked4x",
   "Locked5x - 128 days": "Locked5x",
   "Locked6x - 256 days": "Locked6x",
} as const;

export type ConvictionOptions = typeof convictionOptions;

export type BaseAccount = {
   address: string;
   meta: {
      name: string;
      source: string;
   };
};

export type FormattedAccount = BaseAccount & {
   formatted: string;
   balance: number;
};

export async function enableExtension() {
   const web3Enable = require("@polkadot/extension-dapp").web3Enable;
   const extensions = await web3Enable("my cool dapp");
   return {
      success: extensions.length > 0,
   };
}

export async function getAccounts() {
   const web3Accounts = require("@polkadot/extension-dapp").web3Accounts;
   const accounts = await web3Accounts();
   console.log({ accounts });
   return formatAccounts(accounts);
}

async function getApi() {
   const provider = new WsProvider("wss://kusama-rpc.polkadot.io/");
   const api = await ApiPromise.create({ provider });
   return api;
}

// ({ status }) => {
//    if (status.isRetracted) {
//       return { success: false };
//    }
//    if (status.isFinalized) {
//       return { success: true };
//    }
// }

export async function delegate(
   from: FormattedAccount,
   balance: number,
   conviction: keyof ConvictionOptions,
   transactionCallback: (status: any) => void
) {
   const api = await getApi();
   const accounts = await getAccounts();
   const fromAccount = accounts.find((account) => account.address === from.address);

   if (!fromAccount) {
      return { success: false };
   }

   const target = await require("@polkadot/extension-dapp").web3FromSource(fromAccount.meta.source);

   const tx = api.tx.democracy.delegate(
      POLKADOTTERS_ADDRESS,
      convictionOptions[conviction],
      balance
   );
   await tx.signAndSend(fromAccount.address, { signer: target.signer }, (status) => {
      transactionCallback(status);
   });
}

function truncateAddress(address: string) {
   return `${address.slice(0, 6)}...${address.slice(-6)}`;
}

async function getBalances(accounts: BaseAccount[]) {
   let balances = {};
   accounts.forEach((account) => {
      balances[account.address] = 0;
   });
   return balances;
   //    const apiKey = "redacted";
   //    const endpoint = "https://kusama.api.subscan.io/api/scan/accounts";
   //    const addresses = accounts.map((account) => account.address);
   //    try {
   //       const response = await fetch(endpoint, {
   //          method: "POST",
   //          headers: {
   //             "Content-Type": "application/json",
   //             "x-api-key": apiKey,
   //          },
   //          body: JSON.stringify({
   //             row: 1,
   //             page: 0,
   //             address: addresses,
   //          }),
   //       });
   //       const json = await response.json();
   //       const list = json.data.list;

   //       let balances = {};
   //       accounts.forEach((account) => {
   //          balances[account.address] = 0;
   //       });

   //       list.forEach((account) => {
   //          balances[account.address] = Number(account.balance).toFixed(2);
   //       });

   //       return balances;
   //    } catch (error) {
   //       console.log(error);
   //       let balances = {};
   //       accounts.forEach((account) => {
   //          balances[account.address] = 0;
   //       });
   //       return balances;
   //    }
}

async function formatAccounts(accounts: BaseAccount[]): Promise<FormattedAccount[]> {
   const balances = await getBalances(accounts);
   console.log({ balances });

   const formattedAccounts = await Promise.all(
      accounts.map(async (account) => {
         return await getFormattedAccount(account, balances[account.address]);
      })
   );
   return formattedAccounts;
}

export async function getFormattedAccount(
   account: BaseAccount | null,
   balance: number
): Promise<FormattedAccount> {
   let formatted = "";
   if (account) {
      if (!account.meta?.name) {
         formatted = truncateAddress(account.address);
      } else {
         formatted = `${account.meta.name} (${truncateAddress(account.address)}) - ${balance} KSM`;
      }
   }

   return {
      ...account,
      formatted: formatted,
      balance,
   };
}

export const extensionErrorMessage =
   "Could not connect to Polkadot extension. This means that it is either not installed or that you have not allowed this website to access it. Please install the extension and allow access to continue.";
