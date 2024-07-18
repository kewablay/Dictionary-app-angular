import { Component } from '@angular/core';
import { MeaningsListComponent } from '../meanings-list/meanings-list.component';
import { DictionaryService } from '../../services/dictionary.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [MeaningsListComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.sass',
})
export class SearchResultsComponent {
  searchResults: any;

  constructor(private dictionaryService: DictionaryService) {}

  ngOnInit(): void {
    this.dictionaryService.getSearchResults().subscribe((results) => {
      this.searchResults = results;
      console.log("results: ", this.searchResults);
    });
  }

  playAudio() {
    if (this.searchResults && this.searchResults[0]?.phonetics) {
      const audioUrl = this.searchResults[0].phonetics.find((phonetic: any) => phonetic.audio)?.audio;
      if (audioUrl) {
        const audio = new Audio(audioUrl);
        audio.play();
      } else {
        alert('Audio not available for this word.');
      }
    }
  }
}
