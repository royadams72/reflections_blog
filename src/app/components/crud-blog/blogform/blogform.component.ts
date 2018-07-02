import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Blog } from '../../../models/blog';




@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogFormComponent implements OnInit {
  public state: string;
  public crudBlogForm: FormGroup;
  private formValid: boolean;
  // public success: boolean;
  private successMsg: String;
  public _id: String;
  private connArray: Array<Subscription> = [];
  private index: number;
  @Input() selectedBlog:Blog
  @Input() blogAction:string;
  @Input() blogIndex:string;
  @Output() onCrudAction:EventEmitter<{}> = new EventEmitter()
  // crudTest$:Observable<crudBlogState>
  constructor() {

    // this.state = 'CREATING';
    this.formValid = false;
    // this.success = false;
  }
  ngOnInit() {
    this.initForm();
  }
  ngOnChanges(){
    // console.log(this.blogAction)
    console.log(this.selectedBlog)

    if (this.blogAction == "CRUD_SUCCESS_ACTION"){
      this.crudBlogForm.reset();
      this.successMsg = "The operation has been successful"
      this.blogAction = "CREATING";
    }
    if(this.selectedBlog){
      this.crudBlogForm.patchValue({
        'title':this.selectedBlog.title,
        'vidUrl': this.selectedBlog.vidUrl,
        'script': this.selectedBlog.script,
        '_id': this.selectedBlog._id,
        'index': this.blogIndex
      })
    }
    
  }
  private initForm() {
    // let items = [];
    this.crudBlogForm = new FormGroup({
      'title': new FormControl(null, [Validators.required, Validators.minLength(1)]),
      'vidUrl': new FormControl(null, Validators.compose([Validators.required, Validators.minLength(1)])),
      'script': new FormControl(null, [Validators.required, Validators.minLength(1)]),
      '_id': new FormControl(null),
      'index': new FormControl(null)
      
    });
 
  }
  onAlertClosed(event){
    this.successMsg = undefined;
  }
  onValidate(control:string){
    return !this.crudBlogForm.get(control).valid && this.crudBlogForm.get(control).touched
  }
  onSubmitForm(action) {
    let form = this.crudBlogForm
    let title = form.get('title');
    let vidUrl = form.get('vidUrl');
    let script = form.get('script');
    let _id = form.get('_id');
    let index = form.get('index');
    let conn: Subscription;
    // action === 'CREATING' ? vidID = null : vidID = this._id;
    let blog:Blog = { _id: _id.value, title: title.value, vidUrl: vidUrl.value, script: script.value }
    this.onCrudAction.emit({ action:action, payload:{blog:blog, index:index.value}})
    console.log( action, {blog:blog, index:index.value});
  }
  ngOnDestroy() {
    this.connArray.map((conn) => {
      conn.unsubscribe();
    })
    // this.
  }

}
