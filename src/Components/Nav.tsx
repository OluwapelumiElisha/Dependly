"use client";
import { useState } from "react";
import Image from "next/image";
import BurgerMenuIcon from "@/assets/Burger menu icon.png";
import closeMenuIcon from "@/assets/Vector.png";
import Logo from "@/assets/Dependly FLW 2.png";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  const scrollToEnterprise = () => {
    const headingElement = document.getElementById("enterprise-heading");
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToFAQs = () => {
    const headingElement = document.getElementById("faqs");
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToBlogs = () => {
    const headingElement = document.getElementById("blogs");
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    const headingElement = document.getElementById("contact");
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStarted = ( ) =>{
    router.push('/Get-Started')
  }
  return (
    <nav className="lg:bg-[#ffffffa6] md:bg-[#ffffff] sm:bg-[#ffffff] bg-[#EDF7F9]  w-[100%] fixed top-0 left-0 z-50">
      <div className="w-[90%] m-auto  p-4 flex justify-between  items-center">
        {/* Logo */}
        <Link href={"/"}>
          <img
            src={Logo}
            alt="Dependly Logo"
            className="lg:w-[180px] lg:h-[54px] md:w-[180px] md:h-[54px] sm:w-[180px] sm:h-[54px] w-[124px] h-[38px]"
          />
        </Link>
        <a></a>
        {/* Desktop Menu */}
        <div className="flex items-center space-x-6 md:space-x-6 lg:space-x-8 font-sans font-normal ">
          <div className="hidden md:flex space-x-6 md:space-x-5 lg:space-x-10 items-center text-[#2D2D2D]">
            <a
              onClick={scrollToEnterprise}
              className="hover:text-blue-600 cursor-pointer"
            >
              Enterprise Solution
            </a>
            <a
              onClick={scrollToFAQs}
              className=" hover:text-blue-600 cursor-pointer">
              FAQ
            </a>
            <a
              onClick={scrollToBlogs}
              className=" hover:text-blue-600 cursor-pointer">
              Blog
            </a>
            <a onClick={scrollToContact} className=" hover:text-blue-600 cursor-pointer">
              Contact
            </a>
          </div>
          <div></div>
          <Button onClick={handleGetStarted} className="hidden md:block bg-[#0148AB] text-white px-4 py-2 rounded-lg hover:bg-[#0148AB]">
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <Image
              src={closeMenuIcon}
              className="w-[24px] h-[24px]"
              alt="Burger-menu-icon"
            />
          ) : (
            <Image
              src={BurgerMenuIcon}
              className="w-[24px] h-[16px]"
              alt="Burger-menu-icon"
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#EDF7F9] shadow-lg fixed top-25 left-0 w-full py-4 px-8 font-sans font-normal text-[#2D2D2D]">
          <a onClick={scrollToEnterprise} className="block  py-4">
            Enterprise Solution
          </a>
          <a onClick={scrollToFAQs} className="block  py-4">
            FAQ
          </a>
          <a onClick={scrollToBlogs} className="block  py-4">
            Blog
          </a>
          <a onClick={scrollToContact} className="block  py-4">
              Contact
            </a>
          <a
            onClick={handleGetStarted}
            className="block mt-4 text-center bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Start Using Dependly
          </a>
        </div>
      )}
      {/* Mobile Menu */}
    </nav>
  );
};

export default Navbar;
