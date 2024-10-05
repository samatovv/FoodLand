import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { getOrders, repeatOrder } from "../../redux/reducers/profile";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Chip, TextField, Typography } from "@mui/material";
import Check from "../../assets/images/Check";
import InProcess from "../../assets/images/InProcess";
import Success from "../Cart/Success";
import Cancelled from "../../assets/images/Cancelled";
import { Link } from "react-router-dom";

const Table = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.profile.data.id);
  const orders = useSelector((state) => state.profile.orders);
  const createdOrder = useSelector((state) => state.profile.createdOrder);

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
      <Box border="1px solid #BABABA" borderRadius="16px" p="0px 20px">
        <Box
          display="flex"
          mt={2}
          mb={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #E2E2E2!important",
            },
          }}
        >
          <Typography fontWeight={600} variant="h4">
            Мои заказы
          </Typography>
          <TextField type="date" />
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
                  fontSize: 12,
                  fontWeight: 400,
                  p: "12px 0",
                  background: "#F7F7F7",
                  "&:first-child": {
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  },
                  "&:last-child": {
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                  },
                },
              }}
            >
              <tr>
                <th>Номер заказа</th>
                <th>Кол-во товаров</th>
                <th>Стоимость</th>
                <th>Статус</th>
                <th>Экспедитор</th>
                <th>Номер экспедитора</th>
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
                  borderBottom: "1px solid #00000008",
                  p: "12px 0",
                  textAlign: "center",
                },
              }}
            >
              {Array.isArray(orders?.results) &&
                orders?.results?.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item?.customId}</td>
                    <td>{item?.products?.length}</td>
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
                          minWidth: 129,
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
                    <td>
                      {item?.managers[0]?.name ? item?.managers[0]?.name : "-"}
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
                  </tr>
                ))}
              {/* <tr>
              <td>№93849</td>
              <td>5</td>
              <td>5500</td>
              <td>
                <Chip
                  icon={<InProcess />}
                  sx={{
                    background: "#f3f4f6",
                  }}
                  label="В процессе"
                />
              </td>
              <td>Андрей М.</td>
              <td>+996 500 500 500</td>
              <td>
                <Button>Повторить заказ</Button>
              </td>
            </tr>
            <tr>
              <td>№93849</td>
              <td>5</td>
              <td>5500</td>
              <td>
                <Chip
                  icon={<Check />}
                  sx={{
                    background: "#EBFBDC",
                  }}
                  label="Принят"
                />
              </td>
              <td>Андрей М.</td>
              <td>+996 500 500 500</td>
              <td>
                <Button>Повторить заказ</Button>
              </td>
            </tr>
            <tr>
              <td>№93849</td>
              <td>5</td>
              <td>5500</td>
              <td>
                <Chip
                  icon={<Check />}
                  sx={{
                    background: "#EBFBDC",
                  }}
                  label="Готово"
                />
              </td>
              <td>Андрей М.</td>
              <td>+996 500 500 500</td>
              <td>
                <Button>Повторить заказ</Button>
              </td>
            </tr>
            <tr>
              <td>№93849</td>
              <td>5</td>
              <td>5500</td>
              <td>
                <Chip
                  icon={<Check />}
                  sx={{
                    background: "#EBFBDC",
                  }}
                  label="Готово"
                />
              </td>
              <td>Андрей М.</td>
              <td>+996 500 500 500</td>
              <td>
                <Button>Повторить заказ</Button>
              </td>
            </tr>
            <tr>
              <td>№93849</td>
              <td>5</td>
              <td>5500</td>
              <td>
                <Chip
                  icon={<Check />}
                  sx={{
                    background: "#EBFBDC",
                  }}
                  label="Готово"
                />
              </td>
              <td>Андрей М.</td>
              <td>+996 500 500 500</td>
              <td>
                <Button>Повторить заказ</Button>
              </td>
            </tr>
            <tr>
              <td>№93849</td>
              <td>5</td>
              <td>5500</td>
              <td>
                <Chip
                  icon={<Check />}
                  sx={{
                    background: "#EBFBDC",
                  }}
                  label="Готово"
                />
              </td>
              <td>Андрей М.</td>
              <td>+996 500 500 500</td>
              <td>
                <Button>Повторить заказ</Button>
              </td>
            </tr>
            <tr>
              <td>№93849</td>
              <td>5</td>
              <td>5500</td>
              <td>
                <Chip
                  icon={<Check />}
                  sx={{
                    background: "#EBFBDC",
                  }}
                  label="Готово"
                />
              </td>
              <td>Андрей М.</td>
              <td>+996 500 500 500</td>
              <td>
                <Button>Повторить заказ</Button>
              </td>
            </tr>
            <tr>
              <td>№93849</td>
              <td>5</td>
              <td>5500</td>
              <td>
                <Chip
                  icon={<Check />}
                  sx={{
                    background: "#EBFBDC",
                  }}
                  label="Готово"
                />
              </td>
              <td>Андрей М.</td>
              <td>+996 500 500 500</td>
              <td>
                <Button>Повторить заказ</Button>
              </td>
            </tr>
            <tr>
              <td>№93849</td>
              <td>5</td>
              <td>5500</td>
              <td>
                <Chip
                  icon={<Check />}
                  sx={{
                    background: "#EBFBDC",
                  }}
                  label="Готово"
                />
              </td>
              <td>Андрей М.</td>
              <td>+996 500 500 500</td>
              <td>
                <Button>Повторить заказ</Button>
              </td>
            </tr>
            <tr>
              <td>№93849</td>
              <td>5</td>
              <td>5500</td>
              <td>
                <Chip
                  icon={<Check />}
                  sx={{
                    background: "#EBFBDC",
                  }}
                  label="Готово"
                />
              </td>
              <td>Андрей М.</td>
              <td>+996 500 500 500</td>
              <td>
                <Button>Повторить заказ</Button>
              </td>
            </tr>
            <tr>
              <td>№93849</td>
              <td>5</td>
              <td>5500</td>
              <td>
                <Chip
                  icon={<Check />}
                  sx={{
                    background: "#EBFBDC",
                  }}
                  label="Готово"
                />
              </td>
              <td>Андрей М.</td>
              <td>+996 500 500 500</td>
              <td>
                <Button>Повторить заказ</Button>
              </td>
            </tr>
            <tr>
              <td>№93849</td>
              <td>5</td>
              <td>5500</td>
              <td>
                <Chip
                  icon={<Check />}
                  sx={{
                    background: "#EBFBDC",
                  }}
                  label="Готово"
                />
              </td>
              <td>Андрей М.</td>
              <td>+996 500 500 500</td>
              <td>
                <Button>Повторить заказ</Button>
              </td>
            </tr>{" "}
            <tr>
              <td>№93849</td>
              <td>5</td>
              <td>5500</td>
              <td>
                <Chip
                  icon={<Check />}
                  sx={{
                    background: "#EBFBDC",
                  }}
                  label="Готово"
                />
              </td>
              <td>Андрей М.</td>
              <td>+996 500 500 500</td>
              <td>
                <Button>Повторить заказ</Button>
              </td>
            </tr> */}
            </Box>
          </Box>
        </Box>
      </Box>
      <Success reorder open={open} setOpen={setOpen} />
    </>
  );
};

export default Table;
