import "@polkadot/api-augment";
import { ApiPromise, WsProvider } from "@polkadot/api";
import {
   ConvictionOptions,
   POLKADOTTERS_ADDRESS,
   BALANCE_DIVISOR,
   GOVERNMENT_TRACKS,
} from "./const";

export type BaseAccount = {
   address: string;
   meta: {
      name: string;
      source: string;
   };
};

export type FormattedAccount = BaseAccount & {
   formatted: string;
   balance: string;
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
   return formatAccounts(accounts);
}

async function getApi() {
   const provider = new WsProvider("wss://kusama-rpc.polkadot.io/");
   const api = await ApiPromise.create({ provider });
   return api;
}

export async function delegate(
   from: FormattedAccount,
   balance: number,
   conviction: ConvictionOptions,
   transactionCallback: (status: any) => void
) {
   const api = await getApi();
   const accounts = await getAccounts();
   const fromAccount = accounts.find((account) => account.address === from.address);

   if (!fromAccount) {
      return { success: false };
   }

   const target = await require("@polkadot/extension-dapp").web3FromSource(fromAccount.meta.source);

   const delegations = [];

   for (const track of GOVERNMENT_TRACKS) {
      console.log(track.id, POLKADOTTERS_ADDRESS, balance, conviction);
      delegations.push(
         api.tx.convictionVoting.delegate(track.id, POLKADOTTERS_ADDRESS, conviction, balance)
      );
   }

   const tx = api.tx.utility.batchAll(delegations);

   await tx.signAndSend(fromAccount.address, { signer: target.signer }, (status) => {
      transactionCallback(status);
   });
}

function truncateAddress(address: string) {
   return `${address.slice(0, 6)}...${address.slice(-6)}`;
}

async function formatAccounts(accounts: BaseAccount[]): Promise<FormattedAccount[]> {
   const formattedAccounts = await Promise.all(
      accounts.map(async (account) => {
         return await getFormattedAccount(account);
      })
   );
   return formattedAccounts;
}

export async function getFormattedAccount(account: BaseAccount | null): Promise<FormattedAccount> {
   const api = await getApi();
   const balance = (
      (await api.query.system.account(account.address)).data.free.toNumber() / BALANCE_DIVISOR
   ).toFixed(2);

   let formatted = "";
   if (account) {
      if (!account.meta?.name) {
         formatted = truncateAddress(account.address);
      } else {
         formatted = `${account.meta.name} (${truncateAddress(account.address)})`;
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
