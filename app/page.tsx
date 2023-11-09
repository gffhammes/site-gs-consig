import { Banner } from "@/src/HomePage/Banner";
import * as qs from "qs";

const getData = async () => {
  const query = qs.stringify(
    {
      populate: ["banner", "banner.foto", "banner.botao"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const url = "https://strapi-gs-consig.onrender.com/api/home" + "?" + query;

  const res = await fetch(url);

  const data = await res.json();

  return data.data.attributes;
};

export default async function Home() {
  const teste = await getData();

  return (
    <main>
      <Banner banners={teste.banner} />
    </main>
  );
}
