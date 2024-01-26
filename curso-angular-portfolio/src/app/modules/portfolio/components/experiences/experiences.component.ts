import { Component, signal } from '@angular/core';

import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Fullstack Developer',
        p: 'Empresa | Set 2020 - Present',
      },
      text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam</p> <p>ex nulla recusandae quam eos esse non ad omnis ab explicabo porro ut eaque r</p>',
    },
    {
      summary: {
        strong: 'Fullstack Developer',
        p: 'Empresa | Set 2020 - Present',
      },
      text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam</p> <p>ex nulla recusandae quam eos esse non ad omnis ab explicabo porro ut eaque r</p>',
    },
    {
      summary: {
        strong: 'Fullstack Developer',
        p: 'Empresa | Set 2020 - Present',
      },
      text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam</p> <p>ex nulla recusandae quam eos esse non ad omnis ab explicabo porro ut eaque r</p>',
    },
    {
      summary: {
        strong: 'Fullstack Developer',
        p: 'Empresa | Set 2020 - Present',
      },
      text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam</p> <p>ex nulla recusandae quam eos esse non ad omnis ab explicabo porro ut eaque r</p>',
    },
    {
      summary: {
        strong: 'Fullstack Developer',
        p: 'Empresa | Set 2020 - Present',
      },
      text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam</p> <p>ex nulla recusandae quam eos esse non ad omnis ab explicabo porro ut eaque r</p>',
    },
  ]);
}