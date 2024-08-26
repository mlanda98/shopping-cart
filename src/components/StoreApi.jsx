const url = "https://fakestoreapi.com/products";

export const fetchStoreItems = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error){
    console.error("Failed to fetch items:", error);
    return [];
  }
}