import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
})
export class PokemonPageComponent implements OnInit {
  @Input({ required: true }) tab!: string;
  activeTab: number;
  userToken: string | null;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.activeTab = 0;
    this.userToken = null;
  }
  ngOnInit(): void {
    this.authenticationService.authToken$.subscribe((value) => {
      this.userToken = value;
    });

    const tab = this.router.url.split('/')[2];

    if (tab === 'list') {
      this.activeTab = 0;
    }

    if (tab === 'favourites') {
      this.activeTab = 1;
    }
  }

  onSelectedTabChange(event: MatTabChangeEvent) {
    if (event.index === 0) {
      this.router.navigateByUrl('pokemon/list');
      return;
    }
    if (event.index === 1) {
      this.router.navigateByUrl('pokemon/favorites');
    }
  }
}
