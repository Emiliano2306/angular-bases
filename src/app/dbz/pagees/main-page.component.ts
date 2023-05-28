import { Component } from '@angular/core';
import { Character } from '../components/interfaces/character.interface';
import { DbzService } from '../components/services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {
  id!: string;

  constructor( private dbzService: DbzService ) {}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }


  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);

  }

  onNewCharacter (character: Character) {
    this.dbzService.addCharacter(character)
  }

}
