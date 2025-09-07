import '../styles/globals.css';
import type { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FK Alphadev 🚀',
  description: 'Transforme sua carreira com o método Alpha',
  icons: {
    icon: [
      '/assets/images/logofk.png', // favicon principal
      { url: '/logo.png', type: 'image/png' } // favicon secundário
    ]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
