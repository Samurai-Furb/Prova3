export interface Subobjeto {
  propriedade1: string;
  propriedade2: string;
}

export interface Funcionario {
  id: number;
  nome: string;
  foto: string; // URL da imagem
  email: string;
  subobjeto: Subobjeto;
}
