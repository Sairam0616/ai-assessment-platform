import './globals.css';

export const metadata = {
  title: 'AI-Assessment Platform',
  description: 'Secure and scalable assessment platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
