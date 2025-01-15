'use client';
import React, { useState } from 'react'
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';
import { FileImage } from 'lucide-react';



function Page() {
  const [meassge, setMeassge] = useState("");
  const { toast } = useToast()

  const handleGenerateImage = async (e) => {
    e.preventDefault();
    let data = {
      prompt: meassge,
      size: "1024x1024",
    }

    try {
      let response = await axios.post('/api/text2image', {
          data: data
      });
  
      console.log(response);
    } catch (error) {
      console.log(error.response.data.data);
      toast({
        variant: "destructive",
        description: error.response.data.data,
      })
    }
  }


  return (
    <main className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-100 to-pink-100'>
      <section className='flex flex-col md:flex-row bg-white p-4 rounded-lg shadow-lg gap-4 w-screen md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] h-screen md:h-auto'>
        <form onSubmit={handleGenerateImage} className='flex flex-col gap-4 w-auto md:min-w-[300px]'>
          <Label htmlFor="message">Create an image from text prompt</Label>
          <Textarea id={"message"} onChange={(e) => {setMeassge(e.target.value)}} placeholder="Type your message here." required/>

          <Label htmlFor="dimensions">Dimensions</Label>
          <Select id="dimensions" name="dimensions">
            <SelectTrigger className="w-[100%]">
              <SelectValue placeholder="Select dimensions" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Dimensions</SelectLabel>
                <SelectItem value="100x100">100x100</SelectItem>
                <SelectItem value="200x200">200x200</SelectItem>
                <SelectItem value="150x150">150x150</SelectItem>
                <SelectItem value="120x120">120x120</SelectItem>
                <SelectItem value="180x180">180x180</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <button
            type="submit"
            className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
          >
            Generate Image
          </button>
        </form>


        <div className='w-full h-96 border border-gray-200 rounded-lg flex items-center justify-center'>
        <FileImage size={48} className='opacity-30'/>
        </div>
      </section>
    </main>
  )
}

export default Page