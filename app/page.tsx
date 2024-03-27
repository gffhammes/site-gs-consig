import { HomePageBanner2 } from "@/src/pages/HomePage/HomePageBanner2";
import { HomePageBenefits } from "@/src/pages/HomePage/HomePageBenefits/HomePageBenefits";
import { HomePageEmployees } from "@/src/pages/HomePage/HomePageEmployees/HomePageEmployees";
import { HomePageReviews } from "@/src/pages/HomePage/HomePageReviews/HomePageReviews";
import { HomePageServices } from "@/src/pages/HomePage/HomePageServices/HomePageServices";
import { HomePageStepByStep } from "@/src/pages/HomePage/HomePageStepByStep/HomePageStepByStep";
import { ServicesButtons } from "@/src/pages/HomePage/ServicesButtons";
import { ServiceSimulator } from "@/src/Services/ServiceSimulator";
import { BanksSection } from "@/src/common/BanksSection/BanksSection";
import { CTABanner } from "@/src/common/CTABanner/CTABanner";
import { InterestRateSection } from "@/src/common/InterestRateSection/InterestRateSection";
import { Stack } from "@mui/material";

export default async function Home() {
  return (
    <main>
      <Stack gap={{ xs: 16, md: 20 }} sx={{ pb: 16 }}>
        <Stack>
          <HomePageBanner2 />

          <Stack gap={8}>
            <ServicesButtons />

            <HomePageEmployees />
          </Stack>
        </Stack>

        <Stack>
          <HomePageBenefits />

          <CTABanner />
        </Stack>

        <HomePageReviews />

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
