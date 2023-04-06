'use client';
import Image from 'next/image';
import React from 'react';
const Logo = () => {
  return (
    <Image
      className="hidden md:block cursor-pointer bg-white"
      alt="Logo"
      width={100}
      height={100}
      src="/logo.png"
    />
  );
};

export default Logo;
