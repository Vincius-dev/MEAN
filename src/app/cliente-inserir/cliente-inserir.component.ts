import { Component, EventEmitter, Output } from '@angular/core';
import { Cliente } from '../clientes/cliente.model';

@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css']
})
export class ClienteInserirComponent {

  @Output() clienteAdicionado = new EventEmitter<Cliente>();

  nome: string;
  fone: string;
  email: string;

  onAdicionarCliente() {
    const cliente: Cliente = {
      nome: this.nome,
      fone: this.fone,
      email: this.email,
    };
    this.clienteAdicionado.emit(cliente);
  }

}
