import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  roles: string[] = [
    'Full Stack Developer',
    '.NET Core & Angular Expert',
    'Software Engineer',
    'Multilingual App Builder',
  ];
  currentRoleIndex = 0;
  currentRole = '';
  isTyping = true;

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    const role = this.roles[this.currentRoleIndex];
    let charIndex = 0;

    const typing = setInterval(() => {
      if (charIndex < role.length) {
        this.currentRole += role.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          this.eraseText();
        }, 2000);
      }
    }, 100);
  }

  eraseText() {
    const erasing = setInterval(() => {
      if (this.currentRole.length > 0) {
        this.currentRole = this.currentRole.slice(0, -1);
      } else {
        clearInterval(erasing);
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        setTimeout(() => {
          this.typeWriter();
        }, 500);
      }
    }, 50);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
