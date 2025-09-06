import { Component, Input } from '@angular/core';

interface ExperienceItem {
  position: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  description: string[];
  technologies: string[];
  achievements: string[];
  current: boolean;
}

@Component({
  selector: 'app-experience-card',
  standalone: false,
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css'],
})
export class ExperienceCardComponent {
  @Input() experience!: ExperienceItem;
  @Input() index: number = 0;

  getTypeColor(type: string): string {
    const colors = {
      'full-time': 'text-blue-400 border-blue-400/50',
      'part-time': 'text-green-400 border-green-400/50',
      contract: 'text-yellow-400 border-yellow-400/50',
      freelance: 'text-purple-400 border-purple-400/50',
      internship: 'text-pink-400 border-pink-400/50',
    };
    return (
      colors[type as keyof typeof colors] || 'text-gray-400 border-gray-400/50'
    );
  }
}
