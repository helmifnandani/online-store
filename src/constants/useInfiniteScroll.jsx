import { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import debounce from "lodash/debounce";

function useInfiniteScroll(
  collection,
  isCategoryParent,
  selectedCategory,
  isBottomBody,
  setIsBottomBody,
) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isLoadedAll, setIsLoadedAll] = useState(false);
  const [selectedSort, setSelectedSort] = useState("newest");

  const fetchProducts = useCallback(async () => {
    if (isLoadingMore || isLoadedAll || !selectedCategory) return;

    if (page > 1) {
      setIsLoadingMore(true);
    }

    let category_url = isCategoryParent
      ? `products-category-parent`
      : "products-category";
    let api_url = `${import.meta.env.VITE_API_URL}/api/${category_url}/${collection}?page=${page}`;

    if (collection === "all") {
      api_url = `${import.meta.env.VITE_API_URL}/api/products?page=${page}`;
    }

    try {
      const response = await axios.get(api_url);
      if (response.data.products.length > 0) {
        setProducts((prevProducts) => [
          ...prevProducts,
          ...response.data.products,
        ]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setIsLoadedAll(true);
      }
    } catch (error) {
      console.error("Failed to load products:", error);
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
      setIsBottomBody(false);
    }
  }, [
    page,
    collection,
    isCategoryParent,
    selectedCategory,
    isLoadingMore,
    isLoadedAll,
    setIsBottomBody,
  ]);

  const debouncedFetchProducts = useCallback(debounce(fetchProducts, 200), [
    fetchProducts,
  ]);

  useEffect(() => {
    setProducts([]);
    setPage(1);
    setIsLoadedAll(false);
    setIsLoading(true);
    setIsLoadingMore(false);
    debouncedFetchProducts();
  }, [collection, isCategoryParent, selectedCategory]);

  useEffect(() => {
    if (isBottomBody && !isLoading && !isLoadingMore && !isLoadedAll) {
      debouncedFetchProducts();
    }
  }, [
    isBottomBody,
    isLoading,
    isLoadingMore,
    isLoadedAll,
    debouncedFetchProducts,
  ]);

  const sortedProducts = useMemo(() => {
    let sorted = [...products];
    switch (selectedSort) {
      case "newest":
        return sorted.sort(
          (a, b) => new Date(b.createddate) - new Date(a.createddate),
        );
      case "oldest":
        return sorted.sort(
          (a, b) => new Date(a.createddate) - new Date(b.createddate),
        );
      case "cheap":
        return sorted.sort((a, b) => a.price - b.price);
      case "expensive":
        return sorted.sort((a, b) => b.price - a.price);
      default:
        return sorted;
    }
  }, [products, selectedSort]);

  const handleSort = (sortType) => {
    setSelectedSort(sortType);
  };

  return {
    products: sortedProducts,
    isLoading,
    isLoadingMore,
    isLoadedAll,
    handleSort,
    selectedSort,
    currentPage: page,
  };
}

export default useInfiniteScroll;
