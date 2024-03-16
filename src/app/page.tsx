"use client";
import Navbar from "@/components/ui/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
export default function Home() {
  return (
    <main className="bg-slate-950  min-h-screen backimage">
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
          className="mt-10  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <h1 className="text-white  font-bold  ">
            Future Ocean{" "}
            <span className="text-yellow-500">Leaders Academy</span>
            <p className="text-[15px] Capitalize py-10 tracking-wide">
              {" "}
              Empowering Tomorrow’s Ocean Leaders Today.
            </p>
          </h1>
          {/* <img src="/backimage-removebg.png" alt="" width={64}/> */}
        </motion.h1>
      </LampContainer>

      <div className="hidden sm:block">
        <BackgroundBeams />
      </div>
    </main>
  );
}
