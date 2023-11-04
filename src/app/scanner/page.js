/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React,{useState,useEffect} from "react";
import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";
import QrReader from 'react-qr-scanner'
import { useRouter } from 'next/navigation'


const Page = () => {
  const router = useRouter()


const [state,setState]= useState({
    delay: 1000,
    result: '',
});

  const handleScan=(data)=>{
    console.log(data);
    if(data) {
    setState({
      result: data,
    });
    }
  }
 const  handleError=(err)=>{
    console.error(err)
  }

  useEffect(() => {

    if(state.result) {
        localStorage.setItem('current_scanned', JSON.stringify(state.result));
        router.push('/signin')
    }

  }, [state])



  return (
    <div className="h-full flex flex-col">
      <div className="sm:mt-8">
        <Button onClick={() => router.push('/home')} variant="ghost" size="icon" className="hover:bg-gray-500 hover:text-gray-100 h-9">
          <ChevronRight className="h-4 w-4 rotate-180" />
        </Button>
      </div>
          <QrReader
          delay={state.delay}
          style={{ width: '100%', height: '100%' }}
          onError={handleError}
          onScan={handleScan}
          constraints={ {video: true} }
          />
        {" "}
    </div>
  );
};

export default Page;
