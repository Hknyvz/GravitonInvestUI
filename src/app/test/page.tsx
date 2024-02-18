import Link from 'next/link';
import React from 'react';

function page() {
  return (
    <div>
      <Link href="/test/1">test 1</Link>
      <br />
      <Link href="/test/2">test 2</Link>
      <br />
      <Link href="/test/3">test 3</Link>
      <br />
      <Link href="/test/4">test 4</Link>
      <br />
      <Link href="/test/5">test 5</Link>
    </div>
  );
}

export default page;
