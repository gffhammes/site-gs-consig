"use client";

import { Box, Stack, styled } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { ReactElement, cloneElement } from "react";

export interface ICustomCarouselProps<T> {
  dataSet: T[];
  getSlide: (slideData: T) => ReactElement;
  slideGap?: number;
  alignSlides?: "center" | "flex-start";
}

export const CustomCarousel = <T,>({
  dataSet,
  getSlide,
  slideGap,
  alignSlides,
}: ICustomCarouselProps<T>) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <Embla className="embla" ref={emblaRef}>
      <Stack
        className="embla__container"
        direction="row"
        justifyContent={alignSlides}
        gap={slideGap}
      >
        {dataSet.map((slide, index) => {
          const slideElement = getSlide(slide);

          const slideElementWithKey = cloneElement(slideElement, {
            key: index,
          });

          return slideElementWithKey;
        })}
      </Stack>
    </Embla>
  );
};

const Embla = styled(Box)({ overflow: "hidden" });
