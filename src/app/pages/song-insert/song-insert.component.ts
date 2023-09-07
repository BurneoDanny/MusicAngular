import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Album } from 'src/app/interfaces/album';
import { Artista } from 'src/app/interfaces/artista';
import { Countries } from 'src/app/interfaces/countries';
import { DataServiceService } from 'src/app/providers/data-service.service';

@Component({
  selector: 'app-song-insert',
  templateUrl: './song-insert.component.html',
  styleUrls: ['./song-insert.component.css']
})
export class SongInsertComponent {
  songDuration: string = ''; // Inicializa la duración de la canción como una cadena vacía
  selectedYear: number = 2023;
  artistas: Artista[] = [];
  artistasSelect = new FormControl('');
  albumesSelect = new FormControl('');
  albumes: Album[] = [];

  constructor(private DataProvider: DataServiceService){}

  ngOnInit(){
    this.DataProvider.getArtistas().subscribe((response)=>{
      this.artistas = response as Artista[]
    })
  }

  selection(id: number | null) {
    if (id === null) {
      this.albumes = [];
    } 
    else {
      this.DataProvider.getAlbumesByArtistaId(id).subscribe((response)=>{
        this.albumes = response as Album[];
      })
    }
  }
}
