"use client";
import Image from "next/image";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex flex-col justify-center items-center space-y-8 h-full">
      <div>
        <svg width={57} height={57} viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M28.3101 11.3239L28.3101 2.83099"
            stroke="white"
            strokeWidth="5.66197"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28.3101 53.7887L28.3101 48.1268"
            stroke="white"
            strokeWidth="5.66197"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M48.1261 28.3098L53.7881 28.3098"
            stroke="white"
            strokeWidth="5.66197"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.83044 28.3098L11.3234 28.3098"
            stroke="white"
            strokeWidth="5.66197"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44.3248 12.2954L46.3266 10.2936"
            stroke="white"
            strokeWidth="5.66197"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.2928 46.3261L14.2965 42.3225"
            stroke="white"
            strokeWidth="5.66197"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42.3232 42.3225L46.3269 46.3261"
            stroke="white"
            strokeWidth="5.66197"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.2928 10.2936L16.2983 16.299"
            stroke="white"
            strokeWidth="5.66197"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="text-center font-normal">
        <div className="text-[38px] text-4xl">MDAD</div>
        <div className="text-[11px] tracking-[3px]">Count On Us</div>
      </div>

      <div>
        <Select>
          <SelectTrigger className="w-[250px] h-9 bg-[#282F62] border-[#545C9B] text-indigo-400 rounded-[2px]">
            <SelectValue placeholder="Choose the shelter" />
          </SelectTrigger>
          <SelectContent className="bg-[#282F62] border-[#545C9B] text-white">
            <SelectItem value="shelter1">Shelter 1</SelectItem>
            <SelectItem value="shelter2">Shelter 2</SelectItem>
            <SelectItem value="shelter3">Shelter 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Button
          variant="outline"
          className="text-[17px] text-base font-normal font-abel text-[#343B71] uppercase px-8 rounded-[2px] "
          onClick={() => router.push('/home')}>
          Done
        </Button>
      </div>
    </div>
  );
}
