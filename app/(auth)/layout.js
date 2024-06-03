import React from "react";
import "../globals.css";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { logout } from "@/actions/auth";

export const metadata = {
  title: "Next Auth",
  description: "Next.js Authentication",
};

const RootLayout = async ({ children }) => {
  const result = await verifyAuth();

  if (!result.user) {
    return redirect("/");
  }

  return (
    <>
      <header id="auth-header">
        <p>Welcome Back</p>
        <form action={logout}>
          <button type="submit">Logout</button>
        </form>
      </header>
      {children}
    </>
  );
};

export default RootLayout;
