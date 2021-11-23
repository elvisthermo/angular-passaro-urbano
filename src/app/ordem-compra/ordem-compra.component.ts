import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdemCompraService } from '../ordem.compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  @ViewChild('formulario') public formulario!: Pedido;
  // @ViewChild(ChildDirective) child!: ChildDirective;

  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit(): void {}

  public confirmarCompra(): void {
    console.log(this.formulario);
    
    let pedido:Pedido = new Pedido(
      this.formulario.endereco,
      this.formulario.numero,
      this.formulario.complemento,
      this.formulario.formaPagamento
    );
    this.ordemCompraService.efetivarCompra(pedido)
    .subscribe((idPedido:number)=>{
      console.log("pedido",idPedido);
      
    })
  }
}
