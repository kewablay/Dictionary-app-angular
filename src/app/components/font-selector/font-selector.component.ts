import { Component } from '@angular/core';

@Component({
  selector: 'app-font-selector',
  standalone: true,
  imports: [],
  templateUrl: './font-selector.component.html',
  styleUrl: './font-selector.component.sass'
})
export class FontSelectorComponent {
  dropdownActive = false

  toggleDropdown() {
    this.dropdownActive = !this.dropdownActive
  }
  

}
