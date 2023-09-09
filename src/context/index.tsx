import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export interface IProductContext {
  loading: boolean;
  validateProducts: (formData: FormData) => Promise<void>;
  products: IProducts[] | null;
  validated: boolean;
  editProducts: (formData: IProducts[]) => Promise<void>;
}
export interface IProducts {
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
  const [products, setProducts] = useState<null | IProducts[]>(null);
  const [validated, setValidated] = useState(false);
  console.log(validated);

  useEffect(() => {
    const validation = products?.find((product) => product.hasError);

    if (validation) {
      setValidated(false);
    } else {
      setValidated(true);
    }
  }, [products]);

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
    } catch (error) {
      const currentError = error as AxiosError<string>;
      console.error("Erro ao enviar arquivo", currentError.response?.data);
      toast.error("Erro ao enviar arquivo", {
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
    }
  };

  const editProducts = async (formData: IProducts[]) => {
    try {
      await api.patch("/editprice", formData);
      toast.success("Atualização realizada com sucesso!", {
        autoClose: 1000,
      });
      setProducts(null);
    } catch (error) {
      const currentError = error as AxiosError<string>;
      console.error("erro ao atualizar produtos", currentError.response?.data);
      toast.error("erro ao atualizar produtos", {
        autoClose: 1000,
      });
    }
  };

  const contextValue: IProductContext = {
    loading,
    validateProducts,
    products,
    validated,
    editProducts,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
