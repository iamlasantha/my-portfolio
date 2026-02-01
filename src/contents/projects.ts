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
  {
    type: 'github',
    owner: 'iamlasantha',
    repo: 'my-portfolio',
    customImage: '/projects/portfolio-website.jpg',
  }
];