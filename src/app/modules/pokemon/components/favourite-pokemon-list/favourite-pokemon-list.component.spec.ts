import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritePokemonListComponent } from './favourite-pokemon-list.component';

describe('FavouritePokemonListComponent', () => {
  let component: FavouritePokemonListComponent;
  let fixture: ComponentFixture<FavouritePokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouritePokemonListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavouritePokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
