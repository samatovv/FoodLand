import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
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
  isAuth,
  params,
  setParams,
  searchValue,
  page,
  setPage,
}) => {
  const dispatch = useDispatch();
  const md = useMediaQuery("(min-width:900px)");

  const [expanded, setExpanded] = useState(true);
  const [categories, setCategories] = useState([]);

  const allCategories = useSelector((state) => state.main.categories);

  useEffect(() => {
    if (!allCategories.length) dispatch(getCategories());
  }, []);

  useEffect(() => {
    const categories = allCategories
      ?.filter((item) => !item?.parent?.name)
      .map((el) => ({
        first: allCategories
          .map((item) => item.parent?.name === el.parent?.name && item)
          .filter((item) => item),
        second: allCategories.filter((item) => item.parent).map((item) => item),
      }));
    setCategories(categories[0]);
  }, [allCategories]);

  const handleProducts = (item) => {
    if (params.find((el) => el?.id === item?.id)) {
      const filtered = chip.filter((el) => el !== item.name);
      const filteredParams = params.filter((el) => el?.id !== item?.id);
      setChip([...filtered]);
      setParams([...filteredParams]);
      if (page > 1) setPage(1);
      if (page === 1)
        dispatch(
          getProducts(
            `/products/query?limit=12&page=${page}&search=${searchValue}&categoryIds=${filteredParams.map(
              (item) => item?.id
            )}`
          )
        );
    } else {
      if (page > 1) setPage(1);
      setChip([...chip, item.name]);
      setParams([...params, { id: item?.id, name: item.name }]);
      dispatch(
        getProducts(
          `/products/query?limit=12&page=${page}&search=${searchValue}&categoryIds=${
            item?.id
          }${params?.length ? `,${params.map((item) => item?.id)}` : ""}`
        )
      );
    }
  };

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
              "& *": {
                fontFamily: "Open Sans!important",
              },
            },
            "& .MuiButtonBase-root": {
              backgroundColor: "#F5F5F5",
              borderRadius: "8px",
              minHeight: "0!important",
              m: "0!important",
            },
            "& .MuiAccordionSummary-content": {
              m: "12px 0!important",
              // p: "9px 4px",
            },
            "& .MuiAccordion-root::before": { display: "none" },
            "& .MuiFormGroup-root ": {
              // ml: "15px",
            },
            "& .MuiAccordionSummary-contentGutters": {
              fontFamily: "Open Sans",
              fontSize: 16,
            },
            "& .MuiAccordionDetails-root:first-child": {
              // p: 0,
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
            {Array.isArray(allCategories) &&
              categories?.first?.map((item) => (
                <Accordion
                  key={item}
                  sx={{
                    "&.MuiPaper-root ": {
                      backgroundColor: "transparent",
                      boxShadow: "none",
                    },
                    "& .MuiButtonBase-root": {
                      backgroundColor: "transparent",
                      borderRadius: "8px",
                      minHeight: "0!important",
                      // m: "0!important",
                    },
                    "& .MuiAccordionSummary-content": {
                      // m: "0!important",
                      // p: "9px 15px",
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
                    {categories?.second
                      ?.filter((el) => el.parent?.id === item?.id)
                      ?.map((ite) => (
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
                              // m: "0!important",
                            },
                            "& .MuiAccordionSummary-content": {
                              // m: "0!important",
                              // p: "9px 15px",
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
                            {ite.name}
                          </AccordionSummary>
                          <AccordionDetails>
                            {categories?.second
                              ?.filter((el) => el.parent?.id === ite?.id)
                              ?.map((el) => (
                                <FormGroup>
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        checked={
                                          !!params.find(
                                            (item) => item?.id === el?.id
                                          )
                                        }
                                      />
                                    }
                                    label={el.name}
                                    value={el?.id}
                                    onChange={() => handleProducts(el)}
                                  />
                                </FormGroup>
                              ))}
                          </AccordionDetails>
                        </Accordion>
                      ))}
                  </AccordionDetails>
                </Accordion>
              ))}
          </AccordionDetails>
        </Accordion>
      ) : (
        <Box
          sx={{
            "& .MuiAccordion-root::before": { display: "none" },
            "& .MuiAccordionSummary-contentGutters": {
              fontFamily: "Open Sans",
              fontSize: 16,
            },
            "& *": {
              fontFamily: "Open Sans!important",
            },
          }}
        >
          {Array.isArray(allCategories) &&
            categories?.first?.map((item) => (
              <Accordion
                key={item}
                sx={{
                  "&.MuiPaper-root ": {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  },
                  "& .MuiButtonBase-root": {
                    backgroundColor: "transparent",
                    borderRadius: "8px",
                    minHeight: "0!important",
                    // m: "0!important",
                  },
                  "& .MuiAccordionSummary-content": {
                    // m: "0!important",
                    // p: "9px 15px",
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
                  {categories?.second
                    ?.filter((el) => el.parent?.id === item?.id)
                    ?.map((ite) => (
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
                            // m: "0!important",
                          },
                          "& .MuiAccordionSummary-content": {
                            // m: "0!important",
                            // p: "9px 15px",
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
                          {ite.name}
                        </AccordionSummary>
                        <AccordionDetails>
                          {categories?.second
                            ?.filter((el) => el.parent?.id === ite?.id)
                            ?.map((el) => (
                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={
                                        !!params.find(
                                          (item) => item?.id === el?.id
                                        )
                                      }
                                    />
                                  }
                                  label={el.name}
                                  value={el?.id}
                                  onChange={() => handleProducts(el)}
                                />
                              </FormGroup>
                            ))}
                        </AccordionDetails>
                      </Accordion>
                    ))}
                </AccordionDetails>
              </Accordion>
            ))}
        </Box>
      )}
    </Box>
  );
};

export default Categories;
