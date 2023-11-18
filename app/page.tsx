import { HomePageBanner } from "@/src/HomePage/HomePageBanner";
import { HomePageBenefits } from "@/src/HomePage/HomePageBenefits/HomePageBenefits";
import { HomePageEmployees } from "@/src/HomePage/HomePageEmployees/HomePageEmployees";
import { HomePageReviews } from "@/src/HomePage/HomePageReviews/HomePageReviews";
import { HomePageServices } from "@/src/HomePage/HomePageServices/HomePageServices";
import { HomePageStepByStep } from "@/src/HomePage/HomePageStepByStep/HomePageStepByStep";
import { InterestRateSection } from "@/src/common/InterestRateSection/InterestRateSection";
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

      <Stack gap={{ xs: 16, md: 20 }} sx={{ py: 16 }}>
        <HomePageServices />

        <HomePageBenefits />

        <HomePageReviews />

        <InterestRateSection />

        <HomePageEmployees />

        <HomePageStepByStep />

        {/* delete */}

        <HomePageServices />

        <HomePageBenefits />

        <HomePageReviews />

        <InterestRateSection />

        <HomePageEmployees />
      </Stack>
    </main>
  );
}
