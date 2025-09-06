
import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular', level: 95, category: 'Frontend', icon: '🅰️' },
    { name: 'TypeScript', level: 90, category: 'Frontend', icon: '🔷' },
    { name: 'JavaScript', level: 88, category: 'Frontend', icon: '🟨' },
    { name: 'HTML/CSS', level: 92, category: 'Frontend', icon: '🎨' },
    { name: 'Tailwind CSS', level: 85, category: 'Frontend', icon: '💨' },
    { name: 'Bootstrap', level: 80, category: 'Frontend', icon: '🎯' },
    { name: 'Python', level: 85, category: 'Backend', icon: '🐍' },
    { name: 'Node.js', level: 75, category: 'Backend', icon: '🟢' },
    { name: 'MongoDB', level: 70, category: 'Database', icon: '🍃' },
    { name: 'PostgreSQL', level: 72, category: 'Database', icon: '🐘' },
    { name: 'Git', level: 88, category: 'Tools', icon: '📚' },
    { name: 'Docker', level: 65, category: 'Tools', icon: '🐳' }
  ];

  categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];
  selectedCategory = 'All';

  get filteredSkills() {
    if (this.selectedCategory === 'All') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
