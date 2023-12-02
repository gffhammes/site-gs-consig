import { Box, Stack } from "@mui/material";

export interface ICustomCarouselDotsProps {
  dots: any[];
  currentIndex: number;
  handleDotClick: (index: number) => void;
}

export const CustomCarouselDots = ({
  dots,
  currentIndex,
  handleDotClick,
}: ICustomCarouselDotsProps) => {
  return (
    <Stack direction="row" gap={2}>
      {dots.map((dot, index) => {
        const isSelected = currentIndex === index;

        return (
          <Box
            onClick={() => handleDotClick(index)}
            key={index}
            sx={{
              height: ".5rem",
              width: ".5rem",
              borderRadius: 100,
              transition: ".3s ease all",
              backgroundColor: isSelected ? "primary.main" : "#cfcfcf",
              cursor: "pointer",
            }}
          />
        );
      })}
    </Stack>
  );
};
