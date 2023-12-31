'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import {
  FaGithubSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaBehance,
} from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="/hey.png"
              alt="Brian's portrait"
              width="100"
              height="100"
              quality="95"
              priority={true}
              className="h-30 w-29 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-normal !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="p-4 font-bold text-left">
          Product Designer & Web Dev.
        </span>{' '}
        <br />
        <p className="p-4 text-xl text-center">
          {' '}
          Thinking through problems in life & business, Designing interfaces
          with attention to details, and Build accessible, inclusive products
          and digital experiences for the web.
        </p>
      </motion.h1>
      {/* I’m Brian, a
          Designer, Software Developer and Techpreneur based in Burundi. I’m the
          founder and CEO of Bluetec, where we build accessible, inclusive
          products and digital experiences for the web. */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex">
          <a
            className=" text-gray-700 hover:text-gray-950 flex mx-2 items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:text-white/60"
            href="https://www.twitter.com/monfortbrian_"
            target="_blank"
          >
            <FaTwitter />
          </a>

          {/* <a
          className=" text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:text-white/60"
          href="https://www.instagram.com/monfortbrian_/"
          target="_blank"
        >
          <FaInstagram />
        </a> */}
          <a
            className=" text-gray-700 hover:text-gray-950 flex mx-2 items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:text-white/60"
            href="https://www.linkedin.com/in/briannkuru/"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a
            className=" text-gray-700 flex mx-2 items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:text-white/60"
            href="https://github.com/monfortbrian"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className=" text-gray-700 flex mx-2 items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:text-white/60"
            href="https://www.behance.net/monfortbrian"
            target="_blank"
          >
            <FaBehance />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
