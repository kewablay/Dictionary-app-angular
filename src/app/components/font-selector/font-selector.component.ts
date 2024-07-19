import { Component } from '@angular/core';
import { FontSelectionService } from '../../services/font-selection.service';

@Component({
  selector: 'app-font-selector',
  standalone: true,
  imports: [],
  templateUrl: './font-selector.component.html',
  styleUrl: './font-selector.component.sass'
})
export class FontSelectorComponent {
  dropdownActive = false
  currentFont = this.fontService.getCurrentFont()

  fontsList: ['Serif', 'Sans Serif', 'Mono'] = ['Serif', 'Sans Serif', 'Mono']

  constructor(private fontService: FontSelectionService) {}

  toggleDropdown() {
    this.dropdownActive = !this.dropdownActive
  }
  
  handleFontClick(font: 'Serif' | 'Sans Serif' | 'Mono') {
    this.currentFont = font
    this.fontService.setFont(font)
    this.dropdownActive = false
  }

}
