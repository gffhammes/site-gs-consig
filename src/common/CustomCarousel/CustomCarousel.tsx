"use client";

import { Box, Stack, SxProps, styled } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import {
  ReactElement,
  ReactNode,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { EmblaOptionsType } from "embla-carousel";
import { CustomCarouselDots } from "./CustomCarouselDots";

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
  showDots?: boolean;
}

export const CustomCarousel = <T,>({
  dataSet,
  getSlide,
  slideGap,
  alignSlides,
  carouselSx,
  slides,
  options,
  showDots,
}: ICustomCarouselProps & TCustomCarouselSlideApproach<T>) => {
  const [emblaRef, embla] = useEmblaCarousel(options);
  const [currentIndex, setCurrentIndex] = useState(options?.startIndex ?? 0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

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

  // const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  // const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );
  const onSelect = useCallback(() => {
    if (!embla) return;
    setCurrentIndex(embla.selectedScrollSnap());
    // setPrevBtnEnabled(embla.canScrollPrev());
    // setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <Stack alignItems="center" gap={4}>
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

      {showDots && (
        <CustomCarouselDots
          currentIndex={currentIndex}
          dots={scrollSnaps}
          handleDotClick={(index) => scrollTo(index)}
        />
      )}
    </Stack>
  );
};

const Embla = styled(Box)({ overflow: "hidden", maxWidth: "100%" });
