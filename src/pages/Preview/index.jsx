import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleDrawer } from "../../redux/reducers/mainSlice";
import img from "../../assets/images/1.webp";
import Delete from "../../assets/images/Delete";
import AddOrDelete from "../../components/AddOrDelete";

const Preview = () => {
  const open = useSelector((state) => state.main.open);
  const dispatch = useDispatch();
  return (
    <Drawer
      anchor="right"
      open={open}
      sx={{
        "& .MuiPaper-root": {
          p: "40px",
          width: "30%",
        },
      }}
      onClose={() => dispatch(handleDrawer())}
    >
      <Typography variant="h5" fontWeight="bold" mb={4}>
        Просмотр заказа
      </Typography>
      <Box
        display="flex"
        maxHeight="70%"
        overflow="scroll"
        flexDirection="column"
        rowGap={3}
      >
        <Box display="flex">
          <img
            src={img}
            width={107}
            height={107}
            style={{ borderRadius: 12, objectFit: "cover" }}
            alt=""
          />
          <Box ml={2} width="100%">
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle2">
                Кондитеркая насадка BX103
              </Typography>
              <IconButton>
                <Delete />
              </IconButton>
            </Box>
            <Typography mb={1.6} fontSize="15px" fontWeight="600">
              550 c
            </Typography>
            <AddOrDelete width={108} />
          </Box>
        </Box>
        <Box display="flex">
          <img
            src={img}
            width={107}
            height={107}
            style={{ borderRadius: 12, objectFit: "cover" }}
            alt=""
          />
          <Box ml={2} width="100%">
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle2">
                Кондитеркая насадка BX103
              </Typography>
              <IconButton>
                <Delete />
              </IconButton>
            </Box>
            <Typography mb={1.6} fontSize="15px" fontWeight="600">
              550 c
            </Typography>
            <AddOrDelete width={108} />
          </Box>
        </Box>
        <Box display="flex">
          <img
            src={img}
            width={107}
            height={107}
            style={{ borderRadius: 12, objectFit: "cover" }}
            alt=""
          />
          <Box ml={2} width="100%">
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle2">
                Кондитеркая насадка BX103
              </Typography>
              <IconButton>
                <Delete />
              </IconButton>
            </Box>
            <Typography mb={1.6} fontSize="15px" fontWeight="600">
              550 c
            </Typography>
            <AddOrDelete width={108} />
          </Box>
        </Box>
        <Box display="flex">
          <img
            src={img}
            width={107}
            height={107}
            style={{ borderRadius: 12, objectFit: "cover" }}
            alt=""
          />
          <Box ml={2} width="100%">
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle2">
                Кондитеркая насадка BX103
              </Typography>
              <IconButton>
                <Delete />
              </IconButton>
            </Box>
            <Typography mb={1.6} fontSize="15px" fontWeight="600">
              550 c
            </Typography>
            <AddOrDelete width={108} />
          </Box>
        </Box>
        <Box display="flex">
          <img
            src={img}
            width={107}
            height={107}
            style={{ borderRadius: 12, objectFit: "cover" }}
            alt=""
          />
          <Box ml={2} width="100%">
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle2">
                Кондитеркая насадка BX103
              </Typography>
              <IconButton>
                <Delete />
              </IconButton>
            </Box>
            <Typography mb={1.6} fontSize="15px" fontWeight="600">
              550 c
            </Typography>
            <AddOrDelete width={108} />
          </Box>
        </Box>
      </Box>
      <Box display="flex" alignItems='center' columnGap='50px' mt={4}>
        <div>
          <Typography fontSize="15px" component="span" fontWeight="400">
            Итоговая сумма
          </Typography>
          <Typography ml={0.8} component="span" variant="h5" fontWeight="600">
            15000c
          </Typography>
        </div>
				<Button color="primary" variant="contained">Оплатить</Button>
      </Box>
    </Drawer>
  );
};

export default Preview;
