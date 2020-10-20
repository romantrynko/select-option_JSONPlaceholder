import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  URL = 'https://jsonplaceholder.typicode.com/posts?userId=';

  constructor(private http: HttpClient) { }

  getPostByUserId(id: number): Observable<IPost[]>{
    return this.http.get<IPost[]>(`${this.URL}${id}`);
  }
}
