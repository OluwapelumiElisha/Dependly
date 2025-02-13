"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

const images = [
  '/images/Property-1=Frame-1000005210.png',
  '/images/Property-1=Frame-1000005209.png',
  '/images/Property-1=Frame-1000005208.png',
  '/images/Property-1=Frame-1000005207.png',
  '/images/Property-1=Frame-1000005211.png',
  '/images/Property-1=Frame-1000005212.png',
  '/images/Property-1=Frame-1000005213.png',
  '/images/Property-1=Frame-1000005214.png',
  '/images/Property-1=Frame-1000005215.png',
  '/images/Property-1=Frame-1000005216.png',
  '/images/Property-1=Frame-1000005217.png',
  '/images/Property-1=Frame-1000005219.png',
  '/images/Property-1=Frame-1000005220.png',
  '/images/Property-1=Frame-1000005221.png',
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
