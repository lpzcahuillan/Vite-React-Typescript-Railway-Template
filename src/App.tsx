import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface Props {
  title: string;
}

const Template: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <header className="bg-gray-900 p-4">
        <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
        <nav className="flex justify-between">
          <a className="text-white font-medium" href="#">
            Home
          </a>
          <a className="text-white font-medium" href="#">
            About
          </a>
          <a className="text-white font-medium" href="#">
            Projects
          </a>
          <a className="text-white font-medium" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Template;
