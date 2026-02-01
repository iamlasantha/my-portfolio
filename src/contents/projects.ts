export type ProjectItem =
  | {
    type: 'github';
    owner: 'iamlasantha'; // Type hint for the owner
    repo: string;
    customImage?: string;
  }
  | {
    type: 'manual';
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string; // Code link
    demoLink?: string;
  };

export const allProjects: ProjectItem[] = [
  // Manual Projects (Guaranteed to display)
  {
    type: 'manual',
    title: 'Next.js Portfolio',
    description: 'My personal portfolio website built with Next.js, Tailwind CSS, and TypeScript. Features a dynamic blog, project showcase, and newsletter.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/iamlasantha/nextjs-portfolio',
    demoLink: 'https://github.com/iamlasantha/nextjs-portfolio',
  },
  {
    type: 'manual',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform incorporating user authentication, product management, and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
    technologies: ['React', 'Next.js', 'Stripe'],
    link: 'https://github.com/iamlasantha/ecommerce-platform',
    demoLink: 'https://github.com/iamlasantha/ecommerce-platform',
  },
];