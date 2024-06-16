import { Pagination } from "../../components/ResultList/Pagination/Pagination";
import { ResultList } from "../../components/ResultList/ResultList";
import { ShopSection } from "../../components/ShopSection/ShopSection";

export const ResultPage = () => {
  return (
    <div className="container">
      <main>
        <ShopSection />

        <ResultList />
        <Pagination />
      </main>
    </div>
  );
};
