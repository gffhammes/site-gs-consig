import { Avatar, Box, Paper, Rating, Stack, Typography } from "@mui/material";
import { IReview } from "./HomePageReviews";
import { useState } from "react";
import { CustomImage } from "@/src/common/CustomImage";

export interface IReviewCardProps {
  review: IReview;
}

export const ReviewCard = ({ review }: IReviewCardProps) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleShowFullText = () => setShowFullText(true);

  return (
    <Paper variant="outlined" sx={{ p: 4, borderRadius: 4, flex: "0 0 27rem" }}>
      <Stack height="100%" gap={4}>
        <Stack gap={2} flexGrow={1}>
          <CustomImage
            src="/aspas.png"
            alt="aspas"
            height="3rem"
            width="3rem"
          />

          <Typography whiteSpace="pre-wrap">{review.text}</Typography>
        </Stack>

        <Stack direction="row" gap={1} justifyContent="space-between">
          <Stack gap={1}>
            <Typography fontWeight="bold">{review.name}</Typography>

            <Rating value={review.stars} readOnly />
          </Stack>

          <Avatar sx={{ height: "3rem", width: "3rem" }} src={review.avatar}>
            {review.name.slice(0, 1)}
          </Avatar>
        </Stack>
      </Stack>
    </Paper>
  );
};
