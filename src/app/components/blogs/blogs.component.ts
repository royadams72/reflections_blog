import { Component, OnInit } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';
// import {MatTableDataSource, MatSort} from '@angular/material';
import { BlogsService } from '../../services/blogs.service';
import { Blog } from '../../models/blog';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs:any;
  constructor(private  blogsService: BlogsService) { }
  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  ngOnInit() {
    this.blogsService.getBlogs()
    .subscribe((res)=>{
      this.blogs = res;
      console.log(res)
    })

  }

}
