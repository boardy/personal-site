import * as React from "react";

export type Project = {
    name: string,
    logo: string
    tag_line: string,
    link: string
}

const ProjectCard : React.FC<Project> = (project) => {

    return (
        <div onClick={() => window.open(project.link, '_blank')}
            className='bg-gray-100 border-[1px] border-gray-400 rounded p-4 m-2 flex-1 cursor-pointer hover:bg-gray-200 transition-all ease-in-out'>
            <div className='flex flex-row'>
                <img className='h-[64px] mr-3 mt-1' src={project.logo} alt={`${project.name} Logo`} />
                <h3>{project.name}</h3>
            </div>
            <p className='ml-3'>
                {project.tag_line}
            </p>
        </div>
    )
}

export default ProjectCard;