import { Component } from '@angular/core';

interface Experience {
  position: string;
  company: string;
  location: string;
  duration: string;
  type: 'full-time' | 'contract' | 'freelance';
  description: string[];
  technologies: string[];
  achievements: string[];
  current: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      position: 'Full Stack Developer',
      company: 'Assrooh Athakiyah',
      location: 'Riyadh, KSA',
      duration: 'Dec 2023 – Present',
      type: 'full-time',
      description: [
        'Developing full-stack web applications using .NET Core, Angular, and PostgreSQL.',
        'Built a multilingual, responsive Course Selling application with seamless user experience across devices.',
        'Implemented backend APIs, database design, authentication, and Angular UI features for end-to-end functionality.',
        'Created a Self-Learning web platform with Angular and Tailwind CSS, focusing on multilingual UI and clean front-end architecture.',
        'Collaborated with cross-functional teams to deliver scalable features and optimize application performance.',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        '.NET Core',
        'PostgreSQL',
        'Tailwind CSS',
        'RESTful APIs',
        'C#',
      ],
      achievements: [
        'Delivered a fully multilingual course-selling platform supporting multiple languages and device sizes.',
        'Architected end-to-end features including payment workflow, user roles, and course management dashboard.',
        'Developed a modular self-learning platform with reusable Angular components for scalable content delivery.',
      ],
      current: true,
    },
    {
      position: 'Software Developer',
      company: 'Islamic University of Science & Technology (IUST)',
      location: 'Awantipora, J&K',
      duration: 'Jun 2023 – Dec 2023',
      type: 'full-time',
      description: [
        'Developed a complete Identity Card Management System for staff and students using ASP.NET MVC and SQL Server.',
        'Built secure modules for generating, approving, and issuing ID cards digitally.',
        'Designed SQL Server database schema to store student/staff details, card issue history, and approval workflow.',
        'Automated ID card generation process, reducing manual work and processing time.',
      ],
      technologies: [
        'ASP.NET MVC',
        'C#',
        'SQL Server',
        'Entity Framework',
        'Bootstrap',
        'JavaScript',
      ],
      achievements: [
        'Automated the entire ID card issuance process, significantly reducing manual workload.',
        'Implemented PDF generation for ID cards with integrated approval workflows.',
        'Eliminated manual errors by centralizing data entry and retrieval in a structured SQL Server backend.',
      ],
      current: false,
    },
  ];
}
