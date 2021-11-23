import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem.compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})

export class OrdemCompraComponent implements OnInit {
  public pedido: Pedido = new Pedido('','','','');
  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaDePagamento: string = '';

  public enderecoValido!: boolean;
  public complementoValido!: boolean;
  public numeroValido!: boolean;
  public formaPagamentoValido!: boolean;

  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaDePagamentoEstadoPrimitivo: boolean = true;
  
  public formEstado:string = 'disabled';
  public idPedidoCompra!: number;

  constructor(private ordemCompraService:OrdemCompraService) { 
  }

  ngOnInit(): void {}

  public atualizaNumero(numero: string): void {
    this.numeroEstadoPrimitivo = false;

    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
    this.numero = numero;
    this.habilitaForm();
  }

  public atualizaEndereco(endereco: string): void {
    this.enderecoEstadoPrimitivo = false
    if (endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
    this.endereco = endereco;
    this.habilitaForm()
  }

  public atualizaFormaDePagamento(formaDePagamento: string): void {
    this.formaDePagamento = formaDePagamento;
    this.formaDePagamentoEstadoPrimitivo = false
    if(this.formaDePagamento.length > 0) {
        this.formaPagamentoValido = true
    } else {
        this.formaPagamentoValido = false
    }
    this.habilitaForm()
  }

  public atualizaComplemento(complemento: string) {
    this.complementoEstadoPrimitivo = false;
    if (this.complemento.length > 0) this.complementoValido = true;
    this.complemento = complemento;
    this.habilitaForm()
  }

  public habilitaForm():void{
    if (this.enderecoValido === true &&
       this.numeroValido === true &&
       this.formaPagamentoValido === true) {
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled'
    }

  }

  public confirmarCompra():void{
    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaDePagamento;

    this.ordemCompraService.efetivarCompra(this.pedido)
    .subscribe((idPedido:number)=>{
      this.idPedidoCompra = idPedido
    })
  }
}
