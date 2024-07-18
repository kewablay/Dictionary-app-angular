import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontSelectorComponent } from "./components/font-selector/font-selector.component";
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";
import { SearchComponent } from "./components/search/search.component";
import { SearchResultsComponent } from "./components/search-results/search-results.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DictionaryService } from './services/dictionary.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontSelectorComponent, ThemeToggleComponent, SearchComponent, SearchResultsComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  providers: [DictionaryService],
})
export class AppComponent {
  title = 'Dictionary-app-angular';
}
