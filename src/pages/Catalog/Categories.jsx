import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "../../assets/images/ExpandMoreIcon";
import { getCategories } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/reducers/products";

const Categories = ({ setChip, formik }) => {
  const dispatch = useDispatch();
  const md = useMediaQuery("(min-width:900px)");

  const [expanded, setExpanded] = useState(true);

  const categories = useSelector((state) => state.main.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Box component="section" pb={13}>
      {md ? (
        <Accordion
          expanded={expanded}
          onChange={() => setExpanded(!expanded)}
          className="sans"
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
            "& .MuiAccordionSummary-contentGutters": {
              fontFamily: "Open Sans",
              fontSize: 16,
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
          <AccordionDetails
            sx={{
              "& .MuiButtonBase-root ": {
                backgroundColor: "transparent!important",
                boxShadow: "none",
              },
            }}
          >
            <RadioGroup
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
            >
              {Array.isArray(categories) &&
                categories.map((item, idx) => (
                  <FormControlLabel
                    key={idx}
                    sx={{
                      "& .MuiTypography-root": {
                        fontFamily: "Open Sans",
                        color: "#626262",
                      },
                    }}
                    onChange={() => {
                      setChip(item.name);
                      dispatch(
                        getProducts(
                          `https://foodlandtest.com/v1/products?limit=12&page=1&category=${item.id}`
                        )
                      );
                    }}
                    value={item.id}
                    control={<Radio />}
                    label={item.name}
                  />
                  // <Accordion
                  //   key={idx}
                  //   sx={{
                  //     "&.MuiPaper-root ": {
                  //       backgroundColor: "transparent",
                  //       boxShadow: "none",
                  //     },
                  //     "& .MuiButtonBase-root": {
                  //       backgroundColor: "transparent",
                  //       borderRadius: "8px",
                  //       minHeight: "0!important",
                  //       m: "0!important",
                  //     },
                  //     "& .MuiAccordionSummary-content": {
                  //       m: "0!important",
                  //       p: "9px 15px",
                  //     },

                  //     "& .MuiTypography-body1": {
                  //       fontSize: 15,
                  //       fontWeight: 400,
                  //       color: "#626262",
                  //     },
                  //   }}
                  // >
                  //   <AccordionSummary
                  //     expandIcon={<ExpandMoreIcon />}
                  //     aria-controls="panel1-content"
                  //     id="panel1-header"
                  //   >
                  //     {item.name}
                  //   </AccordionSummary>
                  //   <AccordionDetails>
                  //     <FormGroup>
                  //       <FormControlLabel
                  //         control={<Checkbox />}
                  //         label="Шоколад белый"
                  //       />
                  //       <FormControlLabel
                  //         control={<Checkbox />}
                  //         label="Шоколад горький"
                  //       />
                  //       <FormControlLabel
                  //         control={<Checkbox />}
                  //         label="Шоколад молочный"
                  //       />
                  //       <FormControlLabel
                  //         control={<Checkbox />}
                  //         label="Шоколад со вкусом"
                  //       />
                  //     </FormGroup>
                  //   </AccordionDetails>
                  // </Accordion>
                ))}
            </RadioGroup>
          </AccordionDetails>
        </Accordion>
      ) : (
        <RadioGroup
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
        >
          {Array.isArray(categories) &&
            categories.map((item, idx) => (
              <FormControlLabel
                key={idx}
                sx={{
                  "& .MuiTypography-root": {
                    fontFamily: "Open Sans",
                    color: "#626262",
                  },
                }}
                onChange={() => {
                  setChip(item.name);
                  dispatch(
                    getProducts(
                      `https://foodlandtest.com/v1/products?limit=12&page=1&category=${item.id}`
                    )
                  );
                }}
                value={item.id}
                control={<Radio />}
                label={item.name}
              />
              // <Accordion
              //   key={idx}
              //   sx={{
              //     "&.MuiPaper-root ": {
              //       backgroundColor: "transparent",
              //       boxShadow: "none",
              //     },
              //     "& .MuiButtonBase-root": {
              //       backgroundColor: "transparent",
              //       borderRadius: "8px",
              //       minHeight: "0!important",
              //       m: "0!important",
              //     },
              //     "& .MuiAccordionSummary-content": {
              //       m: "0!important",
              //       p: "9px 15px",
              //     },

              //     "& .MuiTypography-body1": {
              //       fontSize: 15,
              //       fontWeight: 400,
              //       color: "#626262",
              //     },
              //   }}
              // >
              //   <AccordionSummary
              //     expandIcon={<ExpandMoreIcon />}
              //     aria-controls="panel1-content"
              //     id="panel1-header"
              //   >
              //     {item.name}
              //   </AccordionSummary>
              //   <AccordionDetails>
              //     <FormGroup>
              //       <FormControlLabel
              //         control={<Checkbox />}
              //         label="Шоколад белый"
              //       />
              //       <FormControlLabel
              //         control={<Checkbox />}
              //         label="Шоколад горький"
              //       />
              //       <FormControlLabel
              //         control={<Checkbox />}
              //         label="Шоколад молочный"
              //       />
              //       <FormControlLabel
              //         control={<Checkbox />}
              //         label="Шоколад со вкусом"
              //       />
              //     </FormGroup>
              //   </AccordionDetails>
              // </Accordion>
            ))}
        </RadioGroup>
      )}
    </Box>
  );
};

export default Categories;
