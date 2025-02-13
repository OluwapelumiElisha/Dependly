"use client";
import { useState, useEffect } from "react";
import Navbar from "@/Components/Nav"
import AppIcon from "@/assets/App pic.png"
import playIcon from '@/assets/Play pic.png'
import TabComponent from "@/Components/Tab";
import { Button } from "@/Components/ui/button";
import flutterWaveIcon from '@/assets/image 451.png'
import awsIcon from '@/assets/image 452.png'
import gbtIcon from "@/assets/image 454.png"
import wemaIcon from '@/assets/Group.png'
import payStackIcon from '@/assets/_2960056556176 (1).png'
import NibIcon from '@/assets/image 453.png'
import ImageRow from "@/Components/HDWImages";
import AccordPlusIcon from '@/assets/Plus icon (1).png'
import AccordSubIcon from '@/assets/Plus icon.png'
import communityImage from '@/assets/Illustration.png'
import BlogImage1 from '@/assets/Rectangle 110438.png'
import BlogImage2 from '@/assets/Rectangle 110439.png'
import BlogImage3 from '@/assets/Rectangle 110440.png'
import footerLogo from '@/assets/_2557694377952 (3).png'
import socialMediaLogo from '@/assets/Social icons.png'
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";



// Enterprising title and subtitle 
interface AccordionItem {
  id: number;
  title: string;
  content: string;
}
const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: "Transform Your Business Partnerships",
    content:
      "With Dependly, you can streamline Contractual Agreements for Seamless Collaboration and Enhanced Transparency in Our Enterprise Solution.",
  },
  {
    id: 2,
    title: "Elevate Your Enterprise Efficiency",
    content:
      "Leverage cutting-edge automation and smart workflows to maximize operational efficiency and reduce costs effectively.",
  },
  {
    id: 3,
    title: "Unleash Enterprise Excellence",
    content:
      "Harness innovative technologies and best practices to drive sustainable growth and enterprise-wide success.",
  },
];
// Enterprising title and subtitle 

