import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import content from '../content';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Navigation() {
  return (
    <div
      style={{
        background: 'black',
      }}
      className="font-dosis fixed top-0 w-screen z-40"
    >
      <div className="flex items-center w-10/12  mx-auto py-3">
        <ScrollLink
          to="header"
          smooth={true}
          className="text-3xl  font-bold text-white flex-1 cursor-pointer"
        >
          <h1>
            {content.nav.logo}
          </h1>
        </ScrollLink>

        <div className="mr-4 text-3xl">
            <a target="_blank" href={`https://github.com/alexemrob`}><FaGithub /></a>
          </div>
          <div className="mr-4 text-3xl">
            <a target="_blank" href={`https://www.linkedin.com/in/alexemrob/`}><FaLinkedin /></a>
          </div>

        <div className="text-white text-xl">
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span className="mr-4 cursor-pointer" key={index}>
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}

        </div>
      </div>
    </div>
  );
}
