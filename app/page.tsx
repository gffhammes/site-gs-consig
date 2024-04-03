import { HomePageBanner } from "@/src/PagesComponents/HomePage/HomePageBanner";
import { HomePageBenefits } from "@/src/PagesComponents/HomePage/HomePageBenefits/HomePageBenefits";
import { HomePageEmployees } from "@/src/PagesComponents/HomePage/HomePageEmployees/HomePageEmployees";
import { HomePageReviews } from "@/src/PagesComponents/HomePage/HomePageReviews/HomePageReviews";
import { HomePageStepByStep } from "@/src/PagesComponents/HomePage/HomePageStepByStep/HomePageStepByStep";
import { ServicesButtons } from "@/src/PagesComponents/HomePage/ServicesButtons";
import { ServiceSimulator } from "@/src/Services/ServiceSimulator";
import { BanksSection } from "@/src/common/BanksSection/BanksSection";
import { CTABanner } from "@/src/common/CTABanner/CTABanner";
import { InterestRateSection } from "@/src/common/InterestRateSection/InterestRateSection";
import { Stack } from "@mui/material";

export default async function Home() {
  return (
    <main>
      <Stack gap={{ xs: 16, md: 20 }} sx={{ pb: { xs: 0, lg: 16 } }}>
        <Stack>
          <HomePageBanner />

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
