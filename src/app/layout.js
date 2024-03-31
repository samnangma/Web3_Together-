import "./globals.css";
import NavbarDefault from "@/components/navbar/Navbar";

export const metadata = {
  title: "Web-3 together",
  description: "Create for communities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarDefault />
        <div className="px-12 py-10">
          {children}
        </div>
      </body>
    </html>
  );
}
