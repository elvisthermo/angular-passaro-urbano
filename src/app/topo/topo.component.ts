import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService],
})
export class TopoComponent implements OnInit {
  public ofertas!: Observable<Oferta[]>;
  private subjectPesqusa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertas = this.subjectPesqusa //retorno desejado
    .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((termo: string) => {
          console.log('requisão http termo:', termo);
          if(termo.trim()===''){
            return of<Oferta[]>([])
          }
          return this.ofertasService.pesquisarOfertas(termo);
        }),
       catchError((err:any)=>{
          console.log(err);
          return of<Oferta[]>([])
          
        })
      );
  }

  public pesquisa(termoDaBusca: string): void {
    console.log("key",termoDaBusca);
    this.subjectPesqusa.next(termoDaBusca);
    
  }

  public limpaPesquisa():void{
    this.subjectPesqusa.next('')
  }
}
