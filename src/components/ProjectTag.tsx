import React from "react";
import "@/allStyleFile/projectTag.css";

// Define the types for the props
interface ProjectTagProps {
  name: string; 
  onClick: (name: string) => void; 
  isSelected: boolean; 
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`tagButton ${isSelected ? "selected" : "default"}`} 
      onClick={() => onClick(name)}
      aria-pressed={isSelected} 
    >
      {name}
    </button>
  );
};

export default ProjectTag;
