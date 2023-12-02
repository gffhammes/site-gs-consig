import { TwoImagesOverlay } from "@/src/common/CustomImageLayout/TwoImagesOverlay";

export interface IHomePageServicesImagesProps {}

export const HomePageServicesImages = () => {
  return (
    <TwoImagesOverlay
      image1Src="https://picsum.photos/1001"
      image2Src="https://picsum.photos/1000"
    />
  );
};
