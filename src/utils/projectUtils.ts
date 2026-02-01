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

export async function fetchProjects(): Promise<DisplayProject[]> {
    const promises = allProjects.map(async (item) => {
        if (item.type === 'manual') {
            return {
                title: item.title,
                description: item.description,
                image: item.image,
                link: item.link,
                demoLink: item.demoLink,
                tags: item.technologies,
                isManual: true,
            } as DisplayProject;
        } else {
            // Fetch GitHub Data
            try {
                const res = await fetch(`https://api.github.com/repos/${item.owner}/${item.repo}`, {
                    next: { revalidate: 3600 }, // Cache for 1 hour
                });

                if (!res.ok) {
                    console.warn(`Failed to fetch repo: ${item.repo}`);
                    return null;
                }

                const data = await res.json();
                return {
                    title: data.name.replace(/-/g, ' '),
                    description: data.description || "No description provided.",
                    image: item.customImage,
                    link: data.html_url,
                    demoLink: data.homepage,
                    tags: [data.language].filter(Boolean), // GitHub primary lang
                    stats: {
                        stars: data.stargazers_count,
                        forks: data.forks_count,
                    },
                    isManual: false,
                } as DisplayProject;
            } catch (error) {
                console.error(`Error loading ${item.repo}`, error);
                return null;
            }
        }
    });

    const results = await Promise.all(promises);
    return results.filter((p): p is DisplayProject => p !== null);
}
