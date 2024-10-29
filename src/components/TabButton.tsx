import React from "react";
import { motion } from "framer-motion";
import "@/allStyleFile/tagButton.css"; 


interface TabButtonProps {
  active: boolean; 
  selectTab: () => void; 
  children: React.ReactNode; 
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      aria-pressed={active} 
      className="tabButton"
    >
      <span className={`text ${active ? "active" : "default"}`}>
        {children}
      </span>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="indicator"
      />
    </button>
  );
};

export default TabButton;
