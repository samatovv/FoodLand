import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "../../assets/images/ExpandMoreIcon";
import { getCategories, handleLoading } from "../../redux/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  getProd,
  getProducts,
  setProducts,
} from "../../redux/reducers/products";

const Categories = ({
  setCategory,
  category,
  setParams2,
  params2,
  params,
  setParams,
  setValueSearch,
  page,
  setPage,
}) => {
  const dispatch = useDispatch();
  const md = useMediaQuery("(min-width:900px)");

  const [expanded, setExpanded] = useState({
    categoryTitle: true,
    categoryTitle2: false,
    categoryTitle3: false,
  });
  const [categories, setCategories] = useState([]);

  const allCategories = useSelector((state) => state.main.categories);

  useEffect(() => {
    if (!allCategories.length) dispatch(getCategories());
  }, [allCategories.length, dispatch]);

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
    if (params?.id === item?.id) {
      setParams({});
      setParams2({});
      if (page > 1) setPage(1);
      if (page === 1)
        dispatch(
          getProducts(
            `/products/query?limit=12&page=${page}&search=&categoryIds=${item.parent.id}`
          )
        );
    } else {
      if (page > 1) setPage(1);
      setParams({ id: item?.id, name: item.name, parent: item.parent.id });
      dispatch(
        getProducts(
          `/products/query?limit=12&page=${page}&search=&categoryIds=${item?.id}`
        )
      );
    }
  };

  const handleProducts2 = (item) => {
    dispatch(handleLoading(true));
    dispatch(setProducts([]));

    if (params2?.id === item?.id) {
      setCategory({ ...category, title2: item.parent.name, title4: "" });

      setParams2({});
      if (page > 1) setPage(1);
      if (page === 1)
        dispatch(
          getProducts(
            `/products/query?limit=12&page=${page}&search=&categoryIds=${item.parent.id}`
          )
        );
    } else {
      setCategory({ ...category, title2: item.name, title4: item.name });
      setParams2({ id: item?.id, name: item.name, parent: item.parent.id });
      if (page > 1) setPage(1);
      dispatch(
        getProducts(
          `/products/query?limit=12&page=${page}&search=&categoryIds=${item?.id}`
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
            },
            "& .MuiAccordion-root::before": { display: "none" },
            "& .MuiFormGroup-root ": {
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
                  expanded={category?.title === item.name}
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
                    },
                    "& .MuiAccordionSummary-content": {
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
                      if (category?.title2 === item.name) {
                        dispatch(setProducts([]));
                        dispatch(handleLoading(true));
                        dispatch(getProducts(`/products/query?limit=12&page=${page}&search=&categoryIds=`));
                        setCategory({ title: "", title2: "" });
                    
                        setParams({});
                        setExpanded((prev) => ({
                          ...prev,
                          [item.name]: !prev[item.name], 
                        }));
                      } else {
                        setValueSearch("");
                        dispatch(setProducts([]));
                        dispatch(handleLoading(true));
                        dispatch(getProducts(`/products/query?limit=12&page=${page}&search=&categoryIds=${item.id}`));
                    
                        setCategory({ title: item.name, title2: item.name }); 
                        setExpanded((prev) => ({
                          ...prev,
                          [item.name]: true,
                        }));
                      }
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
                            },
                            "& .MuiAccordionSummary-content": {
                            },

                            "& .MuiTypography-body1": {
                              fontSize: 15,
                              fontWeight: 400,
                              color: "#626262",
                            },
                          }}
                          expanded={params.name === ite.name}
                        >
                          <AccordionSummary
                            onClick={() => {
                              handleProducts(ite);
                              setCategory({ ...category, title2: ite.name });
                            
                              setExpanded((prev) => ({
                                ...prev,
                                categoryTitle3: prev.categoryTitle3 ? false : true,
                              }));
                            }}                            
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                          >
                            <span
                              style={{
                                fontWeight: params?.id === ite?.id && 700,
                              }}
                            >
                              {ite.name}
                            </span>
                          </AccordionSummary>
                          <AccordionDetails>
                            {categories?.second
                              ?.filter((el) => el.parent?.id === ite?.id)
                              ?.map((el, idx) => (
                                <Typography
                                  sx={{
                                    cursor: "pointer",
                                    m: "8px 0",
                                    pl: "17px",
                                    fontWeight:
                                      params2.name === el.name &&
                                      "700!important",
                                    color:
                                      params2.name === el.name &&
                                      "#000!important",
                                  }}
                                  key={idx}
                                  onClick={() => handleProducts2(el)}
                                >
                                  {el.name}
                                </Typography>
                              ))}
                          </AccordionDetails>
                        </Accordion>
                      ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            <div
              onClick={() => {
                dispatch(handleLoading(true));
                dispatch(setProducts({}));
                setCategory({ title: "Рекомендуемые товары" });
                dispatch(getProd(`recommendations?limit=12&page=${page}`));
              }}
              style={{
                paddingLeft: "17px",
                margin: "17px 0",
                fontWeight: category?.title === "Рекомендуемые товары" && 700,
                cursor: "pointer",
              }}
            >
              Рекомендуемые товары
            </div>
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
                expanded={category?.title === item.name}
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
                    if (category?.title2 === item.name) {
                      dispatch(setProducts([]));
                      dispatch(handleLoading(true));
                      dispatch(getProducts(`/products/query?limit=12&page=${page}&search=&categoryIds=`));
                      setCategory({ title: "", title2: "" });
                  
                      setParams({});
                      setExpanded((prev) => ({
                        ...prev,
                        [item.name]: !prev[item.name], 
                      }));
                    } else {
                      setValueSearch("");
                      dispatch(setProducts([]));
                      dispatch(handleLoading(true));
                      dispatch(getProducts(`/products/query?limit=12&page=${page}&search=&categoryIds=${item.id}`));
                  
                      setCategory({ title: item.name, title2: item.name }); 
                      setExpanded((prev) => ({
                        ...prev,
                        [item.name]: true,
                      }));
                    }
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
                          },
                          "& .MuiTypography-body1": {
                            fontSize: 15,
                            fontWeight: 400,
                            color: "#626262",
                          },
                        }}
                        expanded={params.name === ite.name}
                      >
                        <AccordionSummary
                          onClick={() => {
                            handleProducts(ite);
                            setCategory({ ...category, title2: ite.name });
                          
                            setExpanded((prev) => ({
                              ...prev,
                              categoryTitle3: prev.categoryTitle3 ? false : true,
                            }));
                          }}     
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <span
                            style={{
                              fontWeight: params?.id === ite?.id && 700,
                            }}
                          >
                            {ite.name}
                          </span>
                        </AccordionSummary>
                        <AccordionDetails>
                          {categories?.second
                            ?.filter((el) => el.parent?.id === ite?.id)
                            ?.map((el, idx) => (
                              <Typography
                                sx={{
                                  cursor: "pointer",
                                  m: "8px 0",
                                  pl: "17px",
                                  fontWeight:
                                    params2.name === el.name && "700!important",
                                  color:
                                    params2.name === el.name &&
                                    "#000!important",
                                }}
                                key={idx}
                                onClick={() => handleProducts2(el)}
                              >
                                {el.name}
                              </Typography>
                            ))}
                        </AccordionDetails>
                      </Accordion>
                    ))}
                </AccordionDetails>
              </Accordion>
            ))}
          <div
            onClick={() => {
              dispatch(handleLoading(true));
              dispatch(setProducts({}));
              setCategory({ title: "Рекомендуемые товары" });
              dispatch(getProd(`recommendations?limit=12&page=${page}`));
            }}
            style={{
              paddingLeft: "17px",
              margin: "17px 0",
              fontWeight: category?.title === "Рекомендуемые товары" && 700,
              cursor: "pointer",
            }}
          >
            Рекомендуемые товары
          </div>
        </Box>
      )}
    </Box>
  );
};

export default Categories;