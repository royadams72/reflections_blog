import { Component, OnInit, Input, ChangeDetectionStrategy , OnChanges, Output, EventEmitter} from '@angular/core';
import { BlogsService } from '../../../services/blogs.service';
import { Blog } from '../../../models/blog';
import { CrudBlogState } from '../store/reducers/crud-blog.reducer';



@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CrudListComponent implements OnInit {
  @Input() blogs: Blog[];
  @Output() blogSelected:EventEmitter<CrudBlogState> = new EventEmitter()
  constructor(private blogsService: BlogsService) { 

  }
  
ngOnChanges(){
  console.log(this .blogs)
}
  ngOnInit() {
    // this.blogs = this.blogsService.getBlogs();
  }
  populateForm(id: string, index:number) {
    // console.log(this.blogSelected)
    this.blogSelected.emit({id:id, index:index})
    
    // 
    
    // let blogs = this.blogsService.returnBlogs();
    // blogs.map((blog: Blog) => {
    //   blog._id === id ? this.blogsService.populateForm.next({ blog: blog, index: index }) : blog._id = blog._id;

    // })
  }
}
