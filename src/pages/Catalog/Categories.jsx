import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "../../assets/images/ExpandMoreIcon";

const Categories = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <Box component="section" pb={13}>
      <Accordion
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
        sx={{
          "&.MuiPaper-root ": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
          "& .MuiButtonBase-root": {
            backgroundColor: "#F5F5F5",
            borderRadius: "8px",
            minHeight: "0!important",
            m: "0!important",
          },
          "& .MuiAccordionSummary-content": {
            m: "0!important",
            p: "9px 15px",
          },
          "& .MuiAccordion-root::before": { display: "none" },
          "& .MuiFormGroup-root ": {
            ml: "15px",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Категории
        </AccordionSummary>
        <AccordionDetails>
          <Accordion
            sx={{
              "&.MuiPaper-root ": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
              "& .MuiButtonBase-root": {
                backgroundColor: "transparent",
                borderRadius: "8px",
                minHeight: "0!important",
                m: "0!important",
              },
              "& .MuiAccordionSummary-content": {
                m: "0!important",
                p: "9px 15px",
              },

              "& .MuiTypography-body1": {
                fontSize: 15,
                fontWeight: 400,
                color: "#626262",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Ингредиенты
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад белый"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад горький"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад молочный"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад со вкусом"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              "&.MuiPaper-root ": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
              "& .MuiButtonBase-root": {
                backgroundColor: "transparent",
                borderRadius: "8px",
                minHeight: "0!important",
                m: "0!important",
              },
              "& .MuiAccordionSummary-content": {
                m: "0!important",
                p: "9px 15px",
              },

              "& .MuiTypography-body1": {
                fontSize: 15,
                fontWeight: 400,
                color: "#626262",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Глазури и покрытия
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад белый"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад горький"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад молочный"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад со вкусом"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              "&.MuiPaper-root ": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
              "& .MuiButtonBase-root": {
                backgroundColor: "transparent",
                borderRadius: "8px",
                minHeight: "0!important",
                m: "0!important",
              },
              "& .MuiAccordionSummary-content": {
                m: "0!important",
                p: "9px 15px",
              },

              "& .MuiTypography-body1": {
                fontSize: 15,
                fontWeight: 400,
                color: "#626262",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Начинки
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад белый"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад горький"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад молочный"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад со вкусом"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              "&.MuiPaper-root ": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
              "& .MuiButtonBase-root": {
                backgroundColor: "transparent",
                borderRadius: "8px",
                minHeight: "0!important",
                m: "0!important",
              },
              "& .MuiAccordionSummary-content": {
                m: "0!important",
                p: "9px 15px",
              },

              "& .MuiTypography-body1": {
                fontSize: 15,
                fontWeight: 400,
                color: "#626262",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Добавки и загустители
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад белый"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад горький"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад молочный"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад со вкусом"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              "&.MuiPaper-root ": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
              "& .MuiButtonBase-root": {
                backgroundColor: "transparent",
                borderRadius: "8px",
                minHeight: "0!important",
                m: "0!important",
              },
              "& .MuiAccordionSummary-content": {
                m: "0!important",
                p: "9px 15px",
              },

              "& .MuiTypography-body1": {
                fontSize: 15,
                fontWeight: 400,
                color: "#626262",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Красители
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад белый"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад горький"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад молочный"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад со вкусом"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              "&.MuiPaper-root ": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
              "& .MuiButtonBase-root": {
                backgroundColor: "transparent",
                borderRadius: "8px",
                minHeight: "0!important",
                m: "0!important",
              },
              "& .MuiAccordionSummary-content": {
                m: "0!important",
                p: "9px 15px",
              },

              "& .MuiTypography-body1": {
                fontSize: 15,
                fontWeight: 400,
                color: "#626262",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Инструменты для кондитерского дела
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад белый"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад горький"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад молочный"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад со вкусом"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              "&.MuiPaper-root ": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
              "& .MuiButtonBase-root": {
                backgroundColor: "transparent",
                borderRadius: "8px",
                minHeight: "0!important",
                m: "0!important",
              },
              "& .MuiAccordionSummary-content": {
                m: "0!important",
                p: "9px 15px",
              },

              "& .MuiTypography-body1": {
                fontSize: 15,
                fontWeight: 400,
                color: "#626262",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Упаковка и оформление
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад белый"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад горький"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад молочный"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад со вкусом"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              "&.MuiPaper-root ": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
              "& .MuiButtonBase-root": {
                backgroundColor: "transparent",
                borderRadius: "8px",
                minHeight: "0!important",
                m: "0!important",
              },
              "& .MuiAccordionSummary-content": {
                m: "0!important",
                p: "9px 15px",
              },

              "& .MuiTypography-body1": {
                fontSize: 15,
                fontWeight: 400,
                color: "#626262",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Топпинги и сиропы
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад белый"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад горький"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад молочный"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад со вкусом"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              "&.MuiPaper-root ": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
              "& .MuiButtonBase-root": {
                backgroundColor: "transparent",
                borderRadius: "8px",
                minHeight: "0!important",
                m: "0!important",
              },
              "& .MuiAccordionSummary-content": {
                m: "0!important",
                p: "9px 15px",
              },

              "& .MuiTypography-body1": {
                fontSize: 15,
                fontWeight: 400,
                color: "#626262",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Мастика и покрытия
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад белый"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад горький"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад молочный"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад со вкусом"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              "&.MuiPaper-root ": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
              "& .MuiButtonBase-root": {
                backgroundColor: "transparent",
                borderRadius: "8px",
                minHeight: "0!important",
                m: "0!important",
              },
              "& .MuiAccordionSummary-content": {
                m: "0!important",
                p: "9px 15px",
              },

              "& .MuiTypography-body1": {
                fontSize: 15,
                fontWeight: 400,
                color: "#626262",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Дополнительные продукты
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад белый"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад горький"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад молочный"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад со вкусом"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              "&.MuiPaper-root ": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
              "& .MuiButtonBase-root": {
                backgroundColor: "transparent",
                borderRadius: "8px",
                minHeight: "0!important",
                m: "0!important",
              },
              "& .MuiAccordionSummary-content": {
                m: "0!important",
                p: "9px 15px",
              },

              "& .MuiTypography-body1": {
                fontSize: 15,
                fontWeight: 400,
                color: "#626262",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Начинки
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад белый"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад горький"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад молочный"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Шоколад со вкусом"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Categories;
