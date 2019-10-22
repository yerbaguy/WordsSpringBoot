import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Word } from './Word';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Categories } from './Categories';


const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor( private http: HttpClient) { }

  private wordUrl = "http://localhost:8080/api/create";
  private wordUrll = "http://localhost:8080/api/getinfo";
  private catUrl = "http://localhost:8080/api/findbyid";


  private handleError<T> (operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {

       console.error(error, 'Operation: ${operation}');

       return of(result as T);
    }

  }


  addCat(categories: Categories): Observable<Categories> {

     return this.http.post<Categories>(this.wordUrl, categories, httpOptions).pipe(
       tap((categories:Categories) => console.log('Added categories with id ${categories.id}')),
       catchError(this.handleError<Categories>('_addCategories_'))
     );
  }

  addWord(word: Word): Observable<Word> {

    return this.http.post<Word>(this.wordUrl, word, httpOptions).pipe(
      tap((word: Word) => console.log('Added word with id ${word.id}')),
      catchError(this.handleError<Word>('_addWord_'))
    );


  }

  getinfo() : Observable<Word> {

    return this.http.get<Word>(this.wordUrll).pipe(
      tap((word: Word) => ('ljkasdf')),
      catchError(this.handleError<Word>('_getinfo_'))
    );
  }

  // getCategory() : Observable<Categories> {

  //     return this.http.get<Categories>(this.catUrl).pipe(
  //        tap((categories: Categories) => ('lkajsdf')),
  //        catchError(this.handleError<Categories>('_getCategory_'))
  //      );

  // }

 // getCategory() : any {
  getCategory() : Observable<Categories[]> {
   // return this.http.get(this.catUrl);

    // return this.http.get<Categories>(this.catUrl).pipe(
    //    tap((categories: Categories) => ('lkjasdflkj')),
    //    catchError(this.handleError<Categories>('_getCategory_'))
    //  );

     return this.http.get<Categories[]>(this.wordUrll);
  }



}
