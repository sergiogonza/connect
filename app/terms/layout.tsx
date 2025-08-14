"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  }, []);

  return (
    <>
      <main className="relative flex flex-col grow px-4 py-10 max-w-4xl mx-auto text-gray-800">
        {children}
      </main>
      <Footer />
    </>
  );
}
