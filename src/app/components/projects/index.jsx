"use client";
import React from "react";
import ProjectLayout from "./ProjectLayout";

const ProjectList = ({ projects }) => {
  return (
    <div className="w-full max-w-aut px-4 mx-auto xl:max-w-4xl lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center">
      {projects.map((project, index) => {
        return <ProjectLayout key={index} {...project} />;
      })}
    </div>
  );
};

export default ProjectList;
