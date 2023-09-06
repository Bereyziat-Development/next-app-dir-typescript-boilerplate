import type { Metadata } from 'next';
import Link from 'next/link';

import { AppConfig } from '@/shared/utils/app-config';

import '../assets/styles/global.scss';

export const metadata: Metadata = {
  title: {
    default: AppConfig.title,
    template: `%s | ${AppConfig.title}`,
  },
  description: 'A template for Next.js and Tailwindcss by Muhammad Zourdy',
  robots: { follow: true, index: true },
  openGraph: {
    type: 'website',
    url: 'https://bereydev.dev',
    siteName: AppConfig.title,
    description: AppConfig.description,
    title: AppConfig.title,
    locale: AppConfig.locale,
    images: [
      {
        url: '',
        width: '',
        height: '',
        alt: '',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bereyziat_dev',
    title: AppConfig.title,
    description: AppConfig.description,
    images: [
      {
        url: '',
        width: '',
        height: '',
        alt: '',
      },
    ],
  },
  keywords: [''],
  authors: {
    name: 'Bereyziat Development – React Development Team',
    url: 'https://bereyziat.dev/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={AppConfig.locale}>
      <body>
        <div className="w-full px-1 text-gray-700 antialiased">
          <div className="mx-auto max-w-screen-md">
            <header className="border-b border-gray-300">
              <div className="pb-8 pt-16">
                <h1 className="text-3xl font-bold text-gray-900">
                  {AppConfig.title}
                </h1>
                <h2 className="text-xl">{AppConfig.description}</h2>
              </div>
              <nav>
                <ul className="flex flex-wrap text-xl">
                  <li className="mr-6">
                    <Link
                      href="/"
                      className="border-none text-gray-700 hover:text-gray-900"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mr-6">
                    <Link
                      href="/about/"
                      className="border-none text-gray-700 hover:text-gray-900"
                    >
                      About
                    </Link>
                  </li>
                  <li className="mr-6">
                    <a
                      className="border-none text-gray-700 hover:text-gray-900"
                      href="https://github.com/ixartz/Next-js-Boilerplate"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="mr-6">
                    <Link
                      href="/blog/"
                      className="border-none text-gray-700 hover:text-gray-900"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>

            {
              // eslint-disable-next-line tailwindcss/no-custom-classname
              <main className="content py-5 text-xl">{children}</main>
            }

            <footer className="border-t border-gray-300 py-8 text-center text-sm">
              © Copyright {new Date().getFullYear()} {AppConfig.title}. Made
              with <a href="https://bereyziat.dev">Bereyziat Development</a>.
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
