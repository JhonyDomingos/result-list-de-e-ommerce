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
        3 - Calcular o index do primeiro item
        4 - dividir a lista de produtos em partes pelo index do primeiro item e index do último item
        5 - retornar os itens atuais já paginados

  para filtrar os produtos
  1 - ordenar por nome
  2 - ordenar por preço
  Para fazer o filtro por nome
  1- criar um estado para armazenar o valor do input
  2- criar uma função para filtrar os produtos
  3- criar um evento para capturar o valor do input
  4- criar um evento para aplicar o filtro
  5- criar um evento para limpar o filtro
    */
  const [productList, setProductList] = useState<IProduct[]>(defaultValues.productList); // Estado para a lista de produtos tipado como um array de IProduct
  const [itemsPerPage, setItemsPerPage] = useState<number>(defaultValues.itemsPerPage); // Estado para o número de itens por página tipado como um number
  const [currentPage, setCurrentPage] = useState<number>(defaultValues.currentPage); // Estado para a página atual tipado como um number

  const [alphabeticalOrder, setAlphabeticalOrder] = useState<string>(defaultValues.alphabeticalOrder);
  const [priceOrder, setPriceOrder] = useState<string>(defaultValues.alphabeticalOrder);
  const [visible, setVisible] = useState<boolean>(false);

  const applyFilter = () => {
    const sortedList = [...productList].map((product) => product);
    // o local compare é um método de string que compara duas strings
    // e retorna um número baseado na ordem alfabética das strings
    
    if (alphabeticalOrder === "a-z") {
      sortedList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (alphabeticalOrder === "z-a") {
      sortedList.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (priceOrder === "lower-price") {
      sortedList.sort((a, b) => getProductPrice(a) - getProductPrice(b) );
    } else if (priceOrder === "higher-price") {
      sortedList.sort((a, b) => getProductPrice(b) - getProductPrice(a));
    }

    setProductList(sortedList); // Atualiza a lista de produtos com a lista ordenada
    visible && setVisible(false); // Fecha o modal de filtro
  };

  const getProductPrice = (product: IProduct): number => { 
   
    return product.discountedPrice  !== undefined  ? product.discountedPrice : product.price;
  }

  const clearFilters = () => {
    const originalList: IProduct[] = productDatabase;
    setAlphabeticalOrder("default");
    setPriceOrder("default");

    setProductList(originalList);
  };

  // Calcula o total de páginas
  // Math.ceil serve para arredondar para cima o resultado da divisão
  const pages = Math.ceil(productList.length / itemsPerPage);
  // Calcula o index do primeiro item multiplicando a página atual pelo número de itens por página
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  // Calcula o index do último item somando o index do primeiro item com o número de itens por página
  // pegando o menor valor entre o resultado e o tamanho total da lista
  const indexOfLastItem = Math.min(
    indexOfFirstItem + itemsPerPage,
    productList.length
  );
  // Pega os itens atuais que estão sendo exibidos
  // slice -> pega um pedaço de um array a partir de um index inicial até um index final
  // ex: [1,2,3,4,5].slice(1,3) -> [2,3] -> pega do index 1 até o index 3 e retorna os valores
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);

  // useEffect -> serve para executar um efeito colateral, trazendo reatividade para a aplicação
  // useEffect(() => {}, []) -> executa a função dentro do useEffect quando o componente é montado

  useEffect(() => {
    const getProductList = () => {
      // Função para pegar a lista de produtos
      const resultData: IProduct[] = productDatabase; // Pega a lista de produtos do "banco de dados"
      setProductList(resultData); // adiciona a lista de produtos no estado
    };
    getProductList(); // Chama a função para pegar a lista de produtos
    // se chamar uma funcao dentro do useEffect sem passar dependencias, ela será chamada apenas uma vez
    // obs se chamar uma funcao fora do useEffect, ela será chamada toda vez que o componente for renderizado
    // e pode causar um loop infinito.
  }, []);

  //useEffect -> serve para executar um efeito colateral, trazendo reatividade para a aplicação
  useEffect(() => {
    // Reset currentPage when itemsPerPage changes to avoid errors
    setCurrentPage(1);
  }, [itemsPerPage]);

  return (
    <ResultListContext.Provider // Provider para passar os estados e funções para os componentes filhos
      value={{
        // value é um objeto que contém os estados e funções que serão passados para os componentes filhos
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
        alphabeticalOrder,
        setAlphabeticalOrder,
        priceOrder,
        setPriceOrder,
        applyFilter,
        clearFilters,
        visible, 
        setVisible
      }}
    >
      {children}
    </ResultListContext.Provider>
  );
};
