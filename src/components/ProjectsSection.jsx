import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Wisdome",
    description:
      "A platform for students to learn and grow their skills with interactive courses and quizzes.",
    image: "/projects/wisdome.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 2,
    title: "Thumbtack",
    description:
      "A web application for finding and hiring local professionals for various services.",
    image: "/projects/thumbtack.png",
    tags: ["HTML", "TailwindCSS", "JavaScript"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "My personal portfolio showcasing my skills, projects, and experience.",
    image: "/projects/portfolio.png",
    tags: ["React", "TailwindCSS","HTML"],
    demoURL: "#",
    githubURL: "https://github.com/JunaidAshraf07/my-portfolio",
  },
];
export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {""}
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my notable projects that showcase my skills and
          expertise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project,key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag)=>(
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                            ))}
                        </div>
                    
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                            <a href={project.demoURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <ExternalLink size={20}/>
                            </a>
                            <a href={project.githubURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <Github size={20}/>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
              ))}
        </div>
        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/junaidashraf07">Check my Github
                <ArrowRight size={16}/>
            </a>
        </div>
      </div>
    </section>
  );
};
