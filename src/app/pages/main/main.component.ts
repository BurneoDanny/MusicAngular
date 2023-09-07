import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/providers/data-service.service';
import { Genero } from 'src/app/interfaces/genero';
import { ChartServiceService } from 'src/app/providers/chart-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  songsByArtist : any[] = [];
  generos : any[] = [];
  artistSongsChart: any;
  bestGenresChart:any;
  
  constructor(private DataProvider : DataServiceService, private ChartProvider: ChartServiceService){}
  

  ngOnInit(){
    this.DataProvider.getSongsByArtist().subscribe((response)=>{
      this.songsByArtist = response as any[]
      this.DataProvider.getSongsByGenre().subscribe((response)=>{
        this.generos = response as any[]
        this.initializeGraphs(this.songsByArtist,this.generos);
      })
    })
  }


  private initializeGraphs(songsByArtist: any[], generos: any[]) {
    // Top 10 Artist and their number of songs
    const isMobile = window.innerWidth <= 768;
    const top10Artist = songsByArtist.sort((a,b)=>b.numeroDeCanciones-a.numeroDeCanciones).slice(0, isMobile? 5 : 10) ;
    const data_artists = {
      labels: top10Artist.map((artista) => artista.nombre),
      datasets: [
        {
          label: 'Numero de canciones por artista',
          data: top10Artist.map((artista) => artista.numeroDeCanciones),
          backgroundColor: ["#DF4550","#DF4550","#DF4550","#DF4550","#2B3EE5","#2B3EE5","#2B3EE5","#E5EB4D","#E5EB4D","#E5EB4D"].slice(0, isMobile ? 5 : 10),
          borderWidth: 1,
        },
      ],
    };
    this.artistSongsChart = this.ChartProvider.getDefaultBarChart(
      'artistSongs',
      data_artists
    );


    // Top 3 genre with most songs
    const top3genre = generos.slice(0, 3);
    const labels = top3genre.map((genre) => genre.nombre);
    const data_genres = {
      labels: labels,
      datasets: [{
        label: 'Cantidad de canciones',
        data: top3genre.map((genre) => genre.NumeroDeCanciones),
        backgroundColor: [
          'rgb(255, 99, 132)',
          '#000',
          'rgb(54, 162, 235)',
        ],
        hoverBackgroundColor: ["#F6607E","#4B4B4B","#2C8FD1"],
        hoverOffset: 4
      }]
    };
    this.bestGenresChart = this.ChartProvider.getDefaultPieChart('bestGenres', data_genres);


  }

  ngOnDestroy() {
    if (this.artistSongsChart) {
      this.artistSongsChart.destroy();
    }
    if (this.bestGenresChart) {
      this.bestGenresChart.destroy();
    }
  }
}


