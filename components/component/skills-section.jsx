import { Badge } from "@/components/ui/badge"


const SkillsSection = () => {
  return (
    <section id="skills" className="bg-muted py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 flex flex-col items-center gap-8">
        <div className="max-w-[700px] text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="text-muted-foreground md:text-xl">
            I have a diverse set of skills that I have acquired through my
            education and experience. Here are some of the key technologies I am
            proficient in.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <Badge variant="secondary">Python</Badge>
          <Badge variant="secondary">Java</Badge>
          <Badge variant="secondary">JavaScript</Badge>
          <Badge variant="secondary">Django</Badge>
          <Badge variant="secondary">Spring Boot</Badge>
          <Badge variant="secondary">Node.js</Badge>
          <Badge variant="secondary">MySQL</Badge>
          <Badge variant="secondary">PostgreSQL</Badge>
          <Badge variant="secondary">MongoDB</Badge>
          <Badge variant="secondary">Redis</Badge>
          <Badge variant="secondary">AWS</Badge>
          <Badge variant="secondary">Google Cloud</Badge>
          <Badge variant="secondary">Azure</Badge>
          <Badge variant="secondary">Docker</Badge>
          <Badge variant="secondary">Kubernetes</Badge>
          <Badge variant="secondary">Git</Badge>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
