import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import { useEffect, useState } from "react";
import {
   ConvictionOptions,
   convictionOptions,
   delegate,
   enableExtension,
   extensionErrorMessage,
   getFormattedAccount,
   getAccounts,
   FormattedAccount,
} from "../../utils/dapp";
import { AmountInput, LockedValue, SelectMenu, SubmitButton } from "../../components/FormInputs";

const Delegation = () => {
   useEffect(() => {
      enableExtensionAndFetchAccounts();
   }, []);

   const setNoExtensionError = () => {
      setError(extensionErrorMessage);
   };

   const enableExtensionAndFetchAccounts = async () => {
      try {
         await enableExtension();
         const accounts = await getAccounts();
         if (accounts.length === 0) {
            setNoExtensionError();
         }
         setAvailableAccounts(accounts.map(getFormattedAccount));
         setError("");
      } catch (error) {
         setNoExtensionError();
      }
   };

   const [availableAccounts, setAvailableAccounts] = useState<FormattedAccount[]>([]);
   const [selectedAccount, setSelectedAccount] = useState<FormattedAccount | null>(null);

   const [amount, setAmount] = useState<string | number>("");
   const [conviction, setConviction] = useState<keyof ConvictionOptions>("None");
   const [error, setError] = useState<string>("");

   return (
      <Layout>
         <Header />
         {!error ? (
            <main className={"flex-1 flex flex-col "}>
               <Container>
                  <div className="py-10 flex flex-col gap-10">
                     <div className="w-full md:w-2/3 m-auto text-center">
                        <h1 className={"text-4xl font-bold text-center"}>
                           Delegate KUSAMA to POLKADOTTERS
                        </h1>
                        <span className={"text-2xl"}>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius
                           excepturi aut corporis, sunt illo voluptates cupiditate quam deleniti
                           architecto?
                        </span>
                     </div>
                  </div>
                  <div className="flex flex-col gap-10 max-w-4xl m-auto z-10">
                     <div className="w-full md:w-2/3 m-auto z-10">
                        <SelectMenu
                           onSelect={(formatted) => {
                              const selectedAccount = availableAccounts.find(
                                 (account) => account.formatted === formatted
                              );
                              setSelectedAccount(selectedAccount);
                           }}
                           options={availableAccounts.map((account) => account.formatted)}
                           selected={selectedAccount?.formatted ?? ""}
                           label={"Account to delegate from:"}
                        />
                     </div>
                     <div className="w-full md:w-2/3 m-auto">
                        <LockedValue
                           label={"Account to delegate to:"}
                           value={"FVAFUJhJy9tj1X4PaEXX3tDzjaBEVsVunABAdsDMD4ZYmWA"}
                        />
                     </div>
                     <div className="w-full md:w-2/3 m-auto">
                        <AmountInput
                           label={"Balance in KSM:"}
                           value={amount}
                           onChange={setAmount}
                           requiredPattern={/^\d+$/}
                        />
                     </div>
                     <div className="w-full md:w-2/3 m-auto">
                        <SelectMenu
                           label={"Conviction:"}
                           options={Object.keys(convictionOptions)}
                           selected={conviction}
                           onSelect={setConviction}
                        />
                     </div>
                     <div className="w-full md:w-2/3 m-auto text-lg">
                        <SubmitButton
                           active={selectedAccount != null && amount !== ""}
                           label={"Delegate"}
                           onClick={() => delegate(selectedAccount, Number(amount), conviction)}
                        />
                     </div>
                  </div>
               </Container>
            </main>
         ) : (
            <div className="w-1/2 md:w-1/3 mt-10 flex-1 flex justify-center items-center flex-col m-auto">
               <div className="text-lg">{error}</div>
               <div className="mt-8 w-1/2">
                  <SubmitButton
                     label={"Connect"}
                     onClick={enableExtensionAndFetchAccounts}
                     active={true}
                  />
               </div>
            </div>
         )}
         <Footer />
      </Layout>
   );
};

export default Delegation;
