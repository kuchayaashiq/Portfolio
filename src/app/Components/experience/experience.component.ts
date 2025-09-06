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
      position: 'Senior Angular Developer',
      company: 'EduTech Solutions',
      location: 'Remote',
      duration: 'Jan 2023 - Present',
      type: 'full-time',
      description: [
        'Lead development of comprehensive educational assessment platforms using Angular and TypeScript',
        'Architected and implemented advanced modal components for exam management systems',
        'Developed multilingual web interfaces with RTL/LTR language support',
        'Created automated grading functionality and student assessment tools',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Tailwind CSS',
        'Bootstrap',
        'Python',
      ],
      achievements: [
        'Improved application performance by 40% through optimization',
        'Led team of 5 developers on major platform overhaul',
        'Implemented responsive design reducing mobile issues by 60%',
      ],
      current: true,
    },
    {
      position: 'Full Stack Developer',
      company: 'Learning Management Corp',
      location: 'New York, NY',
      duration: 'Mar 2021 - Dec 2022',
      type: 'full-time',
      description: [
        'Developed Python code validation systems using AST parsing for educational platforms',
        'Built interactive Angular components with drag-and-drop functionality using Angular CDK',
        'Created responsive audio player components with session storage integration',
        'Implemented question reordering systems with page-based navigation',
      ],
      technologies: [
        'Angular',
        'Python',
        'Node.js',
        'MongoDB',
        'Angular CDK',
        'JavaScript',
      ],
      achievements: [
        'Reduced code validation processing time by 50%',
        'Developed reusable component library used across 3 major projects',
        'Mentored 3 junior developers',
      ],
      current: false,
    },
    {
      position: 'Frontend Developer',
      company: 'Digital Academy',
      location: 'San Francisco, CA',
      duration: 'Jul 2019 - Feb 2021',
      type: 'full-time',
      description: [
        'Specialized in Angular application development for educational technology platforms',
        'Converted legacy Bootstrap components to modern Tailwind CSS implementations',
        'Implemented responsive UI designs with CSS Grid and Flexbox',
        'Developed progress tracking visualizations and student dashboard interfaces',
      ],
      technologies: [
        'Angular',
        'JavaScript',
        'CSS3',
        'HTML5',
        'Bootstrap',
        'SCSS',
      ],
      achievements: [
        'Successfully migrated 15+ legacy components to modern frameworks',
        'Achieved 95% cross-browser compatibility',
        'Reduced CSS bundle size by 30% through optimization',
      ],
      current: false,
    },
    {
      position: 'Junior Web Developer',
      company: 'StartupTech Inc',
      location: 'Austin, TX',
      duration: 'Aug 2018 - Jun 2019',
      type: 'full-time',
      description: [
        'Developed responsive web applications using modern JavaScript frameworks',
        'Collaborated with UX/UI designers to implement pixel-perfect designs',
        'Participated in code reviews and maintained high code quality standards',
        'Assisted in database design and API development',
      ],
      technologies: [
        'JavaScript',
        'HTML5',
        'CSS3',
        'jQuery',
        'Bootstrap',
        'PHP',
      ],
      achievements: [
        'Completed 20+ projects with 100% on-time delivery',
        'Improved team productivity through documentation improvements',
        'Reduced bug reports by 25% through rigorous testing',
      ],
      current: false,
    },
  ];
}
