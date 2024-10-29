"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import "../allStyleFile/heroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-text"
        >
          <h1 className="hero-heading">
            <span className="hero-highlight">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Taha Hussain",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "Marketing Officer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="hero-paragraph">
            Creative Front-End Developer with a strong background in transforming complex design concepts into user-friendly digital experiences.
          </p>
          <div>
            <Link
              href="/#contact"
              className="button-hire"
            >
              Hire Me
            </Link>
            <Link
              href="/images/Taha Hussain.pdf"
              target="_blank"
              className="button-download"
            >
              <span className="download-inner">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-image-container"
        >
          <div className="hero-image-wrapper">
            <Image
              src="/images/Taha pic.jpg"
              alt="hero image"
              className="hero-image"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
