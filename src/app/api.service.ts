import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  imagemDog() : Observable<any> {
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }
}
