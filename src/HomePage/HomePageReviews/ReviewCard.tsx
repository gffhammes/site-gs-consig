import { Avatar, Box, Paper, Rating, Stack, Typography } from "@mui/material";
import { IReview } from "./HomePageReviews";
import { useState } from "react";

export interface IReviewCardProps {
  review: IReview;
}

export const ReviewCard = ({ review }: IReviewCardProps) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleShowFullText = () => setShowFullText(true);

  return (
    <Paper variant="outlined" sx={{ p: 2, width: "20rem" }}>
      <Stack>
        <Typography fontSize={64} color="primary">
          "
        </Typography>

        <Typography>{review.text}</Typography>

        <Stack direction="row">
          <Avatar src={review.avatar}>{review.name.slice(0, 1)}</Avatar>

          <Stack>
            <Typography fontWeight="bold">{review.name}</Typography>

            <Rating value={review.stars} readOnly />
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );

  return (
    <Box
      display="grid"
      gridTemplateAreas={`
  "avatar name"
  "avatar rating"
  "none   review"
`}
      gridTemplateColumns="min-content auto"
      gridTemplateRows="auto auto auto"
      columnGap={1}
    >
      <Box sx={{ gridArea: "avatar" }}>
        <Avatar src={review.avatar}>{review.name.slice(0, 1)}</Avatar>
      </Box>

      <Box sx={{ gridArea: "name" }}>
        <Typography fontWeight="bold">{review.name}</Typography>
      </Box>

      <Box sx={{ gridArea: "rating" }}>
        <Rating value={review.stars} readOnly />
      </Box>

      <Box sx={{ gridArea: "review", pt: 1 }}>
        <Typography
          whiteSpace="pre-wrap"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: ".......",
            WebkitLineClamp: showFullText ? "unset" : 3,
          }}
        >
          {review.text}
        </Typography>

        {!showFullText && (
          <Typography
            onClick={handleShowFullText}
            fontSize={12}
            color="primary.main"
            sx={{
              textTransform: "uppercase",
              textDecoration: "underline",
              cursor: "pointer",
              width: "fit-content",
              mt: 1,
            }}
          >
            ler tudo
          </Typography>
        )}
      </Box>
    </Box>
  );
};
