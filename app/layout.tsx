"use client";

import "./globals.css";
import React from "react";
import Providers from "@/utils/QueryProvider";
import NavBar from "@/components/nav/Nav";
import { RecoilRoot } from "recoil";

interface RootLayoutProps {
  children?: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  return (
    <RecoilRoot>
      <html lang="en">
        <body>
          {" "}
          <NavBar />
          <Providers> {props.children}</Providers>
        </body>
      </html>
    </RecoilRoot>
  );
};
export default RootLayout;
