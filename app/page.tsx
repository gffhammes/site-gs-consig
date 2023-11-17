import { HomePageBanner } from "@/src/HomePage/HomePageBanner";
import { HomePageBenefits } from "@/src/HomePage/HomePageBenefits/HomePageBenefits";
import { HomePageServices } from "@/src/HomePage/HomePageServices/HomePageServices";
import { getDataFromServer } from "@/src/utils/services";
import { Stack } from "@mui/material";
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

      <Stack gap={16} sx={{ py: 16 }}>
        <HomePageServices />

        <HomePageBenefits />
      </Stack>
    </main>
  );
}
