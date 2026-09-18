import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProductById, getProducts } from "../api/products.api.js";

export const productKeys = {
  list: (params) => ["products", "list", params],
  detail: (id) => ["products", "detail", String(id)],
};

export function useProducts({ page, search }) {
  return useQuery({
    queryKey: productKeys.list({ page, search }),
    queryFn: ({ signal }) => getProducts({ page, search, signal }),
    placeholderData: keepPreviousData,
  });
}

export function useProduct(id) {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: ({ signal }) => getProductById(id, signal),
    
    retry: (failureCount, error) =>
      error?.response?.status !== 404 && failureCount < 2,
  });
}
