import { useContext, useMemo } from "react";
import { Button } from "../../Buttons/defaultButtons/buttons";
import { ResultListContext } from "../../../Provider/ResulListContext";

// Component definition goes here
export const Pagination = () => {
  const { pages, currentPage, setCurrentPage } = useContext(ResultListContext);
  const totalPages = useMemo(() => {
    return Array.from(Array(pages), (_, index) => index + 1);
  }, [pages]);

  const handlerProductsPagination = (page: number) => {
    setCurrentPage(page);
  };

  const couldGoBack = currentPage > 1;
  const couldGoForward = currentPage < pages;

  return (
    <div>
      <Button
        onClick={() => handlerProductsPagination(currentPage - 1)}
        disabled={!couldGoBack}
      >
        Previous
      </Button>
      <div>
        {totalPages.map((page) => (
          <Button
            key={page}
            onClickCapture={(e) =>
              setCurrentPage(Number((e.target as HTMLInputElement).value))
            }
            disabled={currentPage === page}
            onClick={() => handlerProductsPagination(page)}
          >
            {page}
          </Button>
        ))}
      </div>
      <Button
        onClick={() => handlerProductsPagination(currentPage + 1)}
        disabled={!couldGoForward}
      >
        Next
      </Button>
    </div>
  );
};
