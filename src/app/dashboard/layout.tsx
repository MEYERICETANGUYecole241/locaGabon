// app/dashboard/layout.tsx
import { type Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";



export const metadata: Metadata = {
  title: "Dashboard - LocaGabon",
  description: "Dashboard des bailleurs",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
   
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
   
          {children}
        
    </ClerkProvider>
  );
}
