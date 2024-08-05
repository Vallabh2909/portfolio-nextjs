import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-primary to-primary-foreground py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6 flex flex-col items-center gap-8">
        <div className="max-w-[700px] text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Feel free to reach out to me if you have any questions or would like
            to discuss a potential project.
          </p>
        </div>

        <form
          className="w-full max-w-md space-y-4"
          action="https://formspree.io/f/xnnadknz"
          method="POST"
        >
          <Input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full"
          />
          <Textarea
            placeholder="Message"
            name="message"
            rows={4}
            className="w-full"
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
