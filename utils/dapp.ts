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
   return accounts;
}

async function getApi() {
   const provider = new WsProvider("wss://kusama-rpc.polkadot.io/");
   const api = await ApiPromise.create({ provider });
   return api;
}

export async function delegate(
   address: string,
   balance: number,
   conviction: keyof ConvictionOptions
) {
   try {
      const api = await getApi();
      const accounts = await getAccounts();
      const account = accounts.find((account) => account.address === address);

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

export const extensionErrorMessage =
   "Could not connect to Polkadot extension. This means that it is either not installed or that you have not allowed this website to access it. Please install the extension and allow access to continue.";
