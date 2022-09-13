import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  characters: any = null;

  ngOnInit(): void {
    this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8")
      .subscribe(
        result => {
          this.characters = result
        },
        error => {
          console.log("error")
        }
      )
  }

}
