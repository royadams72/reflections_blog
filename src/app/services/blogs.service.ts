import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Subject } from 'rxjs/Subject';

import { Blog } from '../models/blog';
import { ENV } from '../app.config';
import { RequestOptions } from '@angular/http';
@Injectable()
export class BlogsService {
  private blogsURL: string;
  public populateList;
  public populateForm;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {
    this.blogsURL = ENV.BASE_API;
  }


  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogsURL + 'blogs')
      .map((res: Blog[]) => {
        console.log(res['blogs'])
        return res['blogs'];
      })
  }

  getBlog(id): Observable<Blog>  {
    return this.http.get<Blog>(this.blogsURL + 'blogs/' + id)
      .map((res: Blog) => {
        console.log(res)
        return res["blog"];
      })
  }

  updateBlog(blog: Blog, index: number): Observable<Blog> {
    return this.http.patch<Blog>(this.blogsURL + 'blogs/edit', blog)
      .map((res:Blog) => {
        if (res) {
          console.log(res)
          // this.blogs.splice(index, 1, blog);
          return blog;
        }
      })
  }

  addBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.blogsURL + 'blogs/edit', blog)
      .map((res: Blog) => {
        // let blog = blog['blog'];
        console.log(res['blog'])
        return res['blog'];
      })//map automatic
  }

  deleteBlog(blog: Blog, index: number) {
   
    let id = blog._id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    console.log(id)
    return this.http.delete(this.blogsURL + 'blogs/edit/' + id, httpOptions)
      .map((res) => {
          const result = res;
          console.log(result);
          return result;
       
      }).catch( error => {
        // here we can show an error message to the user,
        // for example via a service
        console.error("error catched", error);

        return Observable.of({description: "Error Value Emitted"});
    })
  }


}
