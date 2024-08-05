import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

const AboutSection = () => {
  return (
    <section id="about" className="bg-muted py-12 md:py-20">
      <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            About Me
          </h2>
          <p className="text-muted-foreground">
            I&apos;m a passionate backend engineer with a strong foundation in
            computer science principles and a keen interest in building scalable
            and efficient applications. I have experience working with various
            programming languages, frameworks, and databases, and I&apos;m
            always eager to learn new technologies.
          </p>
          <p className="text-muted-foreground">
            In my free time, I enjoy exploring new programming languages,
            contributing to open-source projects, and staying up-to-date with
            the latest industry trends. I&apos;m also an avid reader and enjoy
            hiking and spending time in nature.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Download My Resume
          </h2>
          <Button className="w-full sm:w-auto bg-background ">Download</Button>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background rounded-md p-4 shadow">
              <h3 className="text-lg font-semibold">Languages</h3>
              <ul className="space-y-2 mt-2">
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="bg-background rounded-md p-4 shadow">
              <h3 className="text-lg font-semibold">Frameworks/Libraries</h3>
              <ul className="space-y-2 mt-2">
                <li>Django</li>
                <li>Flask</li>
                <li>Spring Boot</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="bg-background rounded-md p-4 shadow">
              <h3 className="text-lg font-semibold">Databases</h3>
              <ul className="space-y-2 mt-2">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Redis</li>
              </ul>
            </div>
            <div className="bg-background rounded-md p-4 shadow">
              <h3 className="text-lg font-semibold">Tools</h3>
              <ul className="space-y-2 mt-2">
                <li>Git</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
