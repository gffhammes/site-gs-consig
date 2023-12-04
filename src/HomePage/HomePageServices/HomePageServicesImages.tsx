import { TwoImagesOverlay } from "@/src/common/CustomImageLayout/TwoImagesOverlay";

export interface IHomePageServicesImagesProps {}

export const HomePageServicesImages = () => {
  return (
    <TwoImagesOverlay
      image1Src="/celular-para-idoso.jpg"
      image2Src="/idoso-celular-jovem.webp"
    />
  );
};
