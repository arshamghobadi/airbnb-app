'use client';
import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      className="hidden md:block cursor-pointer bg-white w-auto h-auto"
      priority={true}
      alt="Logo"
      width={100}
      height={100}
      src="/logo.png"
    />
  );
};

export default Logo;
