"use client";

import type { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
