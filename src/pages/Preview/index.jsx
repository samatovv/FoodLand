import {
  Box,
  Button,
  Chip,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Close from "../../assets/images/Close";
import InProcess from "../../assets/images/InProcess";
import Cancelled from "../../assets/images/Cancelled";
import Check from "../../assets/images/Check";
import { Link } from "react-router-dom";

const Preview = ({ open, setOpen }) => {
  const order = useSelector((state) => state.profile.order);
  const manager = Array.isArray(order.managers) && order?.managers[0];
  return (
    <Drawer
      anchor="bottom"
      open={open}
      sx={{
        "& .MuiPaper-root": {
          p: 2,
          borderRadius: "24px 24px 0 0",
          maxHeight: "50vh",
        },
      }}
      onClose={() => setOpen(false)}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography fontWeight={700} variant="h4">
          №{order?.customId}
        </Typography>
        <IconButton>
          <Close />
        </IconButton>
      </Box>
      <Box
        component="table"
        mt={3}
        mb={2}
        sx={{
          "& tr": { "& td:first-child": { color: "#676767", fontWeight: 600 } },
          "& td": {
            p: "10px",
            fontFamily: "Open Sans",
            borderBottom: "1px solid #E2E2E2",
          },
        }}
      >
        <tr>
          <td>Номер заказа</td>
          <td>№ {order?.customId}</td>
        </tr>
        <tr>
          <td>Колличество </td>
          <td>{order?.products?.length}</td>
        </tr>
        <tr>
          <td>Стоимость </td>
          <td>{order?.price}</td>
        </tr>
        <tr>
          <td>Статус </td>
          <td>
            {" "}
            <Chip
              icon={
                order?.status === "new" ? (
                  <InProcess />
                ) : order.status === "canceled" ? (
                  <Cancelled />
                ) : order.status === "completed" ? (
                  <Check />
                ) : order.status === "accepted" ? (
                  <Check />
                ) : (
                  order.status === "preorder" && <InProcess />
                )
              }
              sx={{
                "& .MuiChip-label": {
                  p: { xs: "0 2px", md: "0 12px" },
                },
                minWidth: { xs: 120, md: 129 },
                maxWidth: { xs: 104, md: 129 },
                background:
                  order?.status === "new"
                    ? "#f3f4f6"
                    : order.status === "canceled"
                    ? "#FBDCDC"
                    : order.status === "completed"
                    ? "#EBFBDC"
                    : order.status === "accepted"
                    ? "#DCF2FB"
                    : order.status === "preorder" && "#DCF2FB",
              }}
              label={
                order?.status === "new"
                  ? "В процессе"
                  : order.status === "canceled"
                  ? "Отменен"
                  : order.status === "completed"
                  ? "Готово"
                  : order.status === "accepted"
                  ? "Принят"
                  : order.status === "preorder" && "Предзаказ"
              }
            />
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
      <Link to="/profile/cart">
        <Button
          sx={{
            m: "0 auto",
            backgroundColor: "#F5F5F5",
            borderRadius: "10px",
            color: "#5B5B5B",
            mb: { xs: 1.5, md: "62px" },
            fontWeight: 400,
            fontFamily: "Open Sans",
            fontSize: 13,
          }}
          onClick={() =>
            localStorage.setItem(
              "cart",
              JSON.stringify(
                order.products.map((item) => ({
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
          fullWidth
          variant="contained"
        >
          Повторить заказ
        </Button>
      </Link>
    </Drawer>
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
