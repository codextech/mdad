"use client";
import React from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {ChevronRight} from "lucide-react";

const page = () => {
  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="sm:mt-8">
        <Button variant="ghost" size="icon" className="hover:bg-gray-500/80 hover:text-gray-100 h-9">
          <ChevronRight className="h-4 w-4 rotate-180" />
        </Button>
      </div>
      <div className="flex-auto flex flex-col justify-center items-center space-y-6">
        <Input placeholder="Full Name" />
        <Input placeholder="Phone Number" />
        <Input placeholder="Age" />
        <div className="grid grid-rows-1 grid-cols-2 gap-4">
          <Input placeholder="Male" />
          <Input placeholder="Female" />
        </div>
        <Textarea placeholder="More info" />

        <div className="flex flex-row justify-center items-center gap-5">
          <Button
            variant="destructive"
            className="text-[17px] text-base font-normal font-abel uppercase px-8 rounded-[2px]"
          >
            log out
          </Button>
          <Button
            variant="outline"
            className="text-[17px] text-base font-normal font-abel text-[#343B71] uppercase px-8 rounded-[2px]"
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
