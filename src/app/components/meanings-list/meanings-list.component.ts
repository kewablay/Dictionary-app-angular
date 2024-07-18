import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-meanings-list',
  standalone: true,
  imports: [],
  templateUrl: './meanings-list.component.html',
  styleUrl: './meanings-list.component.sass'
})
export class MeaningsListComponent {
  @Input() meanings: any = [];
}
