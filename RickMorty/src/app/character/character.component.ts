import { Component, OnInit } from '@angular/core';
import { ListadoService } from '../listado.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(private listadoService: ListadoService) { }

  characters: any = null;

  ngOnInit(): void {
    this.listadoService.retornar()
      .subscribe(result => this.characters = result)
  }
}
