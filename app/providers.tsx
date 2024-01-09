'use client'

import { NextUIProvider } from "@nextui-org/react";
import ReactLenis from "@studio-freight/react-lenis";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const queryClient = new QueryClient()
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class">
        <SessionProvider>
          <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </ReactLenis>
        </SessionProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}