import { Component, signal } from '@angular/core';

import { Iknowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<Iknowledge[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'icone de conhecimento HTML',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'icone de conhecimento CSS3',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'icone de conhecimento HTML',
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'icone de conhecimento Java',
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: 'icone de conhecimento react',
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'icone de conhecimento SASS',
    },
  ]);
}
