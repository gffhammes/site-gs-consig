import { CustomImage } from "../CustomImage";

export interface IPageBannerImageProps {
  imageSrc: string;
}

export const PageBannerImage = ({ imageSrc }: IPageBannerImageProps) => {
  return (
    <CustomImage
      src={imageSrc}
      height="20rem"
      width="100%"
      alt="Banner"
      objectFit="cover"
      objectPosition="center right"
    />
  );
};
