"use client";
import React, {useEffect} from "react";
import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  useEffect(() => {
    localStorage.removeItem('current_scanned')
  })

  return (
    <div className="h-full flex flex-col">
      <div className="sm:mt-8">
        <Button  onClick={() => router.push('/home')} variant="ghost" size="icon" className="hover:bg-gray-500 hover:text-gray-100 h-9">
          <ChevronRight className="h-4 w-4 rotate-180" />
        </Button>
      </div>
      <div className="flex-auto flex justify-center items-center">
        <div className="flex flex-row justify-center items-center space-x-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width={15} height={14} viewBox="0 0 15 14" fill="none">
              <path d="M1 9L5 12L14 1" stroke="white" strokeWidth={2} />
            </svg>
          </div>
          <div className="text-xl font-abel">Registered</div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Page;
