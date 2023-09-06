import type { Metadata } from 'next';

import { AboutPage } from '@/pageComponents/about/AboutPage';

export const metadata: Metadata = {
  title: 'About',
};

function page() {
  return (
    <>
      <AboutPage />
    </>
  );
}

export default page;
