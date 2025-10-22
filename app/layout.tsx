import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const suisseIntl = localFont({
  src: [
    {
      path: "../public/fonts/SuisseIntl-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/SuisseIntl-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SuisseIntl-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/SuisseIntl-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gradient Tweet - Beautiful Tweet Images in ChatGPT",
  description:
    "Create stunning tweet images with vibrant gradient backgrounds directly in ChatGPT. No Figma, no Canva - just beautiful designs without leaving your conversation.",
  keywords: [
    "ChatGPT",
    "tweet images",
    "gradient backgrounds",
    "social media",
    "design",
    "Twitter",
    "content creation",
    "creators",
  ],
  openGraph: {
    title: "Gradient Tweet - Beautiful Tweet Images in ChatGPT",
    description:
      "Create stunning tweet images with vibrant gradient backgrounds directly in ChatGPT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${suisseIntl.variable} font-sans antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-GJ9T5BF59M" />
      </body>
    </html>
  );
}
