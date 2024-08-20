import { Component } from '@angular/core';
import { NgFor,NgIf,NgClass } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf, NgClass,],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  selectedItem: any;

  ngOnInit(): void {
    this.selectedItem  = this.experienceItems[0];
   }

  experienceItems = [
    {
      title: 'Software Engineer Intern at Copart',
      date: 'Hyderabad, India | Jan 2024 – Present',
      link: 'https://www.copart.com/',
      details:[
            'Created and customized 15+ dynamic Angular components and downgraded them to utilize in AngularJS pages',
            'Part of defect pod which was responsible for doing critical bug fixes and deliver in short time resulting in 40% reduction in escalation tickets',
            'Executed secure license uploads & robust search feature, leveraging Angular, TypeScript, RESTful APIs & Spring Boot',
            'Rendered multiple pages in UI, loading the scripts from Drupal through the content management system (CMS)',
            'Generated BDD automation scripts for UI and performed E2E tests which reduced defects by 60%',
            'Revamped Lot Details pages for legacy application, enhancing UI & functionalities thereby improving customer satisfaction',
            'Broadcasted events to Google Analytics (GTM), leading to a 35% increase in actionable insights, enabling the marketing team to refine campaign targeting strategies, driving a 20% increase in product sales.'],
      delay: 200
    },
    {
      title: 'Software Engineer at Oracle Cerner',
      date: 'Bengaluru, India | May 2020 – Jan 2023',
      link:'https://go.oracle.com/LP=142384?src1=:ad:pas:go:dg:a_nas:l5:RC_GOOG240501P00011C00354:MainAd&gad_source=1&gclid=Cj0KCQjwzva1BhD3ARIsADQuPnWMiAg3NgZ6ys7_TyPjesEmSYfNxSebchOBN1qEClV4WwueXRwKaaEaAikWEALw_wcB',
      details: [
            'Worked on spike, stories, and defects for the Revenue Cycle product, assessing the interaction between multiple systems and API/design changes required to implement new features',
            'Addressed HP-Fortify and SonarQube vulnerability issues, enhancing code quality by 30% and reducing security risks',
            'Worked on Jira integration, where the data in Excel is parsed and corresponding Jira tickets are updated, resulting in a 75% increase in communication, collaboration, and adoption across cross-functional teams',
            'Migrated APIs from synchronous to asynchronous using Spring Reactive Programming, optimizing system performance by 50% and deployed them using Jenkins pipeline for continuous integration and delivery',
            'Performed unit testing using JUnit, Mockito with 80%+ coverage and participated in internal and external code reviews',
            'Delivered APIs for fetching EHR data to Cerner Millennium, resulting in a 30% increase in order processing efficiency'
      ],
      delay: 300
    },
    {
      title: 'Software Engineer Intern <br>at Collins Aerospace',
      date: 'Hyderabad, India | December 2019 – May 2020',
      link:'https://www.collinsaerospace.com/',
      details: [
            'Developed Object-Oriented Fullstack Applications and REST APIs using Java8 functional programming, adhering to SOLID principles and implementing design patterns',
            'Built an automation tool named Bidirectional Trace Validation, which crawls the JAMA & SVN websites to capture the requirement numbers, significantly reduced the team’s manual effort by 30 hours during release activity',
            'Day to Day Work: Worked with Flight Management System and Flight User Interface teams, mostly improving the consistency and efficiency of the enterprise application and involved in Continuous Build and Test (CBT)'
      ],
      delay: 400
    }
  ];


  toggleItem(item: any) {
      this.selectedItem = item;
  }

}
