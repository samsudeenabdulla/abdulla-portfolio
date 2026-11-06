import "./globals.css";

export const metadata = {
  title: "Mohamed Samsudeen Abdulla | Software Engineer",
  description:
    "Personal portfolio of Mohamed Samsudeen Abdulla — software engineering, Android development and AI/ML projects.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Mohamed Samsudeen Abdulla | Software Engineer",
    description: "Software engineering, Android development and AI/ML projects.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
