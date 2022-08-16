import { createContext, useState } from "react";

const PageContext = createContext();

export function PageProvider({ children }) {
  const [page, setPage] = useState(1);

  const changePage = (currPage) => {
    setPage(currPage);
  };

  return (
    <PageContext.Provider value={{ page, changePage }}>
      {children}
    </PageContext.Provider>
  );
}

export default PageContext;
