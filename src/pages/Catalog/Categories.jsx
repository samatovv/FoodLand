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
import { getCategories, handleLoading } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, setProducts } from "../../redux/reducers/products";

const Categories = ({
  setChip,
  setCategory,
  chip,
  category,
  setParams2,
  params2,
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
    dispatch(handleLoading(true));
    dispatch(setProducts([]));

    if (params.find((el) => el?.id === item?.id)) {
      const filtered = chip.filter((el) => el !== item.name);
      const filteredParams = params.filter((el) => el?.id !== item?.id);
      setChip([...filtered]);
      setParams([...filteredParams]);
      if (page > 1) setPage(1);
      if (page === 1)
        dispatch(
          getProducts(
            `/products/query?limit=12&page=${page}&search=${searchValue}&categoryIds=${
              params2
                ? params2.map((item) => item?.id)
                : filteredParams.map((item) => item?.id)
            }`
          )
        );
    } else {
      if (page > 1) setPage(1);
      setChip([...chip, item.name]);
      setParams([
        ...params,
        { id: item?.id, name: item.name, parent: item.parent.id },
      ]);

      dispatch(
        getProducts(
          `/products/query?limit=12&page=${page}&search=${searchValue}&categoryIds=${
            item?.id
          }${
            params2
              ? params?.length
                ? `,${params2.map((item) => item?.id)}`
                : ""
              : params?.length
              ? `,${params.map((item) => item?.id)}`
              : ""
          }`
        )
      );
    }
  };

  const handleProducts2 = (item) => {
    dispatch(handleLoading(true));
    dispatch(setProducts([]));

    if (params2.find((el) => el?.id === item?.id)) {
      const filtered = chip.filter((el) => el !== item.name);
      const filteredParams = params2.filter((el) => el?.id !== item?.id);
      setChip([...filtered]);
      setParams2([...filteredParams]);
      if (page > 1) setPage(1);
      if (page === 1)
        dispatch(
          getProducts(
            `/products/query?limit=12&page=${page}&search=${searchValue}&categoryIds=${
              params?.length ? `${params.map((item) => item?.id)}` : ""
            }${
              params.length >= 1 && filteredParams.length >= 1 ? "," : ""
            }${filteredParams.map((item) => item?.id)}`
          )
        );
    } else {
      if (page > 1) setPage(1);
      setChip([...chip, item.name]);
      setParams2([
        ...params2,
        { id: item?.id, name: item.name, parent: item.parent.id },
      ]);
      dispatch(
        getProducts(
          `/products/query?limit=12&page=${page}&search=${searchValue}&categoryIds=${
            item?.id
          }${params2?.length ? `,${params2.map((item) => item?.id)}` : ""}`
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
              categories?.first?.map((item, idx) => (
                <Accordion
                  key={idx}
                  // onClick={() => handleProducts(item)}
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
                    onClick={() => {
                      dispatch(
                        getProducts(
                          `/products/query?limit=12&page=${page}&search=${searchValue}&categoryIds=${item.id}`
                        )
                      );
                      setCategory({ title: item.name });
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <span
                      style={{
                        fontWeight: category?.title === item.name && 700,
                      }}
                    >
                      {item?.name}
                    </span>
                  </AccordionSummary>
                  <AccordionDetails>
                    {categories?.second
                      ?.filter((el) => el.parent?.id === item?.id)
                      ?.map((ite, idx) => (
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
                            onClick={() => handleProducts(ite)}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                          >
                            <span
                              style={{
                                fontWeight:
                                  !!params.find((el) => el?.id === ite?.id) &&
                                  700,
                              }}
                            >
                              {ite.name}
                            </span>
                          </AccordionSummary>
                          <AccordionDetails>
                            {categories?.second
                              ?.filter((el) => el.parent?.id === ite?.id)
                              ?.map((el, idx) => (
                                <FormGroup key={idx}>
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        checked={
                                          !!params2.find(
                                            (item) => item?.id === el?.id
                                          )
                                        }
                                      />
                                    }
                                    label={el.name}
                                    value={el?.id}
                                    onChange={() => handleProducts2(el)}
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
            categories?.first?.map((item, idx) => (
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
                    ?.map((ite, idx) => (
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
                            ?.map((el, idx) => (
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
