"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import "../allStyleFile/about.css";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li className="space">HTML5</li>
        <li className="space">CSS3</li>
        <li className="space">Bootstrap 5</li>
        <li className="space">JavaScript</li>
        <li className="space">TypeScript</li>
        <li className="space">Tailwind CSS</li>
        <li className="space">Next.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Inter in Pre-Engineering</li>
        <li>AI Web 3.0 Metaverse in Governor House</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Learning FullStack SMIT</li>
        <li>Learning AI Web 3.0 Metaverse in Governor House</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition(); 

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="about-section" id="about">
  <div className="about-container">
    <Image src="/images/screenPic.webp" alt="About Me" width={500} height={500} className="about-image" />
    <div className="about-content">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
      &quot;As a skilled Front-End Developer...&quot;
      </p>
      <div className="tabs-container">
        <TabButton
          selectTab={() => handleTabChange("skills")}
          active={tab === "skills"}
        >
          Skills
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          Education
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("certifications")}
          active={tab === "certifications"}
        >
          Certifications
        </TabButton>
      </div>
      <div className="tab-content">
        {TAB_DATA.find((t) => t.id === tab)?.content}
      </div>
    </div>
  </div>
</section>

  );
};

export default AboutSection;
