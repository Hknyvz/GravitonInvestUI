import Link from 'next/link';
import React from 'react';

function page({ params: { number } }: { params: { number: number } }) {
  return (
    <div>
      {number}
      <br />
      <Link href="/test">Back</Link>
    </div>
  );
}

export default page;
