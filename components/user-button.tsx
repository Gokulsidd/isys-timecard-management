"use client";

import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface userButtonProps {
  imageLink?: any | undefined;
  name: string | undefined;
}

export const UserButton = ({ imageLink, name }: userButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border border-gray-200 w-[200px] rounded-[6px]">
        <div className="flex gap-x-1 items-center justify-around py-2 px-4 rounded-[8px] bg-[#fefefe]">
          <p className="font-semibold text-[14px] md:text-[18px] text-[#444444] max-w-[100px] overflow-hidden whitespace-nowrap text-ellipsis">
            {name}
          </p>
          <div className="w-[42px] h-[42px] rounded-full bg-[#9633d0]  flex items-center justify-center">
            <p className="text-[#fefefe] font-normal text-[22px]">G</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px]">
        <DropdownMenuItem>My Account</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
