import { IProduct } from "../database/productDatabase";
/* 
1 - Interface IResultListContext para tipar o contexto.
2 - contexto ResulListContext com um valor inicial tipado.
*/
//Interface IResultListContext para tipar o contexto.
export interface IResulListContext { // Interface para tipar o contexto
  productList: IProduct[];
  // Função para setar a lista de produtos e tipada como uma função que recebe um array de IProduct e não retorna nada
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>; 
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pages: number;
  indexOfFirstItem: number;
  indexOfLastItem: number;
  currentItems: IProduct[];
  
}

export const defaultValues: IResulListContext = { // Valores padrão para o contexto
  // porque o valor padrão é um objeto, é necessário tipar cada propriedade do objeto
  // se nao tipar, o typescript vai inferir o tipo como any 
  // e isso não é recomendado
  productList: [],
  setProductList: () => {}, 
  itemsPerPage: 0,
  setItemsPerPage: () => {}, 
  currentPage: 0, 
  setCurrentPage: () => {},
  pages: 0,
  indexOfFirstItem: 0,
  indexOfLastItem: 0,
  currentItems: [],
};
