import { Stack, SxProps, Typography } from "@mui/material";
import { ReactElement, cloneElement } from "react";

export interface IFooterCustomMenuProps<T> {
  title: string;
  itemsData: T[];
  getItem: (data: T) => ReactElement;
  sx?: SxProps;
}

export const FooterCustomMenu = <T,>({
  title,
  getItem,
  itemsData,
  sx,
}: IFooterCustomMenuProps<T>) => {
  return (
    <Stack gap={3} sx={sx}>
      <Typography fontWeight="bold">{title}</Typography>

      <Stack gap={2}>
        {itemsData.map((item, index) => {
          const itemElement = getItem(item);

          const itemElementWithKey = cloneElement(itemElement, {
            key: index,
          });

          return itemElementWithKey;
        })}
      </Stack>
    </Stack>
  );
};
