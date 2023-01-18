import "@polkadot/api-augment";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { ApiPromise, WsProvider } from "@polkadot/api";

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

export type Account = {
   address: string;
   meta: {
      name: string;
      source: string;
   };
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
   return accounts as Account[];
}

async function getApi() {
   const provider = new WsProvider("wss://kusama-rpc.polkadot.io/");
   const api = await ApiPromise.create({ provider });
   return api;
}

export async function delegate(
   from: Account,
   balance: number,
   conviction: keyof ConvictionOptions
) {
   try {
      const api = await getApi();
      const accounts = await getAccounts();
      const account = accounts.find((account) => account.address === from.address);

      if (!account) {
         return;
      }

      const target = await require("@polkadot/extension-dapp").web3FromSource(account.meta.source);

      const tx = api.tx.democracy.delegate(account.address, convictionOptions[conviction], balance);
      await tx.signAndSend(account.address, { signer: target.signer });
   } catch (e) {
      console.log(e);
   }
}

function truncateAddress(address: string) {
   return `${address.slice(0, 6)}...${address.slice(-6)}`;
}

export function formatAccount(account: Account | null) {
   if (!account) {
      return "";
   }

   if (!account.meta?.name) {
      return truncateAddress(account.address);
   }

   return `${account.meta.name} (${truncateAddress(account.address)})`;
}

export const extensionErrorMessage =
   "Could not connect to Polkadot extension. This means that it is either not installed or that you have not allowed this website to access it. Please install the extension and allow access to continue.";
