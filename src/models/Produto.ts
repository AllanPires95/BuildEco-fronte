import Categoria from "./Categoria";

interface Produto{
    id: number;
    nome: string;
    quantidade: number;
    preco: number;
    marca: string;
    peso: number;
    data: string;
    categoria?: Categoria|null;
}

export default Produto;


