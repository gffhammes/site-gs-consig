import { HomePageBanner2 } from "@/src/HomePage/HomePageBanner2";
import { HomePageBenefits } from "@/src/HomePage/HomePageBenefits/HomePageBenefits";
import { HomePageEmployees } from "@/src/HomePage/HomePageEmployees/HomePageEmployees";
import { HomePageReviews } from "@/src/HomePage/HomePageReviews/HomePageReviews";
import { HomePageServices } from "@/src/HomePage/HomePageServices/HomePageServices";
import { HomePageStepByStep } from "@/src/HomePage/HomePageStepByStep/HomePageStepByStep";
import { ServiceSimulator } from "@/src/Services/ServiceSimulator";
import { BanksSection } from "@/src/common/BanksSection/BanksSection";
import { CTABanner } from "@/src/common/CTABanner/CTABanner";
import { InterestRateSection } from "@/src/common/InterestRateSection/InterestRateSection";
import { Stack } from "@mui/material";

export default async function Home() {
  return (
    <main>
      <Stack gap={{ xs: 16, md: 20 }} sx={{ pb: 16 }}>
        <HomePageBanner2 />

        <HomePageEmployees />

        <Stack>
          <HomePageBenefits />

          <CTABanner />

          <HomePageReviews />
        </Stack>

        <InterestRateSection />

        <Stack>
          <HomePageStepByStep />

          <ServiceSimulator product="serviço" />
        </Stack>

        <BanksSection />
      </Stack>
    </main>
  );
}
