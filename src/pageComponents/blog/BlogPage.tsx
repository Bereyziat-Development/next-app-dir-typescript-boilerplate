'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export const BlogPage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCount((current) => current + 1),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>Counter: {count}</p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>

      {[...Array(10)].map((_, index) => (
        <div
          className="my-4 w-full rounded-md border-2 border-gray-400 px-2 py-1"
          key={index}
        >
          <Link href={`/blog/blog-${index}`}>{`Blog - ${index}`}</Link>
        </div>
      ))}
    </>
  );
};
