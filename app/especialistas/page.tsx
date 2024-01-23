import { EmployeesFilterAndList } from "@/src/EmployeesPage/EmployeesFilterAndList";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Especialistas | GS Consig",
  description:
    "Conheça nossa equipe de especialistas dedicados a oferecer as melhores soluções financeiras em Balneário Camboriú. Com experiência sólida e compromisso, nossos profissionais estão prontos para ajudar a encontrar o crédito ideal para suas necessidades. Conte com a expertise de nossa equipe - estamos aqui para simplificar e guiar você em cada passo. Descubra como nossos especialistas podem fazer a diferença em sua jornada financeira!",
};

export default function Especialistas() {
  return (
    <Stack gap={{ xs: 2, md: 2 }} sx={{ pt: 4, pb: 16 }}>
      <EmployeesFilterAndList />
    </Stack>
  );
}
