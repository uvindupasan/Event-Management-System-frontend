// app/(auth)/layout.tsx
import "../../styles/globals.css";
// import Header from "./userHeader/Headre";
// import Footer from "@/components/Layout/Footer";
// import "../(site)/page";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Header/> */}
      <body className=" ">{children}</body>
      {/* <Footer /> */}
    </html>
  );
}
