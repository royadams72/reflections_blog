import { LoginEffects } from "./login.effects";
import { TestBed, fakeAsync } from "@angular/core/testing";
import { provideMockActions } from '@ngrx/effects/testing';
import {of} from 'rxjs/observable/of';
import { cold, hot } from 'jasmine-marbles';
import { AuthService } from "../../../services/auth.service";
import {RouterTestingModule} from "@angular/router/testing";
import { Observable } from "rxjs";
import * as EffectsAction from '../actions/login.actions';
import { StoreModule} from "@ngrx/store";
import { reducers } from "../../../reducers";

describe('LoginEffects', () => {
   let effects, authService;
  let actions$: Observable<any>;
    beforeEach(() => TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers, {})
      ],
      providers: [
        LoginEffects,  
        {
          provide: AuthService,
          useValue: jasmine.createSpyObj('authService', ['login'])
        },
        provideMockActions(() => actions$)
      ]
    }));
    beforeEach(() => {
      effects = TestBed.get(LoginEffects);
      authService = TestBed.get(AuthService);
    });
  
    describe('Effects', () => {
      it('should return response from server', () => {
        // service = TestBed.get(AuthService);
        const payloadInfo = {email: 'test@reflections.co.uk', password:'password'}
        // const decodedData = {
        // name: "Roy", 
        // iat: 1531401829,
        // exp: 1531403029,
        // sub: "59c7808c17ce3e758583dc9a"}
       
        const responseData = {
          isAuthenticated: true,
          //copied token
              token:'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTHVrZSIsImlhdCI6MTUzMTQwMTgyOSwiZXhwIjoxNTMxNDAzMDI5LCJzdWIiOiI1OWM3ODA4YzE3Y2UzZTc1ODU4M2RjOWEifQ.Kr6NfLc9mgz8_O6wlnAo1E4jTSE0Q3tB4vqwIQOVWcasSm8MlPPmvx1WqLkRkKx1r_Rba0bjGIQ7iypZNW-XJEqr25GCnL3gparJap5CWqd_4dea48cNbcM_Km5cCkQ746IBVt2uarrqxBMvp4HAp2mP6E-A1XuV04p6VcnincGxwCW5lTQNFySKSVZ-cOOLOdlyhYhsvvPvu-f7J3W0poqniEJICkFaVnweBWogDUonqe_48z_eRauLkIdeLBPj3PO67XVgIGe423P15ZXXmmrXNFT4iGsCSfG_MJdljgTaZl65UcD_bu8wRkYTd4Vh0qBIuULyem4YDolaFMhcKg',
              name:'Roy'
        }


        const action = new EffectsAction.LogIn({type:'LOGIN', payload:payloadInfo});
        const result = new EffectsAction.LoginSuccess(responseData)
        
        actions$ = of(action);
        const response = cold( 'a', {a : responseData})
        const expected = cold( 'b', {b : result})
        authService.login.and.returnValue(response);
        console.log(responseData);
        expect(effects.login$).toBeObservable(expected);
      });
    
    });
  
  });

