import React from 'react';
import ReactIcon from "../images/icons8-react-js.svg";
import Javascript from "../images/file-type-js-official.svg";
import Docker from "../images/docker-original-wordmark.svg";
import Node from "../images/node-js.svg";
import Github from "../images/GitHub-Log.svg";
import PSQL from "../images/postgresql.svg";
import Rails from "../images/file-type-rails.svg";
import Laravel from "../images/laravel-plain-wordmark.svg";

const experience = () => {

    var projects = [
        {
            id: 1,
            name: "JavaScript",
            logo: Javascript,
            shadow: "shadow-lg shadow-yellow-300"
        },
        {
            id: 2,
            name: "React",
            logo: ReactIcon,
            shadow: "shadow-lg shadow-cyan-500"
        },
        {
            id: 3,
            name: "Node Js",
            logo: Node,
            shadow: "shadow-lg shadow-green-400"
        },
        {
            id: 4,
            name: "Docker",
            logo: Docker,
            shadow: "shadow-lg shadow-blue-300"
        },
        {
            id: 5,
            name: "Github",
            logo: Github,
            shadow: "shadow-lg shadow-white"
        },
        {
            id: 6,
            name: "Laravel",
            logo: Laravel,
            shadow: "shadow-lg shadow-orange-600"
        },
        {
            id: 7,
            name: "PostgreSQL",
            logo: PSQL,
            shadow: "shadow-lg shadow-blue-500"
        },
        {
            id: 8,
            name: "Rails",
            logo: Rails,
            shadow: "shadow-lg shadow-red-700"
        }
    ];

    return (
        <div id="experience" className="min-h-screen w-full bg-gradient-to-b from-cyan-600 to-purple-950">
            <div className="p-4 h-full text-left md:px-20">
                <div className=' py-20'>
                    <p className="text-4xl font-bold text-shadow-sm text-amber-600 mb-4 inline border-b-4 border-amber-900">Experience</p>
                </div>
                <div className='grid grid-cols-2 gap-10 md:grid-cols-4'>
                    {projects.map((project) => (
                        <div className={project.shadow}>
                            <div key={project.id} className="mb-8 flex flex-col items-center">
                                <img className="w-24 h-24 mb-2" src={project.logo} alt={project.name} />
                                <div>
                                    <p className="text-xl text-white font-bold">{project.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default experience;
