import { useContext, useMemo } from "react";
import { Button } from "../../Buttons/defaultButtons/buttons";
import { ResultListContext } from "../../../Provider/ResulListContext";
import paginationStyles from "./pagination.module.css";
// Definição do componente Pagination
export const Pagination = () => {
  // Obtém as variáveis e funções necessárias do contexto ResultListContext
  const { pages, currentPage, setCurrentPage } = useContext(ResultListContext);
  // Define o número máximo de páginas visíveis de cada lado da página atual
  const maxVisiblePages = 2;
  // Cálculo das páginas visíveis usando useMemo para otimização
  const visiblePages = useMemo(() => {
    // Calcula a primeira página visível garantindo que não seja menor que 1
    const startPage = Math.max(1, currentPage - maxVisiblePages);
    // Calcula a última página visível garantindo que não seja maior que o número total de páginas
    const endPage = Math.min(currentPage + maxVisiblePages, pages);

    // Retorna um array com as páginas visíveis, começando de startPage até endPage
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }, [currentPage, pages]); // Recalcula somente quando currentPage ou pages mudarem

  // Função para manipular a paginação dos produtos, mudando a página atual
  const handlerProductsPagination = (page: number) => {
    setCurrentPage(page);
  };

  // Verifica se o botão "Previous" pode ser habilitado
  const couldGoBack = currentPage > 1;
  // Verifica se o botão "Next" pode ser habilitado
  const couldGoForward = currentPage < pages;

  return (
    <div className={paginationStyles.container}>
      {/* Botão "Previous" para ir para a página anterior */}
      <Button
        className={`${paginationStyles.paginationButton} ${
          !couldGoBack ? paginationStyles.hidden : ""
        }`}
        onClick={() => handlerProductsPagination(currentPage - 1)}
        disabled={!couldGoBack}
        active={!couldGoBack}
      >
        Prev
      </Button>
      <div className={paginationStyles.paginationButtons}>
        {/* Mapeia e renderiza os botões das páginas visíveis */}
        {visiblePages.map((page) => (
          <Button
           className={`${currentPage === page ? paginationStyles.active : ""}`}
            key={page}
            disabled={currentPage === page} // Desabilita o botão se for a página atual
            active={currentPage === page} // Adiciona a classe active se for a página atual
            onClick={() => handlerProductsPagination(page)} // Muda para a página clicada
          >
            {page}
          </Button>
        ))}
      </div>
      {/* Botão "Next" para ir para a próxima página */}
      <Button
        onClick={() => handlerProductsPagination(currentPage + 1)}
        disabled={!couldGoForward}
        className={`${paginationStyles.paginationButton} ${
          !couldGoForward ? paginationStyles.hidden : ""
        }`}
      >
        Next
      </Button>
    </div>
  );
};
