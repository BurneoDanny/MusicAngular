import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Artista } from 'src/app/interfaces/artista';
import { Countries } from 'src/app/interfaces/countries';
import { DataServiceService } from 'src/app/providers/data-service.service';

@Component({
  selector: 'app-album-insert',
  templateUrl: './album-insert.component.html',
  styleUrls: ['./album-insert.component.css']
})
export class AlbumInsertComponent {
  artistas: Artista[] = [];
  artistasSelect = new FormControl('');

  selectedYear: number = 2023; 

  constructor(private DataProvider: DataServiceService){}

  ngOnInit(){
    this.DataProvider.getArtistas().subscribe((response)=>{
      this.artistas = response as Artista[]
    })
  }

}
