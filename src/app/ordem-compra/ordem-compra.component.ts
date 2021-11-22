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

  public enderecoValido!: boolean;
  public complementoValido!: boolean;
  public numeroValido!: boolean;
  public formaPagamentoValido!: boolean;

  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaDePagamentoEstadoPrimitivo: boolean = true;
  

  constructor() {}

  ngOnInit(): void {}

  public atualizaNumero(numero: string): void {
    this.numeroEstadoPrimitivo = false;

    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
    this.numero = numero;
  }

  public atualizaEndereco(endereco: string): void {
    this.enderecoEstadoPrimitivo = false
    if (endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
    this.endereco = endereco;
  }

  public atualizaFormaDePagamento(formaDePagamento: string): void {
    this.formaDePagamento = formaDePagamento;
    this.formaDePagamentoEstadoPrimitivo = false
    if(this.formaDePagamento.length > 0) {
        this.formaPagamentoValido = true
    } else {
        this.formaPagamentoValido = false
    }
  }

  public atualizaComplemento(complemento: string) {
    this.complementoEstadoPrimitivo = false;
    if (this.complemento.length > 0) this.complementoValido = true;
    this.complemento = complemento;
  }
}
