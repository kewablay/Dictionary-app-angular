import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DictionaryService } from '../../services/dictionary.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass',
})
export class SearchComponent {
  searchValue: string = '';
  isEmpty: boolean = false;

  constructor(private dictionaryService: DictionaryService) {}

  onInputChange() {
    this.isEmpty = false;
  }
  search() {
    if (!this.searchValue.trim()) {
      this.isEmpty = true;
      return;
    }
    if (this.searchValue) {
      this.dictionaryService.searchWord(this.searchValue).subscribe();
    }
  }
}
