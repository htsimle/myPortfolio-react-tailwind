import React, { useState } from 'react';
import InstagramLogo from "../images/icons8-resume-64.png";
import LinkedInLogo from "../images/LinkedIn-Icon-Logo.svg";
import GitHubLogo from "../images/GitHub-Log.svg";
import GmailLogo from "../images/Gmail-Logo.svg";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const socialMediaLinks = [
    { name: 'Mail', url: 'mailto:farhanalibhatti785@gmail.com', logo: GmailLogo },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/farhan-ali-bhatti/', logo: LinkedInLogo },
    { name: 'GitHub', url: 'https://github.com/htsimle', logo: GitHubLogo },
    { name: 'Resume', url: "/Farhan Ali resumeDev.pdf", logo: InstagramLogo, download:true },
  ];

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="hidden md:block fixed top-1/3 left-0 h-full z-50">
      <div
        className={`h-1/4 bg-gradient-to-r from-cyan-800 to-white p-2 rounded-r-lg ${expanded ? 'w-35' : 'w-16'
          }`}
        onMouseEnter={handleExpand}
        onMouseLeave={handleExpand}
      >
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            download={link.download}
            rel="noopener noreferrer"
            className={`block mb-2 text-black transition-transform transform hover:scale-${expanded ? '110' : '105'} flex items-center justify-${expanded ? 'start' : 'center'} h-${expanded ? '8' : '16'}`}
          >
            <img
              src={link.logo}
              alt={link.name}
              className="w-10 h-10 mx-auto ml-2"
            />
            {expanded && <span>{link.name}</span>}
            <span className="sr-only">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
