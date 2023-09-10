"use client";
import { AppProvider } from './components/AppContext';
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }) {
  return (
    <AppProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </AppProvider>
  );
}

