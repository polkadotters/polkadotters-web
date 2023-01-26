import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import { useEffect, useState } from "react";
import useStateRef from "react-usestateref";
import {
   delegate,
   enableExtension,
   extensionErrorMessage,
   getFormattedAccount,
   getAccounts,
   FormattedAccount,
} from "../../utils/dapp";
import { AmountInput, LockedValue, SelectMenu, SubmitButton } from "../../components/FormInputs";
import { Popup } from "../../components/Popup";
import {
   CONVICTION_OPTIONS,
   ConvictionOptions,
   POLKADOTTERS_ADDRESS,
} from "../../utils/dapp/const";

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

         setAvailableAccounts(accounts);
         setError("");
      } catch (error) {
         setNoExtensionError();
      }
   };

   const showResultAndReset = (result: "success" | "error") => {
      setTransactionStatus(result);
      setTimeout(() => {
         if (transactionRef.current === result) {
            setTransactionStatus("inactive");
         }
      }, 5000);
   };

   const transactionCallback = (event: any) => {
      if (transactionRef.current === "pending") {
         if (event.status.isFinalized) {
            showResultAndReset("success");
         } else if (event.status.isRetracted) {
            showResultAndReset("error");
         }
      }
   };

   const [availableAccounts, setAvailableAccounts] = useState<FormattedAccount[]>([]);
   const [selectedAccount, setSelectedAccount] = useState<FormattedAccount | null>(null);

   const [amount, setAmount] = useState<string | number>("");
   const [conviction, setConviction] = useState<ConvictionOptions>("None");
   const [error, setError] = useState<string>("");

   const [transactionStatus, setTransactionStatus, transactionRef] = useStateRef<
      "inactive" | "pending" | "success" | "error"
   >("inactive");

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
                        {selectedAccount && (
                           // small balance tooltip with relative position and small font
                           <div className="text-sm text-slate-400 mt-2 ml-1">
                              Balance: {selectedAccount.balance} KSM
                           </div>
                        )}
                     </div>

                     <div className="w-full md:w-2/3 m-auto">
                        <LockedValue
                           label={"Account to delegate to:"}
                           value={POLKADOTTERS_ADDRESS}
                        />
                     </div>
                     <div className="w-full md:w-2/3 m-auto">
                        <AmountInput
                           label={"Balance in KSM:"}
                           value={amount}
                           onChange={setAmount}
                           requiredPattern={/^[0-9]+[.]?[0-9]{0,10}$/}
                        />
                     </div>
                     <div className="w-full md:w-2/3 m-auto">
                        <SelectMenu
                           label={"Conviction:"}
                           options={Object.keys(CONVICTION_OPTIONS)}
                           selected={conviction}
                           onSelect={(key) => setConviction(CONVICTION_OPTIONS[key])}
                        />
                     </div>
                     <div className="w-full md:w-2/3 m-auto text-lg">
                        <SubmitButton
                           active={
                              selectedAccount != null &&
                              amount !== "" &&
                              transactionStatus === "inactive"
                           }
                           label={"Delegate"}
                           onClick={async () => {
                              setTransactionStatus("pending");
                              try {
                                 await delegate(
                                    selectedAccount,
                                    Number(amount),
                                    conviction,
                                    transactionCallback
                                 );
                              } catch (error) {
                                 showResultAndReset("error");
                              }
                           }}
                        />
                     </div>
                  </div>
               </Container>
               {transactionStatus === "pending" && (
                  <Popup flavor="loading" message="Transaction is pending" />
               )}
               {transactionStatus === "success" && (
                  <Popup
                     flavor="success"
                     message="Transaction was successful"
                     onClose={() => {
                        setTransactionStatus("inactive");
                     }}
                  />
               )}
               {transactionStatus === "error" && (
                  <Popup
                     flavor="error"
                     message="Transaction failed"
                     onClose={() => {
                        setTransactionStatus("inactive");
                     }}
                  />
               )}
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
