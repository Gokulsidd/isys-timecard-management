"use client";

import { StatusButton } from "./status-button";
import { Button } from "./ui/button";

interface timeSheetCardProps {
  name: string;
  status: string;
}

export const TimeSheetCard = ({ name, status }: timeSheetCardProps) => {
  return (
    <div className="w-full sm:max-w-lg  lg:max-w-xl xl:max-w-2xl px-4 py-2 rounded-[8px] flex flex-col md:flex-row gap-2 items-center justify-between border border-[#dfdfdf]">
      <p className="font-semibold text-lg text-[#444444]">{name}</p>
        <StatusButton label={status} />
        <Button variant="default" size="sm" className="w-full md:w-auto px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg">
          <p className="text-[14px] font-normal">View</p>
        </Button>
    </div>
  );
};
