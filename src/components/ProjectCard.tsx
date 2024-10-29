import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import "@/allStyleFile/projectCard.css"; 

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div className="project-card">
      <div
        className="project-image"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay">
          <Link href={gitUrl} className="icon-link" aria-label={`View code for ${title}`}>
            <CodeBracketIcon className="icon" />
          </Link>
          <Link href={previewUrl} target="_blank" className="icon-link" aria-label={`View live preview of ${title}`}>
            <EyeIcon className="icon" />
          </Link>
        </div>
      </div>
      <div className="project-content">
        <h5 className="project-title">{title}</h5>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
