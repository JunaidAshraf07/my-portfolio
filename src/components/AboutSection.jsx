import { BrainCircuit, Code, TestTube2 } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {""}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Passionate Developer</h3>
            <p className="text-muted-foreground">
              I am a passionate developer with a love for creating beautiful and
              functional web applications. My journey in tech started with a
              curiosity for how things work, and it has evolved into a
              full-fledged career.
            </p>
            <p className="text-muted-foreground">
              I enjoy working with the latest technologies and continuously
              strive to improve my skills. My goal is to build applications that
              not only meet user needs but also provide a delightful experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a
                href="/my-cv.pdf"
                download={true}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    I create responsive and user-friendly websites.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <TestTube2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Automated Testing</h4>
                  <p className="text-muted-foreground">
                    Ensuring reliability with end-to-end testing (Cypress).
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    AI & Machine Learning
                  </h4>
                  <p className="text-muted-foreground">
                    Passionate about ML, deep learning, and future AI solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
