
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Educational Assessment Platform',
      description: 'Comprehensive exam management system with advanced modal components, automated grading, and multilingual support.',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Python', 'Bootstrap'],
      image: 'assets/project1.jpg',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Python Code Validation System',
      description: 'AST-based code validation platform for educational platforms with template checking and error detection.',
      technologies: ['Python', 'Angular', 'TypeScript', 'AST Parser'],
      image: 'assets/project2.jpg',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Interactive Audio Player Component',
      description: 'Responsive Angular audio player with session storage, unknown duration handling, and modern UI controls.',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Web Audio API'],
      image: 'assets/project3.jpg',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Drag & Drop Question Builder',
      description: 'Angular CDK-based drag and drop system for question reordering with page-based navigation.',
      technologies: ['Angular CDK', 'TypeScript', 'RxJS', 'Tailwind CSS'],
      image: 'assets/project4.jpg',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  get featuredProjects() {
    return this.projects.filter(project => project.featured);
  }

  get otherProjects() {
    return this.projects.filter(project => !project.featured);
  }
}
