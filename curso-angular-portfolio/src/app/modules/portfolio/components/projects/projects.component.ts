import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'https://raw.githubusercontent.com/Robson-GDS/DTmoney/main/src/assets/forReadme/tela2.png',
      alt: 'Projeto DT money',
      title: 'DT money',
      width: '100px',
      height: '51px',
      description: '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum nihil ipsa, ea voluptates cupiditate earum</p>',
      links: [
        {
          name: 'Conheca o projeto',
          href: 'https://github.com/Robson-GDS/DTmoney',
        },
      ],
    },
  ]);
}
