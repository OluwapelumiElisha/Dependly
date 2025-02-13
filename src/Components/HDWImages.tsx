"use client";

import Image from "next/image";
import image1 from '@/assets/Property 1=Frame 1000005210.png'
import image2 from '@/assets/Property 1=Frame 1000005209.png'
import image3 from '@/assets/Property 1=Frame 1000005208.png'
import image4 from '@/assets/Property 1=Frame 1000005207.png'
import image5 from '@/assets/Property 1=Frame 1000005211.png'
import image6 from '@/assets/Property 1=Frame 1000005212.png'
import image7 from '@/assets/Property 1=Frame 1000005213.png'
import image8 from '@/assets/Property 1=Frame 1000005214.png'
import image9 from '@/assets/Property 1=Frame 1000005215.png'
import image10 from '@/assets/Property 1=Frame 1000005216.png'
import image11 from '@/assets/Property 1=Frame 1000005217.png'
import image12 from '@/assets/Property 1=Frame 1000005218.png'
import image13 from '@/assets/Property 1=Frame 1000005219.png'
import image14 from '@/assets/Property 1=Frame 1000005220.png'
import image15 from '@/assets/Property 1=Frame 1000005221.png'
import { useEffect, useState } from "react";

const images = [
    image1,
    image2,
    image3, 
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
];

export default function ImageRow() {
    const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
    className="flex transition-transform duration-1000 ease-in-out"
    style={{ transform: `translateX(-${scrollIndex * 100}%)` }} 
  >
    {images.concat(images).map((src, index) => (
      <div key={index} className="w-full shrink-0 ">
        <Image
          src={src}
          alt={`Image ${index + 1}`}
          layout="responsive"
          width={500}
          height={50}
          className="object-cover w-full h-full"
          
        />
      </div>
    ))}
  </div>
    
  );
}
