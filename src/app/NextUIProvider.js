import * as React from "react";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import RootLayout from "@/app/layout";

function App() {
  return (
    <NextUIProvider>
      <RootLayout />
    </NextUIProvider>
  );
}