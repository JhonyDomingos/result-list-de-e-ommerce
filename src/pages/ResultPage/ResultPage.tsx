import { Pagination } from "../../components/ResultList/Pagination/Pagination";
import { ResultList } from "../../components/ResultList/ResultList";

export const ResultPage = () => {
  return (
    <div className="container">
      <main>
        <ResultList />
        <Pagination />
      </main>
    </div>
  );
};
