import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  private searchResultsSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  searchWord(query: string): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}${query}`)
      .pipe(tap((results) => this.searchResultsSubject.next(results)));
  }
  

  getSearchResults(): Observable<any> {
    return this.searchResultsSubject.asObservable();
  }

  testSearch() {
    this.searchWord('keyboard');
  }
}
