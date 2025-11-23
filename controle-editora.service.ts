import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable()
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Editora Exemplo 1' },
    { codEditora: 2, nome: 'Editora Exemplo 2' },
    { codEditora: 3, nome: 'Editora Exemplo 3' }
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter(e => e.codEditora === codEditora)[0];
    return editora ? editora.nome : '';
  }
}
