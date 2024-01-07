"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export interface IFaqItem {
  question: string;
  answer: string;
}

export interface IFaqAccordionProps {
  items: IFaqItem[];
}

export const FaqAccordion = ({ items }: IFaqAccordionProps) => {
  const [expanded, setExpanded] = useState(-1);

  const hasSomeItemExpanded = expanded !== -1;

  return (
    <div>
      {items.map((item, index) => {
        const isExpanded = expanded === index;

        return (
          <Accordion
            key={index}
            expanded={isExpanded}
            onChange={(e, expanded) => {
              if (expanded) {
                setExpanded(index);
              } else {
                setExpanded(-1);
              }
            }}
            sx={{
              opacity: hasSomeItemExpanded && !isExpanded ? 0.5 : 1,
              transition: ".2s ease all",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                fontWeight={isExpanded ? "bold" : "normal"}
                sx={{
                  transition: ".2s ease all",
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
