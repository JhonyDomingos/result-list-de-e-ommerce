import { IProduct } from "../database/productDatabase";
/* 
1 - Interface IResultListContext para tipar o contexto.
2 - contexto ResulListContext com um valor inicial tipado.
*/
//Interface IResultListContext para tipar o contexto.
export interface IResulListContext {
  productList: IProduct[];
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

//Valores Padrão para o contexto
export const defaultValues: IResulListContext = {
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
