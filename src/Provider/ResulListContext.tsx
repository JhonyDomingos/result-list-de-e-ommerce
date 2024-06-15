import { createContext, useEffect, useState } from "react";
import { IProduct, productDatabase } from "../database/productDatabase";
import {
  defaultValues,
  IResulListContext,
} from "./ResultListContext.interface";

export const ResultListContext =
  createContext<IResulListContext>(defaultValues);

interface IResultListProviderProps {
  // interface for the props
  children: React.ReactNode; // children prop is required and it should be a ReactNode
}
export const ResultListProvider = ({ children }: IResultListProviderProps) => {
  /*LOGICA DA PAGINAÇÃO
        1 - Numero de itens por página
        2 - Página atual
        passos:
        1 - Calcular o total de páginas
        2 - Calcular o index do último item
    */
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calcula o total de páginas
  // Math.ceil arredonda para cima
  const pages = Math.ceil(productList.length / itemsPerPage);
  // Calcula o index do primeiro item
  const indexOfFirstItem = currentPage * itemsPerPage;
  // Calcula o index do último item
  const indexOfLastItem = indexOfFirstItem + itemsPerPage;
  // Pega os itens atuaisque estão sendo exibidos
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const getProductList = () => {
      const resultData: IProduct[] = productDatabase;
      setProductList(resultData);
    };
    getProductList();
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerPage]);
  

  return (
    <ResultListContext.Provider
      value={{
        productList,
        setProductList,
        itemsPerPage,
        setItemsPerPage,
        currentPage,
        setCurrentPage,
        pages,
        indexOfFirstItem,
        indexOfLastItem,
        currentItems,
      }}
    >
      {children}
    </ResultListContext.Provider>
  );
};
