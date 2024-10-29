import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar"

import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import AchievementsSection from "@/components/AchievementsSection";
import "@/allStyleFile/page.css"


export default function Home() {
  return (
    <main className="main-container">
      <Navbar />
      <div className="container">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}