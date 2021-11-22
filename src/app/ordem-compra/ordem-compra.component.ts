import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
})
export class OrdemCompraComponent implements OnInit {
  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaDePagamento: string = '';

  public endercoValido!:boolean
  public complementoValido!:boolean
  public numeroValido!:boolean
  public formaPagamentoValido!:boolean

  constructor() {}

  ngOnInit(): void {}

  public atualizaNumero(numero:string):void{
    this.numero = numero

  }

  public atualizaEndereco(endereco:string):void{
    if(endereco.length>3){
      this.endercoValido = true
    }else{
      this.endercoValido = false
    }
    this.endereco = endereco
  }

  public atualizaFormaDePagamento(formaDePagamento:string):void{
    this.formaDePagamento = formaDePagamento
  }

  public atualizaComplemento(complemento:string){
    this.complemento = complemento;
  }
}
