import React from 'react';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `${slug}`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1 className="capitalize">{params.slug}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos
        earum doloribus, quibusdam magni accusamus vitae! Nisi, sunt! Aliquam
        iste expedita cupiditate a quidem culpa eligendi, aperiam saepe dolores
        ipsum!
      </p>
    </>
  );
}
