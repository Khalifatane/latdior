"use client";

import { CartProvider } from "@/context/CartContext";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Toaster } from "@/components/ui/sonner";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <CartDrawer />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </div>
    </CartProvider>
  );
}
