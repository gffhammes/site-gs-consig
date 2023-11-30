"use client";

import { Box, Stack, SxProps, styled } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { ReactElement, ReactNode, cloneElement, useMemo } from "react";
import { EmblaOptionsType } from "embla-carousel";

interface ICustomCarouselWithDataSet<T> {
  dataSet: T[];
  getSlide: (slideData: T, index: number) => ReactElement;
  slides?: never;
}

interface ICustomCarouselWithSlidesNodes {
  dataSet?: never;
  getSlide?: never;
  slides: ReactNode[];
}

type TCustomCarouselSlideApproach<T> =
  | ICustomCarouselWithDataSet<T>
  | ICustomCarouselWithSlidesNodes;

export interface ICustomCarouselProps {
  slideGap?: number;
  alignSlides?: "center" | "flex-start";
  carouselSx?: SxProps;
  options?: EmblaOptionsType;
}

export const CustomCarousel = <T,>({
  dataSet,
  getSlide,
  slideGap,
  alignSlides,
  carouselSx,
  slides,
  options,
}: ICustomCarouselProps & TCustomCarouselSlideApproach<T>) => {
  const [emblaRef] = useEmblaCarousel(options);

  const slidesMemo = useMemo(() => {
    if (slides) {
      return slides;
    }

    return dataSet.map((slide, index) => {
      const slideElement = getSlide(slide, index);

      const slideElementWithKey = cloneElement(slideElement, {
        key: index,
      });

      return slideElementWithKey;
    });
  }, [dataSet, getSlide, slides]);

  return (
    <Embla className="embla" ref={emblaRef}>
      <Stack
        className="embla__container"
        direction="row"
        justifyContent={alignSlides}
        gap={slideGap}
        sx={{ ...carouselSx }}
      >
        {slidesMemo}
      </Stack>
    </Embla>
  );
};

const Embla = styled(Box)({ overflow: "hidden", maxWidth: "100%" });
