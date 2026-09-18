import { api } from "./axios.js";

export const PRODUCTS_PER_PAGE = 12;
export async function getProducts({
  page = 1,
  search = "",
  limit = PRODUCTS_PER_PAGE,
  signal,
} = {}) {
  const term = search.trim();
  const params = { limit, skip: (page - 1) * limit };

  if (term) {
    params.q = term;
  }

  const { data } = await api.get(term ? "/products/search" : "/products", {
    params,
    signal,
  });

  return data; 
}


export async function getProductById(id, signal) {
  const { data } = await api.get(`/products/${id}`, { signal });
  return data;
}
