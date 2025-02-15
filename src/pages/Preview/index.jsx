import {
  Box,
  Button,
  Dialog,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Close from "../../assets/images/Close";
import InProcess from "../../assets/images/InProcess";
import Cancelled from "../../assets/images/Cancelled";
import Check from "../../assets/images/Check";
import { Link, useLocation } from "react-router-dom";
import Card from "../../components/Card";
import { setOrder } from "../../redux/reducers/profile";

const Preview = ({ open, setOpen, setCart }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const order = useSelector((state) => state.profile.order);
  const manager = Array.isArray(order.managers) && order?.managers[0];

  const data = useSelector((state) => state.profile.data);

  const md = useMediaQuery("(min-width:769px)");

  const handleClose = () => {
    // setOrderId(false);
    dispatch(setOrder([]));
    setOpen(false);
  };

  return (
    <>
      {md ? (
        <Dialog
          sx={{
            "& .MuiPaper-root": {
              p: 4,
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              minWidth: "70%",
              "& .MuiIconButton-root": {
                alignSelf: "end",
              },
            },
          }}
          open={location.search && order?.id === location.search.split("?")[1]}
          onClose={handleClose}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex">
              <div>
                <Typography
                  fontWeight={600}
                  color="#676767"
                  fontSize={13}
                  className="sans"
                >
                  Номер заказа:
                </Typography>
                <Typography fontWeight={700} fontSize={18}>
                  {order?.customId}
                </Typography>
              </div>
              <Box ml={5}>
                <Typography
                  fontWeight={600}
                  color="#676767"
                  fontSize={13}
                  className="sans"
                >
                  Дата заказа:
                </Typography>
                <Typography fontWeight={700} fontSize={18}>
                  {order?.createdAt &&
                    new Intl.DateTimeFormat("ru", {
                      dateStyle: "short",
                      timeStyle: "short",
                    }).format(new Date(order?.createdAt))}
                </Typography>
              </Box>
            </Box>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>

          <Box
            p="20px 0"
            width="100%"
            m="20px 0"
            borderTop="1px solid #E2E2E2"
            borderBottom="1px solid #E2E2E2"
          >
            <Typography
              className="sans"
              mb="10px"
              fontWeight={600}
              fontSize={18}
            >
              Детали заказа
            </Typography>
            <Box
              component="table"
              width="100%"
              sx={{
                "& *": {
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                  fontSize: 13,
                  color: "#676767",
                  textAlign: "start",
                },
                "& thead th": {
                  pb: 1,
                },
              }}
            >
              <thead>
                <tr>
                  <th>Вес(кг)</th>
                  <th>Сумма</th>
                  <th>Cтатус</th>
                  <th>Экспедитор</th>
                  <th>Номер экспед-ра</th>
                </tr>
              </thead>
              <tbody>
                <td>{order?.weight}</td>
                <td>{order?.price}</td>
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
                        order?.status === "new"
                          ? "#DCF2FB"
                          : order?.status === "in_progress"
                          ? "#f3f4f6"
                          : order?.status === "canceled"
                          ? "#FBDCDC"
                          : order?.status === "completed"
                          ? "#EBFBDC"
                          : order?.status === "accepted"
                          ? "#DCF2FB"
                          : order?.status === "preorder" && "#DCF2FB",
                      color:
                        order?.status === "new"
                          ? "#152C68"
                          : order?.status === "in_progress"
                          ? "#111928"
                          : order?.status === "canceled"
                          ? "#ec3f3f"
                          : order?.status === "completed"
                          ? "#3D6815"
                          : order?.status === "accepted"
                          ? "#000"
                          : order?.status === "preorder" && "#152C68",
                    }}
                  >
                    {order?.status === "in_progress" ? (
                      <InProcess />
                    ) : order?.status === "canceled" ? (
                      <Cancelled />
                    ) : order?.status === "completed" ||
                      order?.status === "new" ||
                      order?.status === "accepted" ? (
                      <Check
                        color={
                          order?.status === "completed" ? "#3D6815" : "#152C68"
                        }
                      />
                    ) : (
                      order?.status === "preorder" && <InProcess />
                    )}
                    {order?.status === "new"
                      ? "Принят"
                      : order?.status === "in_progress"
                      ? "В процессе"
                      : order?.status === "canceled"
                      ? "Отменен"
                      : order?.status === "completed"
                      ? "Готово"
                      : order?.status === "accepted"
                      ? "Принят"
                      : order?.status === "preorder" && "Предзаказ"}
                  </Box>
                </td>
                <td>
                  {order?.managers && order?.managers[0]?.name
                    ? order?.managers[0]?.name
                    : "-"}
                </td>
                <td>
                  {order?.managers && order?.managers[0]?.phone
                    ? order?.managers[0]?.phone
                    : "-"}
                </td>
              </tbody>
            </Box>
          </Box>
          <Typography fontWeight={600} fontSize={18}>
            Товары
          </Typography>
          <Box
            mt={1}
            columnGap={2}
            overflow="scroll"
            display="flex"
            flexWrap="nowrap"
          >
            {order?.products?.map((item, idx) => (
              <Card key={idx} setCart={setCart} item={item.product} />
            ))}
          </Box>
          <Box display="flex" mt={2} width="100%" columnGap={2}>
            <Button
              href={order?.document?.url}
              disabled={!order?.document?.url}
              target="_blank"
              sx={{
                borderRadius: "10px",
                background: "#E7E7E7",
                color: "#515151",
                fontFamily: "Open Sans",
                fontWeight: 600,
                width: "50%",
              }}
              variant="contained"
            >
              Посмотреть накладную
            </Button>
            <Link style={{ width: "50%" }} to="/profile/cart/">
              <Button
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                }}
                variant="contained"
                color="primary"
                onClick={() =>
                  localStorage.setItem(
                    "cart",
                    JSON.stringify(
                      order.products?.map((item) => ({
                        count: item.quantity,
                        description: item.product.description,
                        name: item.product.name,
                        img: item?.product?.images[0]?.url,
                        weight: item.product.weight * item.quantity,
                        sum:
                          item?.product?.prices?.find(
                            (item) => item.price.id === data?.price?.id
                          )?.value * item.quantity,
                        price: item?.product?.prices?.find(
                          (item) => item.price.id === data?.price?.id
                        )?.value,
                        id: item.product?.id,
                        idx: item.product.customId,
                      }))
                    )
                  )
                }
              >
                Повторить заказ
              </Button>
            </Link>
          </Box>
        </Dialog>
      ) : (
        <Drawer
          anchor="bottom"
          open={open}
          sx={{
            "& .MuiPaper-root": {
              p: 2,
              borderRadius: "24px 24px 0 0",
              maxHeight: "80vh",
            },
          }}
          onClose={handleClose}
        >
          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex">
              <div>
                <Typography
                  fontWeight={600}
                  color="#000000"
                  fontSize={14}
                  className="sans"
                >
                  Номер заказа:
                </Typography>
                <Typography fontWeight={700} fontSize={18}>
                  {order?.customId}
                </Typography>
              </div>
              <Box ml={5}>
                <Typography
                  fontWeight={600}
                  color="#000000"
                  fontSize={14}
                  className="sans"
                >
                  Дата заказа:
                </Typography>
                <Typography fontWeight={700} fontSize={18}>
                  {order?.createdAt &&
                    new Intl.DateTimeFormat("ru", {
                      dateStyle: "short",
                      timeStyle: "short",
                    }).format(new Date(order?.createdAt))}
                </Typography>
              </Box>
            </Box>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
          <Typography className="sans" fontSize={14} fontWeight={600}>
            {order?.createdAt &&
              new Intl.DateTimeFormat("ru", {
                dateStyle: "short",
                // timeStyle: "short",
              }).format(new Date(order?.createdAt))}
          </Typography>
          <Box
            component="table"
            mt={3}
            mb={2}
            sx={{
              "& tr": {
                "& td:first-child": { color: "#676767", fontWeight: 600 },
              },
              "& td": {
                p: "10px",
                fontFamily: "Open Sans",
                borderBottom: "1px solid #E2E2E2",
              },
            }}
          >
            <tr>
              <td>Вес заказа(кг) </td>
              <td>{order?.weight}</td>
            </tr>
            <tr>
              <td>Сумма </td>
              <td>{order?.price}</td>
            </tr>
            <tr>
              <td>Статус </td>
              <td>
                <Box
                  sx={{
                    Width: 104,
                    height: 22,
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    columnGap: "4px",
                    background:
                      order?.status === "new"
                        ? "#DCF2FB"
                        : order?.status === "in_progress"
                        ? "#f3f4f6"
                        : order?.status === "canceled"
                        ? "#FBDCDC"
                        : order?.status === "completed"
                        ? "#EBFBDC"
                        : order?.status === "accepted"
                        ? "#DCF2FB"
                        : order?.status === "preorder" && "#DCF2FB",
                  }}
                >
                  {order?.status === "in_progress" ? (
                    <InProcess />
                  ) : order?.status === "canceled" ? (
                    <Cancelled />
                  ) : order?.status === "completed" ||
                    order?.status === "new" ||
                    order?.status === "accepted" ? (
                    <Check
                      color={
                        order?.status === "completed" ? "#3D6815" : "#152C68"
                      }
                    />
                  ) : (
                    order?.status === "preorder" && <InProcess />
                  )}
                  {order?.status === "new"
                    ? "Принят"
                    : order?.status === "in_progress"
                    ? "В процессе"
                    : order?.status === "canceled"
                    ? "Отменен"
                    : order?.status === "completed"
                    ? "Готово"
                    : order?.status === "accepted"
                    ? "Принят"
                    : order?.status === "preorder" && "Предзаказ"}
                </Box>
              </td>
            </tr>
            <tr>
              <td>Экспедитор </td>
              <td> {manager?.name ? manager?.name : "-"}</td>
            </tr>
            <tr>
              <td>Номер эксп. </td>
              <td> {manager?.phone ? manager?.phone : "-"}</td>
            </tr>
          </Box>
          <Button
            sx={{
              borderRadius: "10px",
              background: "#E7E7E7",
              color: "#515151",
              fontFamily: "Open Sans",
              fontWeight: 600,
            }}
            fullWidth
            variant="contained"
            disabled={!order?.document?.url}
            href={order?.document?.url}
            target="_blank"
          >
            Посмотреть накладную
          </Button>
          <Typography fontWeight={700} fontSize={20} mb={2} mt={3}>
            Товары
          </Typography>
          {order?.products?.map((item) => (
            <Box borderBottom="1px solid  #F1F1F1" pb="15px" mb="25px">
              <Box display="flex" columnGap={2}>
                <img
                  width={80}
                  height={80}
                  style={{
                    borderRadius: 12,
                    objectFit: "scale-down",
                    minWidth: 80,
                  }}
                  src={item?.product?.images[0]?.url}
                  alt=""
                />
                <div>
                  <Typography
                    className="sans"
                    maxWidth="50%"
                    fontSize={13}
                    fontWeight={600}
                  >
                    {item?.product?.name}
                  </Typography>
                  <Typography
                    className="sans"
                    maxWidth="50%"
                    fontSize={12}
                    color="#797979"
                    fontWeight={600}
                  >
                    {item?.product?.description}
                  </Typography>
                </div>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography className="sans" fontWeight={700} fontSize={18}>
                  {
                    item?.product?.prices?.find((item) =>
                      item.price._id
                        ? item.price._id
                        : item.price?.id === data?.price?.id
                    )?.value
                  }{" "}
                  c
                </Typography>
                <Typography className="sans" fontWeight={700} fontSize={18}>
                  {item?.quantity} кг
                </Typography>
              </Box>
            </Box>
          ))}
          <Link to="/profile/cart">
            <Button
              sx={{
                m: "0 auto",
                borderRadius: "10px",
                mb: { xs: 1.5, md: "62px" },
                fontWeight: 400,
                fontFamily: "Open Sans",
                fontSize: 13,
              }}
              onClick={() => {
                localStorage.setItem(
                  "cart",
                  JSON.stringify(
                    order.products.map((item) => ({
                      count: item.quantity,
                      description: item.product.description,
                      name: item.product.name,
                      img: item?.product?.images[0]?.url,
                      weight: item.product.weight * item.quantity,
                      sum:
                        item?.product?.prices?.find(
                          (item) => item.price.id === data?.price?.id
                        )?.value * item.quantity,
                      price: item?.product?.prices?.find(
                        (item) => item.price.id === data?.price?.id
                      )?.value,
                      id: item.product?.id,
                      idx: item.product.customId,
                    }))
                  )
                );
              }}
              fullWidth
              variant="contained"
            >
              Повторить заказ
            </Button>
          </Link>
        </Drawer>
      )}
    </>
  );
};

