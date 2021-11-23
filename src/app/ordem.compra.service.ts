import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { URL_API } from './app.api';
import { Pedido } from './shared/pedido.model';

@Injectable()
export class OrdemCompraService {
  private headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {}

  public efetivarCompra(pedido: Pedido): Observable<any> {
    this.headers.append('Content-type', 'application/json');

    console.log('ate aqui foi', pedido);
    return this.http
      .post(`${URL_API}/pedidos`, pedido, { headers: this.headers })
      .pipe(
        map((resposta: any) => {
          console.log(resposta);
        })
      );
  }
}
