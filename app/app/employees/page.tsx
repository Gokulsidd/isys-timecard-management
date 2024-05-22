"use client";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const Font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { employees, sortLabels } from "@/lib/constants";
import EmployeeCard from "@/components/employees/employee-card";

const Employees = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedProjects, setSearchedProjects] = useState([]);

  const handleSearchTextChange = (e: any) => {};

  const handleSortSelect = (label: string) => {};
  return (
    <div className="p-4 space-y-6">
      <div className="flex flex-col gap-y-4 sm:flex-row lg:gap-x-6 gap-x-4 sm:items-center items-start justify-between">
        <div className="flex flex-row  gap-x-4  items-center">
          <h1
            className={cn(
              "text-[28px] leading-[32px] font-bold",
              Font.className
            )}
          >
            Employees
          </h1>
          <p className="text-muted-foreground sm:w-[40px]">{`( ${"7"} )`}</p>
        </div>
        <div className="flex flex-row gap-x-4 w-full">
          <Input
            type="text"
            placeholder="search"
            value={searchText}
            onChange={(e) => handleSearchTextChange(e)}
            className="w-3/4 md:w-full sm:w-auto lg:w-[400px]"
          />
          <DropdownMenu>
            <DropdownMenuTrigger className="flex w-1/4  items-center justify-center rounded-md outline-none focus:outline-none border border-gray-200 h-10 sm:w-10">
              <Image
                src={"/filter-2.png"}
                width={24}
                height={24}
                alt="filter"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                {sortLabels.map((item) => {
                  return (
                    <DropdownMenuItem
                      onSelect={() => handleSortSelect(item)}
                      key={item}
                    >
                      {item}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button
          variant={"outline"}
          size={"lg"}
          className="outline-[#1DCE00] text-[#1DCE00] w-full sm:w-[150px]  lg:w-[200px]"
        >
          Add Employees
        </Button>
      </div>
      <div className="flex flex-wrap gap-3 items-start justify-start sm:grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {employees.map((emp) => {
            return (
                <EmployeeCard {...emp} key={emp.employeeID} />
            )
        })}
      </div>
    </div>
  );
};

export default Employees;
