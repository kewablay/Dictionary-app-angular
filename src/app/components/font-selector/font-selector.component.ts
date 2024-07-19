import { Component } from '@angular/core';
import { FontSelectionService } from '../../services/font-selection.service';

@Component({
  selector: 'app-font-selector',
  standalone: true,
  imports: [],
  templateUrl: './font-selector.component.html',
  styleUrl: './font-selector.component.sass',
})
export class FontSelectorComponent {
  dropdownActive = false;
  currentFont = this.fontService.getCurrentFont();

  fontsList: ['Sans Serif', 'Serif', 'Mono'] = ['Sans Serif', 'Serif', 'Mono'];

  constructor(private fontService: FontSelectionService) {}

  toggleDropdown() {
    this.dropdownActive = !this.dropdownActive;
  }

  handleFontClick(font: 'Sans Serif' | 'Serif' | 'Mono') {
    this.currentFont = font;
    this.fontService.setFont(font);
    this.dropdownActive = false;
  }
}
