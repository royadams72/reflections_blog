import { Component, OnInit, Input, ChangeDetectionStrategy , OnChanges, Output, EventEmitter} from '@angular/core';
import { Blog } from '../../../../models/blog';
import * as fromCrud  from '../../store/reducers/blog.reducer';



@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CrudListComponent implements OnInit {
  @Input() blogs: Blog[];
  @Output() blogSelected:EventEmitter<fromCrud.State> = new EventEmitter()
  constructor() {}
  
ngOnChanges(){
  console.log(this.blogs)
}
  ngOnInit() {
    // this.blogs = this.blogsService.getBlogs();
  }
  populateForm(id: string, index:number) {
    // console.log({id:id, index:index})
    this.blogSelected.emit({id:id, index:index, uiState:''})
    
    // 
    
    // let blogs = this.blogsService.returnBlogs();
    // blogs.map((blog: Blog) => {
    //   blog._id === id ? this.blogsService.populateForm.next({ blog: blog, index: index }) : blog._id = blog._id;

    // })
  }
}
