import { HomePageBanner } from "@/src/HomePage/HomePageBanner";
import { HomePageBenefits } from "@/src/HomePage/HomePageBenefits/HomePageBenefits";
import { HomePageEmployees } from "@/src/HomePage/HomePageEmployees/HomePageEmployees";
import { HomePageReviews } from "@/src/HomePage/HomePageReviews/HomePageReviews";
import { HomePageServices } from "@/src/HomePage/HomePageServices/HomePageServices";
import { HomePageStepByStep } from "@/src/HomePage/HomePageStepByStep/HomePageStepByStep";
import { BanksSection } from "@/src/common/BanksSection/BanksSection";
import { InterestRateSection } from "@/src/common/InterestRateSection/InterestRateSection";
import { Stack } from "@mui/material";

export default async function Home() {
  return (
    <main>
      <Stack gap={{ xs: 16, md: 20 }} sx={{ pt: { xs: 4, sm: 8 }, pb: 16 }}>
        <HomePageBanner />

        <HomePageServices />

        <HomePageBenefits />

        {/* <HomePageReviews /> */}

        <InterestRateSection />

        <HomePageEmployees />

        <HomePageStepByStep />

        <BanksSection />
      </Stack>
    </main>
  );
}
