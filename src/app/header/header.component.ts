// import { Component, AfterViewInit } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [],
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements AfterViewInit {
//   ngAfterViewInit(): void {
//     const navLinks = document.querySelectorAll<HTMLAnchorElement>('nav .nav-menu a');

//     navLinks.forEach((link: HTMLAnchorElement) => {
//       link.addEventListener('click', (event: MouseEvent) => {
//         event.preventDefault(); // Prevent default anchor behavior
        
//         // Remove 'active' class from all links' parent elements
//         navLinks.forEach((lnk: HTMLAnchorElement) => {
//           const parentElement = lnk.parentElement;
//           if (parentElement) {
//             parentElement.classList.remove('active');
//           }
//         });

//         // Add 'active' class to the clicked link's parent element
//         const parentElement = link.parentElement;
//         if (parentElement) {
//           parentElement.classList.add('active');
//         }

//         // Smoothly scroll to the target section
//         const targetId = link.getAttribute('href')?.substring(1); // Get the target ID from href
//         const targetElement = document.getElementById(targetId ?? '');
//         if (targetElement) {
//           targetElement.scrollIntoView({ behavior: 'smooth' });
//         }
//       });
//     });
//   }
// }

import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private sections: HTMLElement[] = [];
  private navLinks: HTMLAnchorElement[] = [];

  ngAfterViewInit(): void {
    this.sections = Array.from(document.querySelectorAll('section[id]'));
    this.navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('nav .nav-menu a'));

    this.setupIntersectionObserver();
    this.setupNavLinkClickListeners();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7, // Adjust this value to change when the section is considered "active"
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.setActiveNavLink(entry.target.id);
        }
      });
    }, options);

    this.sections.forEach((section) => {
      this.observer?.observe(section);
    });
  }

  private setupNavLinkClickListeners(): void {
    this.navLinks.forEach((link: HTMLAnchorElement) => {
      link.addEventListener('click', (event: MouseEvent) => {
        event.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId ?? '');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  private setActiveNavLink(sectionId: string): void {
    this.navLinks.forEach((link: HTMLAnchorElement) => {
      const parentElement = link.parentElement;
      if (parentElement) {
        if (link.getAttribute('href') === `#${sectionId}`) {
          parentElement.classList.add('active');
        } else {
          parentElement.classList.remove('active');
        }
      }
    });
  }
}
