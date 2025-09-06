import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';

  navItems = [
    { id: 'home', label: 'Home', icon: 'fa-house' },
    { id: 'about', label: 'About', icon: 'fa-user' },
    { id: 'skills', label: 'Skills', icon: 'fa-code' },
    { id: 'experience', label: 'Experience', icon: 'fa-briefcase' },
    { id: 'projects', label: 'Projects', icon: 'fa-laptop-code' },
    { id: 'contact', label: 'Contact', icon: 'fa-envelope' },
  ];

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   this.isScrolled = window.pageYOffset > 50;
  //   this.updateActiveSection();
  // }

  updateActiveSection() {
    const sections = this.navItems.map((item) => ({
      id: item.id,
      offset: Math.abs(
        document.getElementById(item.id)?.getBoundingClientRect().top ??
          Infinity
      ),
    }));

    const activeSection = sections.reduce((prev, curr) =>
      prev.offset < curr.offset ? prev : curr
    );

    this.activeSection = activeSection.id;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = sectionId;
    }
    this.isMobileMenuOpen = false;
  }
  trackByFn(index: number, item: any): any {
    return item.id;
  }

  // Add scrollProgress property
  scrollProgress: number = 0;

  // Add scroll listener to update progress
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.pageYOffset > 50;
    this.updateActiveSection();
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    this.scrollProgress = (scrollTop / docHeight) * 100;
  }
}
