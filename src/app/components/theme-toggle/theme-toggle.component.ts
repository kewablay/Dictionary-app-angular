import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.sass',
})
export class ThemeToggleComponent {
  toggleActive:boolean = this.themeService.getCurrentTheme() === 'dark'

  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    this.toggleActive = !this.toggleActive;
    this.themeService.toggleTheme();
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.themeService.getCurrentTheme();
  }
}
