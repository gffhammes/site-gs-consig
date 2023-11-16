import { HomePageBanner } from "@/src/HomePage/HomePageBanner";
import { HomePageServices } from "@/src/HomePage/HomePageServices/HomePageServices";
import { getDataFromServer } from "@/src/utils/services";
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

  return getDataFromServer("/home", query);
};

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <HomePageBanner banners={data.banner} />

      <HomePageServices />
    </main>
  );
}
