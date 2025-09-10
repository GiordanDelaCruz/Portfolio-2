// app/layout.tsx
import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Giordan's Portfolio</title>
        <Script
          src="https://kit.fontawesome.com/f3da30bb5f.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="bg-gray-100 p-6">
          <div>
            <h1 className="text-3xl font-bold">Giordan Andrew</h1>
            <h2 className="text-lg text-gray-600">Software Developer</h2>
            <p className="mt-4 text-sm text-gray-700">
              I enjoy building apps to make my life better.
            </p>
            <div className="mt-6">
              <img
                src="/giordan-1.jpg"
                alt="Profile"
                className="rounded-lg w-[400px]"
              />
            </div>
          </div>

          {/* Socials */}
          <div className="flex space-x-4 mt-6">
            <a href="#">
              <i className="fa-brands fa-2x fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-2x fa-square-github"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-2x fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa-solid fa-2x fa-envelope"></i>
            </a>
          </div>
        </aside>

        {/* Main content */}
        <main className="w-[100%] p-10">{children}</main>
      </body>
    </html>
  );
}
