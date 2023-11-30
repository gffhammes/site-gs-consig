import { ServicesPageList } from "@/src/ServicesPage/ServicesPageList";
import { ServicesPageTitle } from "@/src/ServicesPage/ServicesPageTitle";
import { BanksSection } from "@/src/common/BanksSection/BanksSection";
import { InterestRateSection } from "@/src/common/InterestRateSection/InterestRateSection";
import { Stack } from "@mui/material";

export default function Produtos() {
  return (
    <Stack gap={{ xs: 16, md: 20 }} sx={{ pt: 4, pb: 16 }}>
      <Stack gap={{ xs: 8, sm: 16 }}>
        <ServicesPageTitle />

        <ServicesPageList />
      </Stack>

      <InterestRateSection />

      <BanksSection />
    </Stack>
  );
}
