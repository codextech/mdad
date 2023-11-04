"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  // local storage
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isCancelled, setIsCancelled] = useState(false);

  useEffect(() => {
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("userData")) || [];
    setUserData(userDataFromLocalStorage);
    setFilteredData(userDataFromLocalStorage)
    console.log(userDataFromLocalStorage);
  }, []);

  useEffect(() => {
    // Filter the data based on the search term
    if (searchTerm) {
      const filtered = userData.filter((user) => user.fullName?.toLowerCase()?.includes(searchTerm.toLowerCase()));
      setFilteredData(filtered);
    } else {
      setFilteredData(userData);
    }
  }, [searchTerm, userData]);

  const handleCancel = () => {
    // Reset the search term and filtered data
    setSearchTerm("");
    router.push('/home')
  };
  return (
    <div className="h-full">
      <div className="text-end">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gray-500/80 hover:text-gray-100 h-9"
          onClick={handleCancel}>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_371_1498)">
              <path
                d="M23.4546 1.63615C23.7558 1.33495 23.7558 0.846592 23.4546 0.545384C23.1534 0.244177 22.6651 0.244177 22.3638 0.545384L12 10.9092L1.63615 0.545384C1.33495 0.244177 0.846592 0.244177 0.545384 0.545384C0.244177 0.846592 0.244177 1.33495 0.545384 1.63615L10.9092 12L0.545384 22.3638C0.244177 22.6651 0.244177 23.1534 0.545384 23.4546C0.846592 23.7558 1.33495 23.7558 1.63615 23.4546L12 13.0908L22.3638 23.4546C22.6651 23.7558 23.1534 23.7558 23.4546 23.4546C23.7558 23.1534 23.7558 22.6651 23.4546 22.3638L13.0908 12L23.4546 1.63615Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_371_1498">
                <rect width={24} height={24} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </div>

      <div className="mt-12 relative">
        <Input
          className="h-11 ps-12"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          className="absolute left-3 top-1/2 -translate-y-1/2"
          viewBox="0 0 24 24"
          fill="none">
          <circle cx={11} cy={11} r={7} stroke="white" strokeWidth={2} />
          <path d="M20 20L17 17" stroke="white" strokeWidth={2} strokeLinecap="round" />
        </svg>
      </div>

      <div className="mt-10">
        <Table className="border-separate border-spacing-0">
          <TableHeader>
            <TableRow className="[&_th]:border [&_th]:border-[#545C9B] [&_th:first-child]:border-r-0 [&_th:nth-child(2)]:border-r-0">
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Phone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((user) => (
              <TableRow
                key={user.id}
                className=" [&_td]:border [&_td]:border-t-0 [&_td]:border-[#545C9B] [&_td:first-child]:border-r-0 [&_td:nth-child(2)]:border-r-0 [&_td:nth-child(2)]:text-center">
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;
