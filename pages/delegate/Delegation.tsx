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
   undelegate,
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
      }, 15000);
   };

   const transactionCallback = (event: any) => {
      const url = "https://kusama.subscan.io/extrinsic/";
      setSubScanLink(url + event.txHash.toHex());
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

   const [subScanLink, setSubScanLink] = useState<string | null>("#");
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
                           Delegate KSM to Polkadotters
                        </h1>
                        <span className={"text-2xl"}>
                           <a href="https://wiki.polkadot.network/docs/learn-opengov#multirole-delegation" className="underline" target='_blank'>Delegation</a>&nbsp; 
                           is an important part of a OpenGov governance model - it is tedious to keep track of all the governance proposals and that's why 
                           you can delegate your votes to a trustworthy entities. So here are Polkadotters to the rescue, as validators, we vote on
                           most of the proposals so rest assured, your voting power will be in a good hands! 
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
                     flavor="info"
                     message={
                        <span>
                           Transaction complete <br></br> check it{" "}
                           <a
                              target="_blank"
                              className="text-pink-400 hover:text-pink-500"
                              href={subScanLink}
                           >
                              on Subscan
                           </a>
                        </span>
                     }
                     onClose={() => {
                        setTransactionStatus("inactive");
                     }}
                  />
               )}
               {transactionStatus === "error" && (
                  <Popup
                     flavor="error"
                     message="Transaction terminated"
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
