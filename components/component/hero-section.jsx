"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const textContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.012,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const HeroSection = () => {
  const title = "Hello, I'm Vallabh Wasule";
  const description =
    "I'm an aspiring backend engineer with a focus on DevOps and cloud solutions. I'm passionate about building scalable and reliable applications.";

  return (
    <section className="bg-gradient-to-b from-primary to-primary-foreground py-20 text-primary-foreground">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {title.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="text-lg"
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {description.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
            <Button className="w-full sm:w-auto mr-1">Explore Projects</Button>
            <Button className="w-full sm:w-auto">View Resume</Button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/hero.jpg"
              width={400}
              height={400}
              alt="Vallabh Wasule"
              className="rounded-full"
              style={{ aspectRatio: "400/400", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
