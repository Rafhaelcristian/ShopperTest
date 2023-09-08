import { createContext, useState, useContext } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export interface IProductContext {
  loading: boolean;
  validateProducts: (formData: FormData) => Promise<void>;
  products: Products[] | null;
}
export interface Products {
  lineNumber?: number;
  product_code?: number;
  name?: string;
  sales_price?: number;
  new_price?: number;
  hasError?: boolean;
  errorMessages?: string[];
}

export interface IProductProviderProps {
  children: React.ReactNode;
}

export const ProductContext = createContext({} as IProductContext);

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }: IProductProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<null | Products[]>(null);

  const validateProducts = async (formData: FormData) => {
    try {
      setLoading(true);
      const response = await api.post("/editprice", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Dados processados:", {
        autoClose: 1000,
      });
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao enviar arquivo", error);
      toast.error("Erro ao enviar arquivo", {
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
    }
  };

  const contextValue: IProductContext = {
    loading,
    validateProducts,
    products,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
