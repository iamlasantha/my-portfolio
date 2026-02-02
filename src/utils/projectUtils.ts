import { allProjects } from '@/contents/projects';

// Define the interface for the project data displayed on the frontend
export interface DisplayProject {
    title: string;
    description: string;
    image?: string;
    link: string; // Code link
    demoLink?: string;
    tags: string[];
    stats?: {
        stars?: number;
        forks?: number;
    };
    isManual: boolean;
}

// Define the interface for the project data displayed on the frontend
export interface DisplayProject {
    title: string;
    description: string;
    image?: string;
    link: string; // Code link
    demoLink?: string;
    tags: string[];
    stats?: {
        stars?: number;
        forks?: number;
    };
    isManual: boolean;
}

export async function fetchProjects(): Promise<DisplayProject[]> {
    try {
        // Fetch all public repos for the user
        const res = await fetch('https://api.github.com/users/iamlasantha/repos?sort=updated&per_page=100', {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!res.ok) {
            console.warn('Failed to fetch repositories');
            return [];
        }

        const data = await res.json();
        const hiddenRepos = ["devops_course_first_repo", "iamlasantha"];
        const customImages: { [key: string]: string } = {
            "my portfolio": "/opengraph-image.png",
            "portfolio": "/opengraph-image.png",
            "portfolio-project-2": "/opengraph-image.png",
            "devfolio-nextjs-portfolio-website-main": "/opengraph-image.png"
        };

        // Filter out forks and hidden repos
        const projects: DisplayProject[] = data
            .filter((repo: any) => !repo.fork && !hiddenRepos.includes(repo.name.toLowerCase()))
            .map((repo: any) => {
                const title = repo.name.replace(/-/g, ' ');
                return {
                    title: title,
                    description: repo.description || "No description provided.",
                    image: customImages[repo.name.toLowerCase()] || customImages[title.toLowerCase()] || undefined,
                    link: repo.html_url,
                    demoLink: repo.homepage,
                    tags: [repo.language].filter(Boolean),
                    stats: {
                        stars: repo.stargazers_count,
                        forks: repo.forks_count,
                    },
                    isManual: false,
                };
            });

        return projects;
    } catch (error) {
        console.error("Error fetching projects", error);
        return [];
    }
}
