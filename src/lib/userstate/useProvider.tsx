import { useEffect, useState } from "react";
import { usercontext } from "./usercontext";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebase/auth";

export const UserProvider = ({ children }: any) => {
  const [user, setuser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userid) => {
      return setuser(userid);
    });
    return () => unsubscribe();
  }, [auth, user]);
  return (
    <usercontext.Provider value={{ user }}>{children}</usercontext.Provider>
  );
};
