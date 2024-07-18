import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.sass',
})
export class ThemeToggleComponent {
  toggleActive = false;

  toggleTheme() {
    this.toggleActive = !this.toggleActive;
  }
}
