import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Store } from '@ngrx/store';
import { LOAD_BLOGS_ACTION } from './core/store/actions/blog.actions';
import * as fromRoot from './reducers';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AuthService, private store:Store<fromRoot.State>) {
    this.store.dispatch({type: LOAD_BLOGS_ACTION})
    auth.handleAuth();
  }

  ngOnInit() {

  }

}
