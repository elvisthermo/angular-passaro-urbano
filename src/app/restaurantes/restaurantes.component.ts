import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  public ofertas!: Oferta[]
  // public dataTeste: any = new Date(2021,10,25);

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
      this.ofertasService.getOfertasPorCategoria('restaurante')
        .then((ofertas: Oferta[]) => {
            this.ofertas = ofertas
        })
  }

}
