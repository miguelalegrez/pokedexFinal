import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { HeaderComponent } from '../../../../core/components/header/header.component';

@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
  imports: [PokemonListComponent, HeaderComponent],
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
