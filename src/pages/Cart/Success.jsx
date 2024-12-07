import { Box, Button, Dialog, IconButton, Typography } from "@mui/material";
import React from "react";
import close from "../../assets/images/close.svg";
import { Link } from "react-router-dom";

const Success = ({ setOpen, open, reorder, formik }) => {
  const handleClose = () => {
    setOpen(false);
    if (formik.values.deliveryType === "pickup") {
      formik.resetForm();
      formik.setFieldValue("deliveryType", "pickup");
    } else {
      formik.resetForm();
    }
  };
  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          p: { xs: "16px 12px 92px", lg: "40px 15px 40px" },
          borderRadius: "32px",
          minWidth: { xs: "unset", lg: 453 },
        },
      }}
      onClose={handleClose}
      open={open}
    >
      {/* <IconButton
        sx={{
          width: "fit-content",
          alignSelf: "end",
          mb: "27px",
        }}
        onClick={handleClose}
      >
        <img src={close} alt="" />
      </IconButton> */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <svg
          width="104"
          height="103"
          viewBox="0 0 104 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52 0C23.6043 0 0.5 23.1043 0.5 51.5C0.5 79.8957 23.6043 103 52 103C80.3957 103 103.5 79.8957 103.5 51.5C103.5 23.1043 80.3957 0 52 0ZM80.7839 37.9475L47.8707 70.6036C45.9347 72.5396 42.8364 72.6682 40.7718 70.7321L23.3472 54.8554C21.2825 52.9193 21.1539 49.6925 22.9589 47.6279C24.895 45.5632 28.1218 45.4347 30.1864 47.3707L43.9961 60.0207L73.4254 30.5914C75.49 28.5268 78.7168 28.5268 80.7814 30.5914C82.8461 32.6561 82.8461 35.8829 80.7814 37.9475H80.7839Z"
            fill="#93A27C"
          />
        </svg>
        <Typography
          variant="h4"
          fontWeight={700}
          mt={{ xs: "28px", md: 6 }}
          mb={{ xs: 1, md: 2.2 }}
        >
          {formik?.values?.status === "preorder"
            ? "Ваш предзаказ оформлен!"
            : reorder
            ? "Ваш заказ повторно оформлен!"
            : "Ваш заказ оформлен!"}
        </Typography>
        <Typography
          className="sans"
          variant="subtitle1"
          fontWeight={400}
          mb={3}
          maxWidth={378}
          // lineHeight={1.2}
          textAlign="center"
        >
          {formik?.values?.status === "preorder"
            ? "Предзаказ оформлен."
            : "Заказ оформлен."}
          Спасибо! Мы свяжемся с вами для подтверждения.
        </Typography>

        <Link to="/catalog">
          <Button variant="contained" size="large">
            В каталог
          </Button>
        </Link>

        <Link to="/catalog">
          <Button
            variant="outlined"
            size="large"
            sx={{
              mt: 2,
              color: "var(--primary)",
            }}
          >
            Мои заказы
          </Button>
        </Link>
      </Box>
    </Dialog>
  );
};

export default Success;
