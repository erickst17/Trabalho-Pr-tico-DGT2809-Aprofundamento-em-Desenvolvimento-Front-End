import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable()
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Angular Básico',
      resumo: 'Introdução ao desenvolvimento com Angular.',
      autores: ['João Silva', 'Maria Souza']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'TypeScript Essencial',
      resumo: 'Conceitos fundamentais da linguagem TypeScript.',
      autores: ['Carlos Pereira']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Desenvolvimento Web Moderno',
      resumo: 'Boas práticas no desenvolvimento front-end.',
      autores: ['Ana Costa', 'Pedro Santos']
    }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maxCodigo =
      this.livros.length > 0
        ? Math.max(...this.livros.map(l => l.codigo))
        : 0;
    livro.codigo = maxCodigo + 1;
    // Clona o objeto para evitar efeitos colaterais externos
    this.livros.push({ ...livro });
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index > -1) {
      this.livros.splice(index, 1);
    }
  }
}
