import type { Metadata } from 'next';

import { BlogPage } from '@/pageComponents/blog/BlogPage';

export const metadata: Metadata = {
  title: 'Blog',
};

function page() {
  return (
    <>
      <BlogPage />
    </>
  );
}

export default page;
