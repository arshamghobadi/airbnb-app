'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer bg-white w-auto h-auto"
      priority
      alt="Logo"
      width={100}
      height={100}
      src="/logo.png"
    />
  );
};

export default Logo;
