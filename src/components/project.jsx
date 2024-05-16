import React from 'react';
import SWF from "../images/SWF.png";
import Cara from "../images/cara.png";
import ts from "../images/techstuff.png";

const Project = () => {
    var projects = [
        {
            id: 1,
            name: "Cara Connect",
            path: "https://dashboard.caranetwork.ie",
            snippet: Cara
        },
        {
            id: 2,
            name: "SmartWorkForce",
            path: "https://app.smartworkforce.co.uk",
            snippet: SWF
        },
        {
            id: 3,
            name: "Tech Stuff",
            path: "https://techstuff.ie",
            snippet: ts
        }
    ];

    return (
        <div id="projects" className="min-h-screen w-full bg-gradient-to-b from-purple-950 to-cyan-600 ">
            <div className='p-4 md:px-20'>
                <div>
                    <p className="text-4xl font-bold text-shadow-sm text-amber-600 mb-4 inline border-b-4 border-amber-900">Projects</p>
                </div>
                <p className="box-border w-96 text-justify text-white px-4 py-10 md:text-xl">Check out some projects I worked on.</p>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {projects.map((project) => (
                        <div key={project.id} className='border-2 py-4 px-2 border-yellow-300 bg-black hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg shadow-2xl'>
                            <img className='rounded-md w-full h-64 object-cover' src={project.snippet} alt={project.name} />
                            <div className='flex justify-around'>
                                <p className='mt-5 text-xl text-white font-bold'>{project.name}</p>
                                <a className="bg-gradient-to-r from-blue-500 to-gray-500 hover:bg-blue-700 hover:scale-110 text-white mt-4 ml-2 font-bold py-2 px-4 shadow-md flex items-center rounded-full"
                                    href={project.path}
                                    target="_blank" rel="noreferrer"
                                >
                                    Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
