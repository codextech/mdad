"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight } from "lucide-react";
import { useRouter } from 'next/navigation'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const Page = () => {
  const router = useRouter()


  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    age: "",
    male: "",
    female: "",
    gender: "",
    moreInfo: "",
    id: ""
  });

  useEffect(() => {
    // Load user data from local storage
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("userData")) || [];
    if (userDataFromLocalStorage.length) {
      const scannedData = JSON.parse(localStorage.getItem("current_scanned")) || {};
      const found = userDataFromLocalStorage.find(u => u.id == scannedData.text);
      if (found) {
        setFormData(found)
      }
    }
  }, []);

  // Function to handle saving the data to localStorage
  const handleSave = () => {
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("userData")) || [];
    const scannedData = JSON.parse(localStorage.getItem("current_scanned"));
    if (scannedData) {
      formData.id = scannedData.text;
    }

    const found = userDataFromLocalStorage.find(u => u.id == formData.id);
    const index = userDataFromLocalStorage.findIndex(u => u.id == formData.id);
    if (found) {
      userDataFromLocalStorage[index] = formData;
    } else {
      userDataFromLocalStorage.push(formData)
    }

    localStorage.setItem("userData", JSON.stringify(userDataFromLocalStorage));
    router.push('/registered')
  };

  // Function to update the form data state
  const handleInputChange = (e, gender) => {
    const { name = gender, value } = e.target || {};
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log(formData)
  }, [formData])

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="sm:mt-8">
        <Button onClick={() => router.push('/scanner')} variant="ghost" size="icon" className="hover:bg-gray-500/80 hover:text-gray-100 h-9">
          <ChevronRight className="h-4 w-4 rotate-180" />
        </Button>
      </div>
      <div className="flex-auto flex flex-col justify-center items-center space-y-6">
        <Input placeholder="Full Name" name="fullName" value={formData.fullName} onChange={handleInputChange} />
        <Input
          placeholder="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <Input placeholder="Age" name="age" value={formData.age} onChange={handleInputChange} />
        <div className="grid grid-rows-1 grid-cols-2 gap-3 w-full">
          {/* <Input placeholder="Male" name="male" value={formData.male} onChange={handleInputChange} />
          <Input placeholder="Female" name="female" value={formData.female} onChange={handleInputChange} /> */}


          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
            />
            Female
          </label>

        </div>
        <Textarea placeholder="More info" name="moreInfo" value={formData.moreInfo} onChange={handleInputChange} />

        <Button
          variant="outline"
          className="text-[17px] text-base font-normal font-abel text-[#343B71] uppercase px-8 rounded-[2px]"
          onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default Page;
