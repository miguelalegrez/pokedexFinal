import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginForm } from '../../../../core/models/authentication.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPAgeComponent {
  loginForm: FormGroup<LoginForm>;
  loading: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });

    this.loading = false;
  }

  async onLogin(event: SubmitEvent) {
    // Añadir llamada al servicio de autenticacion para realizar la peticion de login
    event?.preventDefault();
    // Cuando se esta cargando es true
    this.loading = true;
    await this.authenticationService.login(this.loginForm.value as LoginForm);
    // cuando termina de carga lo paso a false el loading
    this.loading = false;
    // Redireccion a alguna pagina
    this.router.navigateByUrl('/pokemon');
  }
}
