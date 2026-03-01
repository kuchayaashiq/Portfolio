import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  company?: string;
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Self-Learning Platform',
      description:
        'A multilingual self-learning web platform built with Angular and Tailwind CSS. Developed modular, reusable UI components for course browsing and learning content, integrated with backend APIs for user and course data management.',
      technologies: [
        'Angular',
        'Tailwind CSS',
        '.NET Core',
        'PostgreSQL',
        'TypeScript',
      ],
      image: 'assets/projects/self-learning.jpg',
      demoUrl: '#',
      githubUrl: 'https://github.com/kuchayaashiq',
      featured: true,
      company: 'Assrooh Athakiyah',
    },
    {
      title: 'Course Selling Application',
      description:
        'A full-stack multilingual platform for selling online courses. Implemented responsive Angular UI with multi-language and multi-device support, .NET Core backend APIs, PostgreSQL query optimization, payment workflow, user roles, and a course management dashboard.',
      technologies: [
        '.NET Core',
        'Angular',
        'PostgreSQL',
        'TypeScript',
        'Tailwind CSS',
      ],
      image: 'assets/projects/course-selling.jpg',
      demoUrl: '#',
      githubUrl: 'https://github.com/kuchayaashiq',
      featured: true,
      company: 'Assrooh Athakiyah',
    },
    {
      title: 'Identity Card Management System',
      description:
        'A web-based system to manage issuance of identity cards for all students and staff at IUST. Includes modules for data entry, approval workflow, ID card design, and automated PDF generation with SQL Server backend.',
      technologies: [
        'ASP.NET MVC',
        'C#',
        'SQL Server',
        'Entity Framework',
        'Bootstrap',
      ],
      image: 'assets/projects/id-card.jpg',
      demoUrl: '#',
      githubUrl: 'https://github.com/kuchayaashiq',
      featured: false,
      company: 'IUST',
    },
    {
      title: 'Talent Finder Platform',
      description:
        'A web application to help companies discover skilled professionals across domains. Features job listings, candidate profiles, search filters, user onboarding, profile management, and talent recommendations.',
      technologies: [
        '.NET Core',
        'Angular',
        'PostgreSQL',
        'TypeScript',
        'Tailwind CSS',
      ],
      image: 'assets/projects/talent-finder.jpg',
      demoUrl: '#',
      githubUrl: 'https://github.com/kuchayaashiq',
      featured: false,
      company: 'Freelance',
    },
  ];

  get featuredProjects() {
    return this.projects.filter((project) => project.featured);
  }

  get otherProjects() {
    return this.projects.filter((project) => !project.featured);
  }
}
