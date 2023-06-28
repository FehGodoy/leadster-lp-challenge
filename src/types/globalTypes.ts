export interface VideoCat {
  id?: number;
  categorias: string[];
}

export interface Video {
  id: number;
  titulo: string;
  link: string;
  descricao: string;
  categorias: string[];
  thumbnail: string;
  relevancia: number;
  dataPublicacao: string;
}
