'use client';

import { User } from "@prisma/client";

import Image from "next/image";

interface AvatarProps {
  user?: User;
};

const Avatar: React.FC<AvatarProps> = ({ user }) => {

  return (
    <div className="relative">
      <div className="
        relative 
        inline-block 
        rounded-full 
        overflow-hidden
        h-5 
        w-5 
        md:h-7
        md:w-7
      ">
        <Image
          fill
          src={user?.image || '/images/placeholder.jpg'}
          alt="Avatar"
        />
      </div>
      <span
      className="
        absolute
        block
        rounded-full
        bg-green-500
        ring-2
        ring-white
        top-0
        right-0
        h-2
        w-2
        md:h-2
        md:w-2
      ">

      </span>
    </div>
  );
}

export default Avatar;