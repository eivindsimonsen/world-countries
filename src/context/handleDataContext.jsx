import { createContext, useState, useContext } from "react";

const dataContext = createContext();

export const DataProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterCategory, setFilterCategory] = useState(""); // Default value

  return <dataContext.Provider value={{ searchValue, setSearchValue, filterCategory, setFilterCategory }}>{children}</dataContext.Provider>;
};

export const useDataHandler = () => {
  const context = useContext(dataContext);
  if (!context) {
    throw new Error("Must be used within a DataProvider");
  }
  return context;
};
