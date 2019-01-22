import { Injectable } from '@angular/core';
import { TestAppHttpService } from './services/http-service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class AppComponentService {

  private apiPath = {
    searchByDate: '/search_by_date',
  };

  constructor(private http: TestAppHttpService) { }
  public getPosts(tag: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('tags', tag);
    return this.http.get(this.apiPath.searchByDate, { params });
  }

}
