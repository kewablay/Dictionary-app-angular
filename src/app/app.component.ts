import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontSelectorComponent } from "./components/font-selector/font-selector.component";
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontSelectorComponent, ThemeToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Dictionary-app-angular';
}
