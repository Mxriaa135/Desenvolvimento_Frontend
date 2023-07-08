import { Component } from '@angular/core';
import Piloto from 'src/app/models/piloto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'exercicio_1';

  public pilotos: Piloto[] = new Array<Piloto>();

  constructor() {
     this.pilotos.push(new Piloto("Max Verstappen", "Holandês" , "2015", 42, 3, "Red Bull", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.640.medium.jpg/1677069646195.jpg")));
     this.pilotos.push(new Piloto("Sérgio Perez", "Mexicano" , "2011", 6, 0, "Red Bull", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/perez.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("Charles Leclerc", "Monegasco", "2018", 5, 0, "Scuderia Ferrari", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/leclerc.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("Carlos Sainz", "Espanhol", "2015", 1, 0, "Scuderia Ferrari", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/sainz.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("Fernando Alonso", "Espanhol", "2001", 32, 2, "Aston Martin", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/alonso.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("Lance Stroll", "Canadense", "2016", 0, 0, "Aston Martin", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/stroll.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("Lewis Hamilton", "Britânico", "2007", 103, 7, "Mercedes", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("George Russel", "Britânico", "2019", 1, 0, "Mercedes", new URL ("https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/russell.jpg.img.1024.medium.jpg")));
     this.pilotos.push(new Piloto("Lando Norris", "Britânico", "2019", 0, 0, "McLaren", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/norris.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("Oscar Piastri", "Australiano", "2023", 0, 0, "McLaren", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/piastri.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("Pierre Gasly", "Francês", "2017", 1, 0, "Alpine", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/gasly.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("Estaban Ocon", "Francês", "2016", 1, 0, "Alpine", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/ocon.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("Guanyu Zhou", "Chinês", "2022", 0, 0, "Alfa Romeo", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/zhou.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("Valtteri Bottas", "Finlandês", "2013", 10, 0, "Alfa Romeo", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/bottas.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("Alexander Albon", "Tailandês", "2019", 0, 0, "Willians", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/albon.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("Logan Sargeant", "Norte-americano", "2023", 0, 0, "Willians", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/sargeant.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("Niko Hülkenberg", "Alemão", "2010", 0, 0, "Hass", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hulkenberg.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("Kevin Magnussen", "Dinamarquês", "2014", 0, 0, "Hass", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/magnussen.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("Yuki Tsunoda", "Japonês", "2021", 0, 0, "Alpha Tauri", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/tsunoda.jpg.img.1536.high.jpg")));
     this.pilotos.push(new Piloto("Nick De Vries", "Neerlandês", "2022", 0, 0, "Alpha Tauri", new URL ("https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/devries.jpg.img.1536.high.jpg")));
     
    

    // this.gestor.nomeSubordinados = this.analistas.map(analista => analista.nome);
  }
}
