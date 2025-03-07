import { createContext, useContext, useState } from 'react';

const BoxContext = createContext();
export const useBoxes = () => useContext(BoxContext);

export const ShippingBoxProvider = ({ children }) => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    setBoxes([...boxes, box]);
  };

  return (
    <BoxContext.Provider value={{ boxes, addBox }}>
      {children}
    </BoxContext.Provider>
  );
};
