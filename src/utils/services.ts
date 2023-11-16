export const getDataFromServer = async (apiUrl: string, query?: string) => {
  const url =
    "https://strapi-gs-consig.onrender.com/api" + apiUrl + "?" + query;

  const res = await fetch(url);

  const data = await res.json();

  return data.data.attributes;
};