export default Preview;

// <Typography variant="h5" fontWeight="bold" mb={4}>
//         Просмотр заказа
//       </Typography>
//       <Box
//         display="flex"
//         maxHeight="70%"
//         overflow="scroll"
//         flexDirection="column"
//         rowGap={3}
//       >
//         <Box display="flex">
//           <img
//             src={img}
//             width={107}
//             height={107}
//             style={{ borderRadius: 12, objectFit: "cover" }}
//             alt=""
//           />
//           <Box ml={2} width="100%">
//             <Box display="flex" justifyContent="space-between">
//               <Typography variant="subtitle2">
//                 Кондитеркая насадка BX103
//               </Typography>
//               <IconButton>
//                 <Delete />
//               </IconButton>
//             </Box>
//             <Typography mb={1.6} fontSize="15px" fontWeight="600">
//               550 c
//             </Typography>
//             <AddOrDelete width={108} />
//           </Box>
//         </Box>
//         <Box display="flex">
//           <img
//             src={img}
//             width={107}
//             height={107}
//             style={{ borderRadius: 12, objectFit: "cover" }}
//             alt=""
//           />
//           <Box ml={2} width="100%">
//             <Box display="flex" justifyContent="space-between">
//               <Typography variant="subtitle2">
//                 Кондитеркая насадка BX103
//               </Typography>
//               <IconButton>
//                 <Delete />
//               </IconButton>
//             </Box>
//             <Typography mb={1.6} fontSize="15px" fontWeight="600">
//               550 c
//             </Typography>
//             <AddOrDelete width={108} />
//           </Box>
//         </Box>
//         <Box display="flex">
//           <img
//             src={img}
//             width={107}
//             height={107}
//             style={{ borderRadius: 12, objectFit: "cover" }}
//             alt=""
//           />
//           <Box ml={2} width="100%">
//             <Box display="flex" justifyContent="space-between">
//               <Typography variant="subtitle2">
//                 Кондитеркая насадка BX103
//               </Typography>
//               <IconButton>
//                 <Delete />
//               </IconButton>
//             </Box>
//             <Typography mb={1.6} fontSize="15px" fontWeight="600">
//               550 c
//             </Typography>
//             <AddOrDelete width={108} />
//           </Box>
//         </Box>
//         <Box display="flex">
//           <img
//             src={img}
//             width={107}
//             height={107}
//             style={{ borderRadius: 12, objectFit: "cover" }}
//             alt=""
//           />
//           <Box ml={2} width="100%">
//             <Box display="flex" justifyContent="space-between">
//               <Typography variant="subtitle2">
//                 Кондитеркая насадка BX103
//               </Typography>
//               <IconButton>
//                 <Delete />
//               </IconButton>
//             </Box>
//             <Typography mb={1.6} fontSize="15px" fontWeight="600">
//               550 c
//             </Typography>
//             <AddOrDelete width={108} />
//           </Box>
//         </Box>
//         <Box display="flex">
//           <img
//             src={img}
//             width={107}
//             height={107}
//             style={{ borderRadius: 12, objectFit: "cover" }}
//             alt=""
//           />
//           <Box ml={2} width="100%">
//             <Box display="flex" justifyContent="space-between">
//               <Typography variant="subtitle2">
//                 Кондитеркая насадка BX103
//               </Typography>
//               <IconButton>
//                 <Delete />
//               </IconButton>
//             </Box>
//             <Typography mb={1.6} fontSize="15px" fontWeight="600">
//               550 c
//             </Typography>
//             <AddOrDelete width={108} />
//           </Box>
//         </Box>
//       </Box>
//       <Box display="flex" alignItems="center" columnGap="50px" mt={4}>
//         <div>
//           <Typography fontSize="15px" component="span" fontWeight="400">
//             Итоговая сумма
//           </Typography>
//           <Typography ml={0.8} component="span" variant="h5" fontWeight="600">
//             15000c
//           </Typography>
//         </div>
//         <Button color="primary" variant="contained">
//           Оплатить
//         </Button>
//       </Box>
