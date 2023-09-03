"use client";
import react from "react";
import Providers from "@/utils/QueryProvider";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
