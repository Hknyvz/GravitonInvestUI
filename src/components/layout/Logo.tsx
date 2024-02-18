import Link from 'next/link';

import LongLogo from '../assets/LongLogo';
import ShortLogo from '../assets/ShortLogo';

export interface LogoProps {
  collapsed: boolean;
}

export default function Logo({ collapsed }: LogoProps) {
  return (
    <div
      style={{
        height: 64,
        display: 'block',
        padding: '8px 16px',
      }}
    >
      <Link
        style={{ height: '100%', width: '100%', display: 'inline-block' }}
        href="/"
      >
        <div
          style={{
            height: '100%',
            backgroundColor: '#21760C',
            color: 'white',
            fontSize: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {!collapsed ? <LongLogo /> : <ShortLogo />}
        </div>
      </Link>
    </div>
  );
}
