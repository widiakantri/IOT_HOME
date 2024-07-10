import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lamp',
  templateUrl: './lamp.component.html',
  styleUrls: ['./lamp.component.scss']
})
export class LampComponent {
  @Input() color: string = 'off';
}
