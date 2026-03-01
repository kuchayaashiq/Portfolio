import { Component } from '@angular/core';

interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  percentage: string;
  description: string;
  highlights: string[];
  icon: string;
}

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  educations: Education[] = [
    {
      degree: 'Master of Computer Science and Application',
      field: 'MCA',
      institution: 'University of Kashmir',
      location: 'Jammu & Kashmir, India',
      duration: '2019 – 2022',
      percentage: '79%',
      description:
        'Completed a postgraduate program in Computer Science and Applications with a strong focus on software engineering, database systems, and modern application development.',
      highlights: [
        'Graduated with 79% aggregate',
        'Gained deep expertise in software architecture and full-stack development',
        'Built foundational knowledge in algorithms, data structures, and system design',
      ],
      icon: '🎓',
    },
    {
      degree: 'Bachelor of Computer Application',
      field: 'BCA',
      institution: 'University of Kashmir',
      location: 'Jammu & Kashmir, India',
      duration: '2015 – 2018',
      percentage: '78%',
      description:
        'Completed an undergraduate program in Computer Applications, building core competencies in programming, web technologies, and database management.',
      highlights: [
        'Graduated with 78% aggregate',
        'Developed strong programming foundations in Java and web technologies',
        'Coursework covered databases, operating systems, and software development',
      ],
      icon: '📚',
    },
  ];
}
