import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { getOrder, getOrders, repeatOrder } from "../../redux/reducers/profile";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Chip,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Check from "../../assets/images/Check";
import InProcess from "../../assets/images/InProcess";
import Success from "../Cart/Success";
import Cancelled from "../../assets/images/Cancelled";
import { Link } from "react-router-dom";
import more from "../../assets/images/more.svg";
import Preview from "../Preview";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import dayjs from "dayjs";
import Calendar from "../../assets/images/Calendar";
import empty from "../../assets/images/emptyCart.svg";

const Table = () => {
  const dispatch = useDispatch();
  const md = useMediaQuery("(min-width:769px)");

  const id = useSelector((state) => state.profile.data.id);
  const orders = useSelector((state) => state.profile.orders);
  const createdOrder = useSelector((state) => state.profile.createdOrder);

  const [openDrawer, setOpenDrawer] = useState(false);

  const [open, setOpen] = useState(false);
  const firstUpdate = useRef(true);

  const now = dayjs();

  const formik = useFormik({
    initialValues: {
      createdFrom: now,
      createdTo: now,
    },
    onSubmit: (values) => {
      dispatch(getOrders(id, values.createdFrom, values.createdTo));
    },
  });

  useEffect(() => {
    if (id) dispatch(getOrders(id));
  }, [id]);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (createdOrder.status === 200) {
      setOpen(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createdOrder]);

  return (
    <>
      <Box
        border="1px solid #BABABA"
        borderRadius="16px"
        p={{ xs: "0", md: "0px 20px" }}
      >
        <Box
          display="flex"
          mt={2}
          mb={2}
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            p: { xs: "10px", md: 0 },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #E2E2E2!important",
            },
          }}
        >
          <Typography mb={{ xs: 2, md: 0 }} fontWeight={600} variant="h4">
            Мои заказы
          </Typography>
          <Box
            display="flex"
            columnGap={2}
            alignItems="center"
            onSubmit={formik.handleSubmit}
          >
            <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                slots={{ openPickerIcon: Calendar }}
                value={formik.values.createdFrom}
                format="YYYY-MM-DD"
                onChange={(value) => {
                  formik.setFieldValue("createdFrom", value);
                  formik.handleSubmit();
                }}
              />
            </LocalizationProvider>
            —
            <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                slots={{ openPickerIcon: Calendar }}
                value={formik.values.createdTo}
                format="YYYY-MM-DD"
                onChange={(value) => {
                  formik.setFieldValue("createdTo", value);
                  formik.handleSubmit();
                }}
              />
            </LocalizationProvider>{" "}
          </Box>
        </Box>
        <Box
          sx={{
            height: "431px",
            maxHeight: "431px",
            overflow: "scroll",
          }}
        >
          {!orders?.results?.length ? (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              rowGap={4}
              height="100%"
            >
              <img src={empty} alt="" />
              <Typography variant="subtitle1" fontWeight={600} color="#AEAEAE">
                По вашему запросу ничего не найдено
              </Typography>
            </Box>
          ) : (
            <Box
              component="table"
              sx={{
                borderSpacing: 0,
                "& button": {
                  backgroundColor: "#EBEFF5",
                  borderRadius: "4px",
                  color: "#77818F",
                  fontWeight: 600,
                  fontSize: 12,
                  p: "6px 12px!important",
                  minWidth: "unset",
                },
                "& .MuiChip-root ": {
                  borderRadius: "6px",
                  p: "4px 10px",
                },
                "& *": {
                  fontFamily: "Open Sans",
                },
              }}
              width="100%"
            >
              <Box
                component="thead"
                sx={{
                  position: "sticky",
                  top: 0,
                  zIndex: 2,
                  "& th": {
                    color: "#737680",
                    fontSize: { xs: 13, md: 12 },
                    fontWeight: { xs: 600, md: 400 },
                    p: { xs: "10px", md: "12px 0" },
                    background: "#F7F7F7",
                    textAlign: { xs: "start", md: "center" },
                    "&:first-child": {
                      borderTopLeftRadius: { xs: 0, md: "10px" },
                      borderBottomLeftRadius: { xs: 0, md: "10px" },
                    },
                    "&:last-child": {
                      borderTopRightRadius: { xs: 0, md: "10px" },
                      borderBottomRightRadius: { xs: 0, md: "10px" },
                    },
                  },
                }}
              >
                <tr>
                  <th>Номер заказа</th>
                  <th>Цена</th>
                  {md && (
                    <>
                      <th>Кол-во товаров</th>
                    </>
                  )}
                  <th>Статус</th>
                  {md && (
                    <>
                      <th>Экспедитор</th>
                      <th>Номер экспедитора</th>
                    </>
                  )}
                  <th></th>
                </tr>
              </Box>
              <Box
                component="tbody"
                sx={{
                  "& td": {
                    color: "#000000",
                    fontSize: 12,
                    fontWeight: 400,
                    borderBottom: { xs: "none", md: "1px solid #00000008" },
                    p: { xs: "7px 10px", md: "12px 0" },
                    textAlign: { xs: "start", md: "center" },
                  },
                  "& .MuiChip-label": {
                    p: { xs: "0 2px", md: "0 12px" },
                  },
                }}
              >
                {Array.isArray(orders?.results) &&
                  orders?.results?.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item?.customId}</td>
                      <td>{item?.price}</td>
                      {md && <td>{item?.products?.length}</td>}
                      <td>
                        <Chip
                          icon={
                            item.status === "in_progress" ? (
                              <InProcess />
                            ) : item.status === "canceled" ? (
                              <Cancelled />
                            ) : item.status === "completed" ||
                              item?.status === "new" ||
                              item.status === "accepted" ? (
                              <Check />
                            ) : (
                              item.status === "preorder" && <InProcess />
                            )
                          }
                          sx={{
                            minWidth: { xs: 104, md: 129 },
                            maxWidth: { xs: 104, md: 129 },
                            background:
                              item?.status === "new"
                                ? "#DCF2FB"
                                : item.status === "in_progress"
                                ? "#f3f4f6"
                                : item.status === "canceled"
                                ? "#FBDCDC"
                                : item.status === "completed"
                                ? "#EBFBDC"
                                : item.status === "accepted"
                                ? "#DCF2FB"
                                : item.status === "preorder" && "#DCF2FB",
                          }}
                          label={
                            item?.status === "new"
                              ? "Принят"
                              : item.status === "in_progress"
                              ? "В процессе"
                              : item.status === "canceled"
                              ? "Отменен"
                              : item.status === "completed"
                              ? "Готово"
                              : item.status === "accepted"
                              ? "Принят"
                              : item.status === "preorder" && "Предзаказ"
                          }
                        />
                      </td>
                      {md ? (
                        <>
                          <td>
                            {item?.managers[0]?.name
                              ? item?.managers[0]?.name
                              : "-"}
                          </td>
                          <td>
                            {item?.managers[0]?.phone
                              ? item?.managers[0]?.phone
                              : "-"}
                          </td>
                          <td>
                            <Link to="/profile/cart/">
                              <Button
                                onClick={() =>
                                  localStorage.setItem(
                                    "cart",
                                    JSON.stringify(
                                      item.products.map((item) => ({
                                        count: item.quantity,
                                        description: item.product.description,
                                        name: item.product.name,
                                        img: item?.product?.images[0]?.url,
                                        sum: item.product.price * item.quantity,
                                        price: item.product.price,
                                        id: item.product.id,
                                        idx: item.product.customId,
                                      }))
                                    )
                                  )
                                }
                              >
                                Повторить заказ
                              </Button>
                            </Link>
                          </td>
                        </>
                      ) : (
                        <td>
                          <img
                            onClick={() => {
                              setOpenDrawer(true);
                              dispatch(getOrder(item.id));
                            }}
                            src={more}
                            width={25}
                            height={25}
                            alt=""
                          />
                        </td>
                      )}
                    </tr>
                  ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Success reorder open={open} setOpen={setOpen} />
      <Preview open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Table;
