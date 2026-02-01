import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaNodeJs, FaDocker, FaAws, FaJenkins, FaLinux, FaGitAlt } from "react-icons/fa";
import { SiMysql, SiKubernetes, SiTerraform } from "react-icons/si";

export const skills = {
    frontend: [
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "JavaScript (Basic)", icon: FaJs },
    ],
    backend: [
        { name: "Python (Scripting)", icon: FaPython },
        { name: "Node.js", icon: FaNodeJs },
        { name: "MySQL", icon: SiMysql },
        { name: "REST APIs", icon: null }, // No specific icon requested or standard generic one
    ],
    tools: [
        { name: "Linux (Bash)", icon: FaLinux },
        { name: "Docker", icon: FaDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "Git", icon: FaGitAlt },
        { name: "Jenkins", icon: FaJenkins },
        { name: "AWS", icon: FaAws },
        { name: "Terraform", icon: SiTerraform },
    ],
};
