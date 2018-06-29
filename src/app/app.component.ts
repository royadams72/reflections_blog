import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { AuthService } from './services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from './core/store/app-state';
import { LOAD_BLOGS_ACTION } from './core/store/actions/blog.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AuthService, private store:Store<AppState>) {
    this.store.dispatch({type: LOAD_BLOGS_ACTION})
    auth.handleAuth();
  }

  ngOnInit() {

  }

}
