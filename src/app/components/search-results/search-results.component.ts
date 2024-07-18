import { Component } from '@angular/core';
import { MeaningsListComponent } from '../meanings-list/meanings-list.component';
import { DictionaryService } from '../../services/dictionary.service';
import { ResultComponent } from "../result/result.component";

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [MeaningsListComponent, ResultComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.sass',
})
export class SearchResultsComponent {
  searchResults: any;
  requstStatus: string = 'idle';
  error: any = null

  constructor(private dictionaryService: DictionaryService) {}

  ngOnInit(): void {
    this.dictionaryService.getSearchResults().subscribe((results) => {
      this.searchResults = results;
      console.log('results: ', this.searchResults);
    });
    this.dictionaryService.getRequestStatus().subscribe((status) => {
      this.requstStatus = status;
    });
    this.dictionaryService.getError().subscribe((error) => {
      this.error = error
    })
  }

  playAudio() {
    if (this.searchResults && this.searchResults[0]?.phonetics) {
      const audioUrl = this.searchResults[0].phonetics.find(
        (phonetic: any) => phonetic.audio
      )?.audio;
      if (audioUrl) {
        const audio = new Audio(audioUrl);
        audio.play();
      } else {
        alert('Audio not available for this word.');
      }
    }
  }
}
