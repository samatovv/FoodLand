import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { getOrder, getOrders } from "../../redux/reducers/profile";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Check from "../../assets/images/Check";
import InProcess from "../../assets/images/InProcess";
import Success from "../Cart/Success";
import Cancelled from "../../assets/images/Cancelled";
import { useNavigate } from "react-router-dom";
import more from "../../assets/images/more.svg";
import Preview from "../Preview";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import dayjs from "dayjs";
import Calendar from "../../assets/images/Calendar";
import empty from "../../assets/images/empty.svg";

const Table = ({ setCart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const md = useMediaQuery("(min-width:769px)");

  const id = useSelector((state) => state.profile.data?.id);
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
      dispatch(
        getOrders(
          id,
          dayjs(values.createdFrom).startOf("day"),
          dayjs(values.createdTo).endOf("day")
        )
      );
    },
  });

  useEffect(() => {
    if (id) dispatch(getOrders(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (createdOrder?.status === 200) {
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
            sx={{
              "& .MuiButtonBase-root.Mui-selected": {
                color: "#FFF!important",
              },
            }}
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
              <svg
                width="72"
                height="76"
                viewBox="0 0 72 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9075 32.3752C14.7249 26.2435 19.9553 21.6641 26.1412 21.6641H47.7254C53.9113 21.6641 59.1417 26.2435 59.9591 32.3752L62.8394 53.9811C63.8257 61.3798 58.0698 67.9539 50.6056 67.9539H23.261C15.7968 67.9539 10.0409 61.3798 11.0272 53.9811L13.9075 32.3752Z"
                  stroke="#DADADA"
                  strokeWidth="4.62823"
                />
                <path
                  d="M49.2519 27.8051V18.5448C49.2519 11.7287 43.7264 6.20312 36.9103 6.20312V6.20312C30.0942 6.20312 24.5686 11.7287 24.5686 18.5448L24.5686 27.8051"
                  stroke="#DADADA"
                  strokeWidth="4.62823"
                  stroke-linecap="round"
                />
              </svg>

              <Typography
                maxWidth={304}
                textAlign="center"
                variant="subtitle1"
                fontWeight={600}
                lineHeight="24.38px"
                color="#AEAEAE"
              >
                Оформленные заказы отсутсвуют
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
                    "&:first-of-type": {
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

                  {md ? (
                    <>
                      <th>Сумма</th>
                      <th>Вес</th>
                    </>
                  ) : (
                    <th>Дата заказа</th>
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
                }}
              >
                {Array.isArray(orders?.results) &&
                  orders?.results?.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item?.customId}</td>

                      {md ? (
                        <>
                          <td>{item?.price}</td>
                          <td>{item?.weight}</td>
                        </>
                      ) : (
                        <td>
                          {item?.createdAt &&
                            new Intl.DateTimeFormat("ru", {
                              dateStyle: "short",
                              // timeStyle: "short",
                            }).format(new Date(item?.createdAt))}
                        </td>
                      )}
                      <td>
                        <Box
                          sx={{
                            width: 104,
                            height: 22,
                            borderRadius: "4px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            columnGap: "4px",
                            background:
                              item?.status === "new"
                                ? "#DCF2FB"
                                : item?.status === "in_progress"
                                ? "#f3f4f6"
                                : item?.status === "canceled"
                                ? "#FBDCDC"
                                : item?.status === "completed"
                                ? "#EBFBDC"
                                : item?.status === "accepted"
                                ? "#DCF2FB"
                                : item?.status === "preorder" && "#DCF2FB",
                            color:
                              item?.status === "new"
                                ? "#152C68"
                                : item?.status === "in_progress"
                                ? "#111928"
                                : item?.status === "canceled"
                                ? "#ec3f3f"
                                : item?.status === "completed"
                                ? "#3D6815"
                                : item?.status === "accepted"
                                ? "#000"
                                : item?.status === "preitem" && "#152C68",
                          }}
                        >
                          {item?.status === "in_progress" ? (
                            <InProcess />
                          ) : item?.status === "canceled" ? (
                            <Cancelled />
                          ) : item?.status === "completed" ||
                            item?.status === "new" ||
                            item?.status === "accepted" ? (
                            <Check
                              color={
                                item?.status === "completed"
                                  ? "#3D6815"
                                  : "#152C68"
                              }
                            />
                          ) : (
                            item?.status === "preorder" && <InProcess />
                          )}
                          {item?.status === "new"
                            ? "Принят"
                            : item?.status === "in_progress"
                            ? "В процессе"
                            : item?.status === "canceled"
                            ? "Отменен"
                            : item?.status === "completed"
                            ? "Готово"
                            : item?.status === "accepted"
                            ? "Принят"
                            : item?.status === "preorder" && "Предзаказ"}
                        </Box>
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
                            <Button
                              onClick={() => {
                                navigate(`?${item.id}`);
                                setOpenDrawer(true);
                                dispatch(getOrder(item?.id));
                              }}
                            >
                              Посмотреть заказ
                            </Button>
                          </td>
                        </>
                      ) : (
                        <td>
                          <img
                            onClick={() => {
                              setOpenDrawer(true);
                              dispatch(getOrder(item?.id));
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
      <Preview setCart={setCart} open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Table;
