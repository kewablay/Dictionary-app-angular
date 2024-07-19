import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FontSelectionService {
  private currentFont: 'Serif' | 'Sans Serif' | 'Mono' = 'Sans Serif';
  constructor() {
    const savedFont = localStorage.getItem('font');
    this.currentFont = savedFont
      ? (savedFont as 'Serif' | 'Sans Serif' | 'Mono')
      : 'Sans Serif';
    this.applyFont(this.currentFont);
  }

  private applyFont(font: 'Serif' | 'Sans Serif' | 'Mono'): void {
    document.documentElement.setAttribute('data-fontFamily', font);
  }

  setFont(font: 'Serif' | 'Sans Serif' | 'Mono'): void {
    this.currentFont = font;
    this.applyFont(font);
    localStorage.setItem('font', font);
  }

  getCurrentFont(): 'Serif' | 'Sans Serif' | 'Mono' {
    return this.currentFont;
  }
}
