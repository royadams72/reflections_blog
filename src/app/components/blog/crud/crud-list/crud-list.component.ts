import { Component, OnInit, Input, ChangeDetectionStrategy , OnChanges, Output, EventEmitter} from '@angular/core';
import { Blog } from '../../../../models/blog';
import * as fromBlogsUI  from '../../store/reducers/blogUI.reducer';



@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CrudListComponent {
  @Input() blogs: Blog[];
  @Output() blogSelected:EventEmitter<fromBlogsUI.State> = new EventEmitter()
  constructor() {}
  
ngOnChanges(){
  console.log(this.blogs)
}

  populateForm(id: string, index:number) {
    this.blogSelected.emit({id:id, index:index, uiState:''})
  }
}
