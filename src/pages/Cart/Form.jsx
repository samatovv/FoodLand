import React, { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import Calendar from "../../assets/images/Calendar";

import "dayjs/locale/ru";
import Close from "../../assets/images/Close";

const Form = ({ formik, cart, close }) => {
  const md = useMediaQuery("(min-width:769px)");

  return (
    <Box
      border={{ xs: "none", md: "1px solid #E2E2E2" }}
      borderRadius="15px"
      p="15px"
      component="form"
      minHeight={{ xs: "unset", md: 609 }}
      onSubmit={formik.handleSubmit}
    >
      <Box
        display="flex"
        mb={{ xs: "0", md: "47px" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize={25} fontWeight="600">
          Оформление заказа
        </Typography>
        {!md && (
          <IconButton onClick={close}>
            <Close />
          </IconButton>
        )}
      </Box>
      <Box borderBottom="1px solid #DDDDDD" pb="24px" mb={3}>
        <Typography
          className="sans"
          fontSize={16}
          fontWeight="500"
          mb={2}
          color="#5B5B5B"
        >
          Метод доставки
        </Typography>
        <RadioGroup
          required
          defaultValue="delivery"
          name="deliveryType"
          sx={{
            "& .MuiTypography-root": {
              fontFamily: "Open Sans",
              color: "#626262",
            },
          }}
          value={formik.values.deliveryType}
          onChange={formik.handleChange}
        >
          <FormControlLabel
            value="delivery"
            control={<Radio required size="small" />}
            label="Доставка"
          />
          <FormControlLabel
            value="pickup"
            control={<Radio required size="small" />}
            label="Самовывоз"
          />
        </RadioGroup>
      </Box>
      <Box
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #E2E2E2!important",
          },
        }}
      >
        {formik.values.deliveryType === "delivery" && (
          <>
            <Typography
              className="sans"
              fontWeight={500}
              fontSize={16}
              mb={0.5}
              color="#5B5B5B"
            >
              Адрес доставки
            </Typography>
            <TextField
              name="deliveryAddress"
              error={formik.errors.deliveryAddress}
              onChange={formik.handleChange}
              value={formik.values.deliveryAddress}
              helperText={formik.errors.deliveryAddress && "Заполните поле*"}
              placeholder="Ваш адрес"
              fullWidth
            />
          </>
        )}
        <Typography
          className="sans"
          mt={2}
          fontSize={16}
          mb={0.5}
          fontWeight={500}
          color="#5B5B5B"
        >
          Дата{" "}
          {formik.values.deliveryType === "delivery"
            ? "доставки"
            : "получения заказа"}
        </Typography>
        <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            disablePast
            value={formik.values.deliveryDate}
            onChange={(value) => formik.setFieldValue("deliveryDate", value)}
            format="DD-MM-YYYY"
            slots={{ openPickerIcon: Calendar }}
            slotProps={{
              textField: {
                fullWidth: true,
              },
            }}
          />
        </LocalizationProvider>
        <Typography
          className="sans"
          fontSize={16}
          fontWeight={500}
          mt={2}
          mb={0.5}
          color="#5B5B5B"
        >
          Комментарии
        </Typography>
        <TextField
          name="comment"
          onChange={formik.handleChange}
          value={formik.values.comment}
          placeholder="Ваши комментарии к заказу"
          fullWidth
        />
      </Box>
      {cart && (
        <Box
          display="flex"
          justifyContent="space-between"
          mt={4}
          alignItems="baseline"
        >
          <Typography className="sans" fontSize={25} fontWeight="700">
            Итого:
          </Typography>
          <Typography fontSize={25} fontWeight="700">
            {cart &&
              cart?.reduce(
                (total, amount) => total + parseInt(amount.sum),
                0
              )}{" "}
            c
          </Typography>
        </Box>
      )}

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        rowGap={1.5}
        mt={5}
        columnGap={1.5}
      >
        <Button
          size="small"
          variant="contained"
          fullWidth
          disabled={!cart?.length}
          sx={{ fontSize: 14, fontWeight: "600" }}
          onClick={() => formik.setFieldValue("status", "new")}
          color="primary"
          type="submit"
        >
          Оформить заказ
        </Button>
        <Button
          size="small"
          variant="contained"
          disabled={!cart?.length}
          fullWidth
          onClick={() => formik.setFieldValue("status", "preorder")}
          sx={{
            border: "1px solid #DBDBDB",
            fontSize: 14,
            color: "#000",
            p: "11px 29px!important",
          }}
          color="secondary"
          type="submit"
        >
          Оформить предзаказ
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