// Blog
const blogData = [
  {
    image: BlogImage1,
    title: "Navigating the Gig Economy",
    description: "Dive into how Dependly revolutionizes the gig economy, providing freelancers with secure payment processing, contract management, and seamless transactions. Learn how Dependly empowers freelancers to thrive in today's dynamic work landscape."
  },
  {
    image: BlogImage2,
    title: "Contract Management 101: Simplifying Business Agreements with Dependly",
    description: "Uncover the importance of effective contract management for businesses and how Dependly simplifies the process."
  },
  {
    image: BlogImage3,
    title: "Enhancing Online Merchant Transactions",
    description: "Dive into how Dependly revolutionizes the gig economy, providing freelancers with secure payment processing, contract management, and seamless transactions."
  }
];
// Blog
export default function Home() {

  // framer hero for the hero section 
  const [showFirst, setShowFirst] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, []);
  // framer hero for the hero section 

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const bankLogos = [
    { src: flutterWaveIcon, alt: "Flutterwave", lgW: 125.98, lgH: 30, mdW: 125.98, mdH: 30, smW: 125.98, smH: 30, w: 900.02, h: 210.44 },
    { src: payStackIcon, alt: "Paystack", lgW: 168.37, lgH: 30, mdW: 168.37, mdH: 30, smW: 168.37, smH: 30, w: 93.68, h: 16.69 },
    { src: awsIcon, alt: "AWS", lgW: 50.11, lgH: 30, mdW: 50.11, mdH: 30, smW: 50.11, smH: 30, w: 35.81, h: 21.44 },
    { src: gbtIcon, alt: "GBT", lgW: 30, lgH: 30, mdW: 30, mdH: 30, smW: 30, smH: 30, w: 21.44, h: 21.44 },
    { src: wemaIcon, alt: "WBank", lgW: 53.54, lgH: 30, mdW: 53.54, mdH: 30, smW: 53.54, smH: 30, w: 38.26, h: 21.44 },
    { src: NibIcon, alt: "Nibss", lgW: 94.62, lgH: 30, mdW: 94.62, mdH: 30, smW: 94.62, smH: 30, w: 67.6, h: 21.44 },
  ]
  // FAQS 
  const faqs: faqsTypes[] = [
    {
      question: "Is Dependly a Fintech Company?",
      answer: "With Dependly, you can streamline Contractual Agreements for Seamless Collaboration and Enhanced Transparency in Our Enterprise Solution"
    },
    {
      question: "How Do I open An Account with Dependly?",
      answer: "With Dependly, you can streamline Contractual Agreements for Seamless Collaboration and Enhanced Transparency in Our Enterprise Solution"
    },
    {
      question: "Does Dependly have Merchant Referral Program?",
      answer: "With Dependly, you can streamline Contractual Agreements for Seamless Collaboration and Enhanced Transparency in Our Enterprise Solution"
    },
    {
      question: "How Do I Contact The Customer care Centre?",
      answer: "With Dependly, you can streamline Contractual Agreements for Seamless Collaboration and Enhanced Transparency in Our Enterprise Solution"
    },
    {
      question: "How Do I complete my KYC?",
      answer: "With Dependly, you can streamline Contractual Agreements for Seamless Collaboration and Enhanced Transparency in Our Enterprise Solution"
    },
    {
      question: "How Safe Is Transfer Transfer Transactions on Dependly?",
      answer: "With Dependly, you can streamline Contractual Agreements for Seamless Collaboration and Enhanced Transparency in Our Enterprise Solution"
    }
  ];

  interface faqsTypes {
    question: string,
    answer: string
  }
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQS 

  // Sub Input 
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Subscribed with:', email);
  };
  // Sub Input 

  // Use Cases 
  interface UseCase {
    title: string;
    description: string;
  }
  const useCases: UseCase[] = [
    {
      title: 'Local Transfers',
      description:
        'Providing businesses and individuals with a secure and efficient platform for sending and receiving payments within the local ecosystem.',
    },
    {
      title: 'Embedded Contracts',
      description:
        'Users can seamlessly integrate contract terms and agreements directly into the Dependly platform, eliminating the need for manual handling or separate document management systems.',
    },
    {
      title: 'Transaction Financing',
      description:
        'We provide individuals and businesses alike with flexible funding options to support their transactions and capitalize on new opportunities.',
    },
    {
      title: 'Cross-Border Transaction',
      description:
        'Seamless cross-border transactions, enabling users to effortlessly conduct business across international borders with confidence and ease.',
    },
    {
      title: 'Cross-Border Transaction Financing',
      description:
        'Whether you’re expanding your online store into new markets or taking on freelance projects from clients abroad.',
    },
  ];
  // Use Cases 
  return (
    <main className="bg-[#EDF7F9] w-[100%]">
      <div className="bg-cover bg-center hero" >
        <Navbar />
        {/* HERO PAGE  */}
        <section className="p-4 w-[93%] m-auto lg:pt-40 md:pt-40 sm:pt-20 pt-28 lg:flex md:flex sm:block block justify-between">
          {/* Left hand Side  */}
          <div className="relative  h-auto lg:w-[60%] md:w-[60%] sm:w-[90%] w-[100%]">
            <AnimatePresence mode="wait">
              {showFirst ? (
                <motion.div
                  key="first"
                  className="font-sans "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="font-bold lg:text-[40px] md:text-[25px] sm:text-[25px] text-[20px] bg-gradient-to-r from-[#002F72] to-[#2A66B9D9] bg-clip-text text-transparent">
                    Transfer, Embed Contract, <br /> and Escrow
                  </h1> <br />
                  <p className="font-normal text-primaryColor text-[16px] lg:text-[24px] md:text-[20px] sm:text-[20px]">Our Cutting-Edge, Secure Solutions Not Only <span className="font-semibold text-[#001839]">Safeguard Your Financial Moves</span>  But Also Craft Delightful Experiences, Building Unshakeable Trust With Every Interaction.</p>

                  
                  <div className="hidden mt-5 lg:flex md:flex sm:hidden space-x-2 ">
              <Image src={AppIcon} alt="AppIcon"  />
              <Image src={playIcon} alt="AppIcon" />
            </div>
            
            <div className="lg:hidden md:hidden sm:block block">
            <Button className="bg-[#0148AB] text-white px-4 py-2 rounded-lg hover:bg-[#0148AB] mt-5 font-sans">Start Using Dependly</Button>
          </div>
          
                </motion.div>
              ) : (
                <motion.div
                  key="second"
                  className="font-sans "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="font-bold lg:text-[40px] md:text-[25px] sm:text-[25px] text-[20px] bg-gradient-to-r from-[#002F72] to-[#2A66B9D9] bg-clip-text text-transparent">Cross-Border Transactions, Currency Swap,
                    <br /> Escrow—Reimagined </h1> <br />

                  <p className="font-normal text-primaryColor text-[16px] lg:text-[24px] md:text-[20px] sm:text-[20px]">Seamless, secure, and efficient, your <span className="font-semibold text-[#001839]">global transactions with embeded contracts</span>  gives precision and trust. Whether you're handling a cross-border payment, executing a currency swap, or leveraging escrow protection, we ensure your funds move effortlessly while mitigating risks.</p>
                  <div className="hidden mt-5 lg:flex md:flex sm:hidden space-x-2 ">
              <Image src={AppIcon} alt="AppIcon"  />
              <Image src={playIcon} alt="AppIcon" />
            </div>
            
            <div className="lg:hidden md:hidden sm:block block">
            <Button className="bg-[#0148AB] text-white px-4 py-2 rounded-lg hover:bg-[#0148AB] mt-5 font-sans">Start Using Dependly</Button>
          </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* The Tab Component  */}
          <div className=" lg:w-[50%] md:w-[50%] sm:w-[90%] w-[100%]  lg:-mt-6 md:-mt-6 sm:mt-13 mt-12">
            <TabComponent />
          </div>
          {/* The Tab Component  */}


        </section>
      </div>

      {/* div carring bank logo  */}
      <div className="overflow-hidden w-full bg-white py-4 -mt-8">
        <div className="flex space-x-10 animate-marquee items-center">
          {bankLogos.map((logo, index) => (
            <div key={index} className="hover:scale-110 transition-transform duration-300">
              <Image src={logo.src} alt={logo.alt} width={logo.lgW}
                height={logo.lgH}
                className={`
                w-[${logo.w}px] h-[${logo.h}px] 
                sm:w-[${logo.smW}px] sm:h-[${logo.smH}px] 
                md:w-[${logo.mdW}px] sm:h-[${logo.mdH}px] 
                object-contain
              `} />
            </div>
          ))}
        </div>
      </div>
      {/* div carring bank logo  */}
      {/* Section How Dependly Works  */}
      <section id="enterprise-heading" className="w-[90%] m-auto p-4 font-sans mt-10">
        <h1 className="lg:text-[32px] md:text-[29px] sm:text-[18px] text-[16px]  font-bold text-primaryColor">How Dependly Works</h1>
        <div className="lg:flex md:flex sm:block blockmt-10 lg:space-x-4 md:space-x-4 sm:space-x-2 space-x-1 ">
          <div className="lg:w-[58%] md:w-[58%] sm:w-[90%] w-[100%]  overflow-hidden py-4 relative">
            <ImageRow />
          </div>
          <div className="lg:w-[40%] md:w-[40%] sm:w-[90%] w-[100%]">
            <h1 className="text-[20px] lg:text-[40px] md:text-[30px] sm:text-[20px] font-bold leading-tight bg-gradient-to-r from-[#002F72] to-[#2A66B9D9] bg-clip-text text-transparent mt-3">Secure Transactions, Build Trust, and Delight Customers</h1>
            <p className="font-normal text-primaryColor text-[16px] lg:text-[24px] md:text-[20px] sm:text-[20px] mt-4">Our Cutting-Edge, Secure Solutions Not Only <span className="font-semibold text-[#001839]">Safeguard Your Financial Moves</span>  But Also Craft Delightful Experiences, Building Unshakeable Trust With Every Interaction.</p>
            <Button className="bg-[#0148AB] text-white px-4 text-[20px] py-4 rounded-md hover:bg-[#0148AB] mt-5 font-sans">Start Using Dependly</Button>
          </div>
        </div>
      </section>

      {/* Section How Dependly Works  */}

      {/* Section Enterprise Offering  */}
      <section className="w-[100%]  bg-[#CCE9ED80] pb-12 mt-14 font-sans ">
        <div className="w-[90%] m-auto">
          <h2 className="font-bold lg:text-[32px] md:text-[27px] sm:text-[20px] text-[20px]  text-primaryColor pt-14">Enterprise Offering</h2>
          <p className="font-normal lg:text-[20px] md:text-[20px] sm:text-[16px] text-[15px] mt-3 text-[#2D2D2D] font-sans">
            Dependly is purposefully crafted for enterprises seeking to streamline operations and drive sustainable growth.
          </p>

          <div className="mt-8">
            {accordionData.map((item, index) => (
              <div key={item.id} className="mb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`flex justify-between items-center w-[100%]  text-left px-5 py-4  transition-all duration-300 ${openIndex === index
                    ? "bg-[#00616F] text-white rounded-t-xl"
                    : "bg-[#F3F3F3] border border-[#000000] shadow-[0px_2px_0px_#191A23] rounded-xl text-[#00616F]"
                    }`}
                >
                  <span className="flex items-center gap-2">
                    <span className=" lg:text-[32px] md:text-[25px] sm:text-[12px] text-[12px] ">{item.id < 10 ? `0${item.id}` : item.id}</span>
                    <span className="lg:text-[22px] md:text-[20px] sm:text-[18px] text-[12px]">{item.title}</span>
                  </span>

                  {openIndex === index ? (
                    <Image src={AccordSubIcon} alt="subIcon" className="w-6 h-6" />
                  ) : (
                    <Image src={AccordPlusIcon} alt="PlusIcon" className="w-6 h-6" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 bg-[#00616F] rounded-b-lg ${openIndex === index ? "max-h-40 opacity-100 py-3 px-5" : "max-h-0 opacity-0"
                    }`}
                >
                  <hr className="-mt-3" />
                  <p className="text-white mt-5 text-[10px] md:text-[18px] sm:text-[14px] ">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section Enterprise Offering  */}

      {/* Div Use Cases  */}
      <section className="w-[100%] bg-white font-sans">
        <div className="w-[90%] m-auto  bg-white p-4 pt-14 pb-12">
          <h1 className="lg:text-[32px]  mb-5 md:text-[25px] sm:text-[18px] text-[16px] font-bold text-primaryColor">Use Cases</h1>
          {/* Maquree on mobile device update  */}
          <div className="max-w-7xl mx-auto overflow-x-hidden">
            <div
              className="flex space-x-6 min-w-max md:min-w-full mt-6 font-sans sm:animate-marquee animate-marquee md:animate-none"
            >
              {useCases.map((useCase: UseCase, index: number) => (
                <div
                  key={index}
                  className="relative w-64 md:w-80 p-3 bg-white border-[4px] border-transparent"
                >
                  <div className="absolute top-0 left-0 h-full w-[6px] bg-gradient-to-b from-[#001839] via-[#0e3fc6b5] to-[#0E3EC6]"></div>

                  {/* Content */}
                  <h3 className="font-bold lg:text-[20px] text-[#001839] mb-5 md:text-[25px] sm:text-[12px] text-[12px]">
                    {useCase.title}
                  </h3>
                  <p className="lg:text-[19px] text-[#001839] mb-5 md:text-[25px] sm:text-[10px] text-[10px] font-normal">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      {/* Div Use Cases  */}

      {/* Div Be a part of our community  */}
      <section className="bg-[#CCDAEE7D] w-[100%]  pt-16 pb-14">
        <div className="border-2 w-[90%] p-4 m-auto  bg-[#F3F3F3] rounded-3xl ">
          <div className="flex lg:w-[85%] md:w-[85%] sm:w-[85%] w-[90%] m-auto p-4 justify-between space-x-10 mt-4 font-sans">
            <div className="lg:w-[40%] md:w-[40%] sm:w-[40%] w-[40%]">
              <Image src={communityImage} alt="Community" className="lg:w-[311px] lg:h-[277px] md:w-[261px] md:h-[222] sm:w-[211] sm:h-[172] w-[135px] h-[113px]" />
            </div>
            <div className="w-[65%] md:w-[55%] sm:w-[55%] lg:w-[55%] lg:mt-4 md:mt-4 sm:mt-3 mt-0">
              <h1 className="lg:text-[32px] md:text-[22px] sm:text-[14px] text-[10px] font-bold text-primaryColor">Be a part of our community</h1>
              <p className="font-normal text-[#001839] lg:text-[18px] md:text-[13px] sm:text-[10px] text-[7px] lg:mt-4 md:mt-2 sm:mt-1 mt-1">Connect with freelancers, businesses, and online merchants. Share insights, discover opportunities, and stay updated on the latest developments in secure transactions and contract management</p>
              <Button className="bg-[#0148AB] text-white text-[10px] lg:text-[20px] md:text-[18px] lg:px-5 md:px-3 sm:px-2 px-2 lg:py-6 md:py-4 sm:py-3 py-0 sm:text-[14px] rounded-lg hover:bg-[#0148AB] font-sans lg:mt-7 md:mt-4 sm:mt-3 mt-3">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Div Be a part of our community  */}
      {/* Div Blogs  */}
      <section className="w-[100%] bg-[#EEEEEE] pb-9" id="blogs">
        <div className="w-[90%] m-auto font-sans">
          <h1 className="font-bold md:text-[32px] text-[20px] text-primaryColor pt-14" >Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogData.map((post, index) => (
              <div key={index} className="p-4 ">
                <Image src={post.image} alt={post.title} width={300} height={200} className="rounded-md" />
                <h3 className="lg:text-[28px] md:text-[18px] sm:text-[18px] text-[10px] text-[2D2D2D] font-bold mt-4 leading-8">{post.title}</h3>
                <p className="font-normal text-[2D2D2D] mt-2 lg:text-[16px] md:text-[12px] sm:text-[12px] text-[9px]">{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Div Blogs  */}
      {/* SECTION FAQ  */}
      <section className="w-[100%] bg-white font-sans " id="faqs">
        <div className="w-[90%] m-auto pt-12 pb-16">
          <h1 className="text-[32px] font-bold text-primaryColor">FAQs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {faqs.map((faq, index) => (
              <div key={index} className="-mb-1">
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`flex justify-between items-center w-[100%] text-left px-5 py-3 transition-all duration-300 ${openIndex === index
                    ? "bg-[#E6EDF7] rounded-t-xl"
                    : "bg-[#E6EDF7] rounded-lg "
                    }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="lg:text-[22px] md:text-[20px] sm:text-[18px] text-[12px] font-normal">{faq.question}</span>
                  </span>

                  {openIndex === index ? (
                    <Image src={AccordSubIcon} alt="subIcon" className="w-6 h-6" />
                  ) : (
                    <Image src={AccordPlusIcon} alt="PlusIcon" className="w-6 h-6" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 bg-[#E6EDF7] rounded-b-lg ${openIndex === index ? "max-h-40 opacity-100 py-3 px-5" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="w-[100%] m-auto h-[1px] bg-[#0148AB] -mt-3"></div>
                  <p className="text-[#2D2D2D] mt-3 text-[10px] md:text-[18px] sm:text-[14px] lg:text-[18px]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION FAQ  */}

      {/* FOOTER  */}
      {/* Desktop View  */}
      <section className="bg-primaryColor w-[100%] font-sans lg:flex md:flex sm:hidden hidden" id="contact">
        <div className="w-[90%] m-auto pt-14 pb-14">
          <div className="md:flex block md:justify-between items-center ">
            <Image
              src={footerLogo}
              alt="Dependly Logo"
              className="w-144px h-28px"
            />
            <div className="flex space-x-8 text-white text-[18px]">
              <a className="hover:text-[#2d2d2d] cursor-pointer">
                Enterprise Solution
              </a>
              <a className=" hover:text-[#2d2d2d] cursor-pointer">
                FAQ
              </a>
              <a className=" hover:text-[#2d2d2d] cursor-pointer">
                Blog
              </a>
              <a className=" hover:text-[#2d2d2d] cursor-pointer">
                Contact
              </a>
            </div>
            <Image
              src={socialMediaLogo}
              alt="Dependly Logo"
              className="w-30px h-30px"
            />
          </div>
          <div className="flex justify-between mt-20">
            <div className="w-[40%]">
              <Button className="bg-white text-[#2D2D2D] text-[10px] lg:text-[20px] md:text-[18px] sm:text-[14px] rounded-lg font-normal">Contact Us:</Button>
              <ul className="text-[18px] font-normal text-white mt-5">
                <li >Email: info@dependly.com</li>
                <li className="pt-4">Phone: 08190764012</li>
                <li className="pt-4 leading-6">Contact Address: 34, Olusegun<br />
                  Crescent Off AIT Road Lagos State.</li>
              </ul>
            </div>
            <div className="w-[60%]">
              {/* <div className="w-[100%] flex p-4 justify-between bg-white rounded-lg"> */}
              <form onSubmit={handleSubscribe} className="w-[100%] flex p-4 justify-between bg-white rounded-lg">
                <input type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-[55%] lg:w-[55%] md:w-[45%] sm:w-[55%] focus:outline-0 border border-primaryColor text-primaryColor placeholder:text-[18px] placeholder:font-normal placeholder:text-primaryColor pl-2" placeholder="Email" />
                <Button type="submit" className="bg-primaryColor text-white text-[10px] lg:text-[20px] md:text-[16px] px-8 md:px-4 lg:px-8 py-6 sm:text-[14px] rounded-lg hover:bg-[#0148AB] font-sans">Subscribe to Newsletter</Button>
              </form>

              {/* </div> */}
            </div>
          </div>
          <div className="w-full mt-10 h-[1px] bg-white"></div>
          <div className="flex gap-10 mt-12 text-[18px]">
            <p className=" text-white">© 2024 Dependly. All Rights Reserved.</p>
            <p className=" text-white font-normal" >Privacy Policy</p>
          </div>
        </div>

      </section>
      {/* FOOTER  */}
      {/* Desktop View  */}
      {/* Mobile View  */}
      <section className="bg-primaryColor w-[100%] font-sans lg:hidden md:hidden sm:flex">
        <div className="w-[90%] m-auto pt-14 pb-14 flex justify-center items-center">
          <div className="w-[100%]">
            <div className="flex justify-center items-center">
              <Image
                src={footerLogo}
                alt="Dependly Logo"
                className="w-144px h-28px"
              />
            </div>

            <br />

            <div className="text-white text-[18px] ">
              <ul className="text-center font-normal text-[14px]">
                <li className="hover:text-[#2d2d2d] cursor-pointer pt-4">Enterprise Solution</li>
                <li className="hover:text-[#2d2d2d] cursor-pointer pt-4">Blog</li>
                <li className="hover:text-[#2d2d2d] cursor-pointer pt-4">FAQs</li>
                <li className="hover:text-[#2d2d2d] cursor-pointer pt-4">Contact</li>
                <Button className="bg-white text-[#2D2D2D] text-[15px] rounded-lg font-normal mt-5">Contact Us:</Button>
              </ul>
            </div>
            <ul className="text-[14px] font-normal text-white mt-10 text-center">
              <li >Email: info@dependly.com</li>
              <li className="pt-4">Phone: 08190764012</li>
              <li className="pt-4 leading-6">Contact Address: 34, Olusegun<br />
                Crescent Off AIT Road Lagos State</li>
            </ul>



            <div className="w-[70%] mt-9 m-auto">
              {/* <div className="w-[100%] flex p-4 justify-between bg-white rounded-lg"> */}
              <form onSubmit={handleSubscribe} className="w-[100%] p-4 bg-white rounded-md">
                <input type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-[100%] p-4 rounded-md  focus:outline-0 border border-primaryColor text-primaryColor placeholder:text-[18px] placeholder:font-normal placeholder:text-primaryColor pl-2" placeholder="Email" /> <br /> <br />
                <Button type="submit" className="bg-primaryColor w-full text-white text-[18px] font-normal px-8 md:px-4 lg:px-8 py-6 sm:text-[14px] rounded-md hover:bg-[#0148AB] font-sans">Subscribe to Newsletter</Button>

              </form>
              <div className="flex justify-center items-center">
                <Image
                  src={socialMediaLogo}
                  alt="Dependly Logo"
                  className="w-30px h-30px mt-16 "
                />
              </div>
              <div className="flex justify-center items-center">
                <div>
                  <div className="w-full mt-10 h-[1px] bg-white"></div>
                  <p className="mt-8 text-white">© 2024 Dependly. All Rights Reserved.</p>
                  <p className="text-[18px] text-white mt-8 text-center font-normal" >Privacy Policy</p>
                </div>

              </div>


              {/* </div> */}
            </div>
          </div>


        </div>
      </section>
      {/* Mobile View  */}
    </main>



  );
}
