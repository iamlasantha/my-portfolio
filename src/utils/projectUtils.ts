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

        // Filter out forks if desired, or keep them. For now, we map everything.
        // We can also filter out specific repos by name if needed.
        const projects: DisplayProject[] = data
            .filter((repo: any) => !repo.fork) // Optional: hide forks? Let's keep it simple first, maybe hide forks if they want mostly personal work.
            .map((repo: any) => ({
                title: repo.name.replace(/-/g, ' '),
                description: repo.description || "No description provided.",
                image: undefined, // Let the UI component handle the default image
                link: repo.html_url,
                demoLink: repo.homepage,
                tags: [repo.language].filter(Boolean),
                stats: {
                    stars: repo.stargazers_count,
                    forks: repo.forks_count,
                },
                isManual: false,
            }));

        return projects;
    } catch (error) {
        console.error("Error fetching projects", error);
        return [];
    }
}
