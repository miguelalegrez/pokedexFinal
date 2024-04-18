import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginForm } from '../models/authentication.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authToken$: BehaviorSubject<string | null>;

  constructor() {
    this.authToken$ = new BehaviorSubject<string | null>(null);
  }

  async login(loginForm: LoginForm) {
    // Llamar a mi servicio
    // Recibir el token
    // Emitir el token
    return new Promise<void>((resolve) => {
      //Simulo una llamada a una api
      setTimeout(() => {
        this.authToken$.next('token');
        resolve();
      }, 2000);
    });
  }
}
