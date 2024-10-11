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
import { DatePicker } from "@mui/x-date-pickers";

const Table = () => {
  const dispatch = useDispatch();
  const md = useMediaQuery("(min-width:769px)");

  const id = useSelector((state) => state.profile.data.id);
  const orders = useSelector((state) => state.profile.orders);
  const createdOrder = useSelector((state) => state.profile.createdOrder);

  const [openDrawer, setOpenDrawer] = useState(false);

  const [open, setOpen] = useState(false);
  const firstUpdate = useRef(true);

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
          alignItems="center"
          justifyContent="space-between"
          sx={{
            p: { xs: "10px", md: 0 },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #E2E2E2!important",
            },
          }}
        >
          <Typography fontWeight={600} variant="h4">
            Мои заказы
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker disablePast />
          </LocalizationProvider>{" "}
        </Box>
        <Box
          sx={{
            height: "431px",
            maxHeight: "431px",
            overflow: "scroll",
          }}
        >
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
                    {md && <td>{item?.products?.length}</td>}
                    <td>{item?.price}</td>
                    <td>
                      <Chip
                        icon={
                          item?.status === "new" ? (
                            <InProcess />
                          ) : item.status === "canceled" ? (
                            <Cancelled />
                          ) : item.status === "completed" ? (
                            <Check />
                          ) : item.status === "accepted" ? (
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
        </Box>
      </Box>
      <Success reorder open={open} setOpen={setOpen} />
      <Preview open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Table;
