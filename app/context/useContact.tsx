"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContactProps {
  clientName: string;
  setClientName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const ContactContext = createContext<ContactProps | undefined>(undefined);

export const useContact = () => {
  const contex = useContext(ContactContext);

  if (!contex) {
    throw new Error("useContact must be used within a useContactProvider");
  }
  return contex;
};

interface Props {
  children: ReactNode;
}

export const ContactProvider = ({ children }: Props) => {
  const [clientName, setClientName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const storedName = sessionStorage.getItem("client-name");
    if (storedName) setClientName(storedName);

    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) setEmail(storedEmail);

    const storedMessage = sessionStorage.getItem("message");
    if (storedMessage) setMessage(storedMessage);
  }, []);

  // Save data to session storage
  useEffect(() => {
    sessionStorage.setItem("client-name", clientName);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("message", message);
  }, [clientName, email, message]);

  return (
    <ContactContext.Provider
      value={{
        clientName,
        setClientName,
        email,
        setEmail,
        message,
        setMessage,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
