import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  private searchResultsSubject = new BehaviorSubject<any>(null);
  private requestStatusSubject = new BehaviorSubject<string>('idle');
  private errorSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  searchWord(query: string): Observable<any> {
    this.requestStatusSubject.next('loading');
    return this.http.get<any>(`${this.apiUrl}${query}`).pipe(
      tap((results) => {
        this.searchResultsSubject.next(results);
        this.errorSubject.next(null);
        this.requestStatusSubject.next('success');
      }),
      catchError((error) => {
        this.requestStatusSubject.next('error');
        this.errorSubject.next(error);
        console.log('error: ', error);
        return of(null);
      })
    );
  }

  getSearchResults(): Observable<any> {
    return this.searchResultsSubject.asObservable();
  }

  getRequestStatus(): Observable<string> {
    return this.requestStatusSubject.asObservable();
  }

  getError(): Observable<string | null> {
    return this.errorSubject.asObservable();
  }

  testSearch() {
    this.searchWord('keyboard');
  }
}
