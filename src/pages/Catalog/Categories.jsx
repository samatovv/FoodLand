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

const Categories = ({
  setChip,
  chip,
  formik,
  isAuth,
  params,
  setParams,
  searchValue,
}) => {
  const dispatch = useDispatch();
  const md = useMediaQuery("(min-width:900px)");

  const [expanded, setExpanded] = useState(true);

  const categories = useSelector((state) => state.main.categories);

  const c = categories
    ?.filter((item) => item?.parent?.name)
    .map((idx) => ({
      name: idx?.parent?.name,
      id: idx?.parent?.id,
      sub: categories
        .map((item) => item.parent?.name === idx.parent?.name && item)
        .filter((item) => item),
    }));

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleProducts = (item) => {
    if (params.find((el) => el.id === item.id)) {
      const filtered = chip.filter((el) => el !== item.name);
      const filteredParams = params.filter((el) => el.id !== item.id);
      setChip([...filtered]);
      setParams([...filteredParams]);
      dispatch(
        getProducts(
          `/products/query?search=${searchValue}&categoryIds=${filteredParams.map(
            (item) => item.id
          )}`
        )
      );
    } else {
      setChip([...chip, item.name]);
      setParams([...params, { id: item.id, name: item.name }]);
      dispatch(
        getProducts(
          `/products/query?search=${searchValue}&categoryIds=${item.id}${
            params.length ? `,${params.map((item) => item.id)}` : ""
          }`
        )
      );
    }
  };

  return (
    <Box component="section" pb={13}>
      {md ? (
        <Accordion
          expanded={expanded && isAuth}
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
            {Array.isArray(categories) &&
              c
                .filter(
                  (obj, idx, arr) =>
                    idx === arr.findIndex((t) => t.name === obj.name)
                )
                ?.map((item, idx) => (
                  <Accordion
                    key={idx}
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
                      {item?.name}
                    </AccordionSummary>
                    <AccordionDetails>
                      {item.sub.map((ite) => (
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox />}
                            label={ite.name}
                            checked={params.find((el) => el.id === ite.id)}
                            value={ite.id}
                            onChange={() => handleProducts(ite)}
                          />
                        </FormGroup>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
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
                  setChip([...chip, item.name]);
                  dispatch(
                    getProducts(
                      `https://api.foodland.kg/v1/products?limit=12&page=1&category=${item.id}`
                    )
                  );
                }}
                value={item.id}
                control={<Radio />}
                label={item.name}
              />
            ))}
        </RadioGroup>
      )}
    </Box>
  );
};

export default Categories;
