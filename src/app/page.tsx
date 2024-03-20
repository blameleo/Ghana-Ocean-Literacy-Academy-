"use client";
import Navbar from "@/components/ui/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
export default function Home() {
  return (
    <main className="bg-slate-950 ">
      <LampContainer className=" ">
        {/* <CardContainer> */}

        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="-mt-96  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
        >
          <div className="text-white  font-bold  mt-20">
            Future Ocean{" "}
            <span className="text-yellow-500">Leaders Academy</span>
            <p className="text-[15px] Capitalize py-10 tracking-wide">
              {" "}
              Empowering Tomorrow’s Ocean Leaders Today.
            </p>
          
          </div>
         
        </motion.h1>
   
      </LampContainer>

    </main>
  );
}

