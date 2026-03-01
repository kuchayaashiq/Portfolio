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
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: Skill[] = [
    // Frontend
    { name: 'Angular', level: 90, category: 'Frontend', icon: '🅰️' },
    { name: 'TypeScript', level: 88, category: 'Frontend', icon: '🔷' },
    { name: 'JavaScript', level: 85, category: 'Frontend', icon: '🟨' },
    { name: 'HTML5 / CSS3', level: 90, category: 'Frontend', icon: '🎨' },
    { name: 'Tailwind CSS', level: 88, category: 'Frontend', icon: '💨' },
    { name: 'Bootstrap', level: 82, category: 'Frontend', icon: '🎯' },

    // Backend
    { name: 'ASP.NET Core', level: 85, category: 'Backend', icon: '⚙️' },
    { name: 'ASP.NET MVC', level: 80, category: 'Backend', icon: '🔩' },
    { name: 'C#', level: 85, category: 'Backend', icon: '💜' },
    { name: 'Java', level: 70, category: 'Backend', icon: '☕' },
    { name: 'RESTful APIs', level: 88, category: 'Backend', icon: '🔗' },
    {
      name: 'Entity Framework Core',
      level: 80,
      category: 'Backend',
      icon: '🗃️',
    },
    { name: 'Spring Boot', level: 65, category: 'Backend', icon: '🍃' },

    // Database
    { name: 'PostgreSQL', level: 82, category: 'Database', icon: '🐘' },
    { name: 'MS SQL Server', level: 80, category: 'Database', icon: '🗄️' },
    { name: 'MySQL', level: 75, category: 'Database', icon: '🐬' },

    // Tools
    { name: 'Visual Studio', level: 88, category: 'Tools', icon: '🛠️' },
    { name: 'VS Code', level: 90, category: 'Tools', icon: '💻' },
    { name: 'Postman', level: 85, category: 'Tools', icon: '📮' },
    { name: 'Git', level: 82, category: 'Tools', icon: '📚' },
    { name: 'IntelliJ IDEA', level: 70, category: 'Tools', icon: '🧠' },
    { name: 'SSMS', level: 78, category: 'Tools', icon: '📊' },
  ];

  categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];
  selectedCategory = 'All';

  get filteredSkills() {
    if (this.selectedCategory === 'All') {
      return this.skills;
    }
    return this.skills.filter(
      (skill) => skill.category === this.selectedCategory,
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
