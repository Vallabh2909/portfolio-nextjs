import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const ProjectSection = () => {
  return (
    <section id="projects" className="bg-background py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 flex flex-col items-center gap-8">
        <div className="max-w-[700px] text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Here are some of the projects I have worked on to showcase my skills
            and experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

const ProjectCard = () => {
  return (
    <Card className="max-w-full mx-auto p-4 border rounded-lg shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          E-commerce Platform
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row md:items-start">
        <Image
          src="/gta.jpeg"
          width={160}
          height={90}
          alt="Blog Post 1"
          className="w-full md:w-40 md:h-24 md:mr-4 mb-4 md:mb-0"
          style={{ aspectRatio: "160/90", objectFit: "cover" }}
        />
        <p className="text-muted-foreground md:flex-1">
          Developed a scalable and secure e-commerce platform using Django,
          PostgreSQL, and AWS services.
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-primary px-12 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          prefetch={false}
        >
          Live
        </Link>
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-primary px-12 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          prefetch={false}
        >
          Code
        </Link>
      </CardFooter>
    </Card>
  );
};
