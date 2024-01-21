import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Robson Gomers';
  public age = 33;
  public condition = this.age < 18 ? "Menor de idade" : "Maior de idade";

  public isDisabled = false;
  public srcValue = 'https://sm.ign.com/t/ign_br/screenshot/default/os-cavaleiros-do-zodiaco-na-tv_ejjr.1280.jpg';

  public sum(number1: number, number2: number) {
    return number1 + number2;
  }
}
