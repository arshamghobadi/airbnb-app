'use client';
import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  userImage: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ userImage }) => {
  return (
    <Image
      className=" rounded-full"
      height={30}
      width={30}
      alt="Avatar"
      src={userImage || '/placeholder.jpg'}
    />
  );
};

export default Avatar;
