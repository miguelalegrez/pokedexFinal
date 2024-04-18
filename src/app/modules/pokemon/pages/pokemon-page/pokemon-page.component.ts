import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../core/services/authentication.service';

@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
})
export class PokemonPageComponent implements OnInit {
  userToken: string | null;
  constructor(private authenticationService: AuthenticationService) {
    this.userToken = null;
  }
  ngOnInit(): void {
    this.authenticationService.authToken$.subscribe((value) => {
      this.userToken = value;
    });
  }
}
