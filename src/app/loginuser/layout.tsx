// app/loginuser/layout.tsx
import UserHeader from './userHeader/Headre';
import "@/styles/globals.css"; 

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
      <UserHeader />
      <main>{children}</main>
      </body>
    </html>
  );
}
