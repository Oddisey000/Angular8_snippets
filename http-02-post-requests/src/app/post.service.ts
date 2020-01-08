import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  error = new Subject<string>();

  createAndStorePosts(title: string, content: string) {
    const postData: Post = {title: title, content: content}
    this.http
      .post<{name: string}>(
        'https://ng-test-project-9f8aa.firebaseio.com/posts.json',
        postData,
        {
          observe: 'body'
        }
      )
      .subscribe(error => {
        this.error.next(error.name);
      });
  }

  fetchPosts() {
    let serachParams = new HttpParams();
    serachParams = serachParams.append('print', 'pretty');
    serachParams = serachParams.append('give', 'data');
    return this.http
    .get<{ [key: string]: Post }>(
      'https://ng-test-project-9f8aa.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({'Custom-Header': 'Hello'}),
        params: serachParams,
        responseType: 'json'
      }
    )
    .pipe(map(responseData => {
      const postsArray: Post[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postsArray.push({ ... responseData[key], id: key});
        }
      }
      return postsArray;
    }), catchError(error => {
      return throwError(error);
    }));
  }

  deletePosts() {
    return this.http.delete(
      'https://ng-test-project-9f8aa.firebaseio.com/posts.json',
      {
        observe: 'events',
        responseType: 'text'
      }
    ).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
      if (event.type === HttpEventType.Sent) {
        //console.log();
      }
    }));
  }

  constructor(private http: HttpClient) { }
}
