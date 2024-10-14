import React from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";

const Form = ({ formik, cart }) => {
  return (
    <Box
      border={{ xs: "none", md: "1px solid #E2E2E2" }}
      borderRadius="15px"
      p="15px"
      component="form"
      minHeight={{ xs: "unset", md: 609 }}
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h5" mb={2.8} fontWeight="600">
        Оформление заказа
      </Typography>
      <Box borderBottom="1px solid #DDDDDD" pb="24px" mb={3}>
        <Typography className="sans" variant="subtitle2" mb={2} color="#5B5B5B">
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
            control={<Radio required />}
            label="Доставка"
          />
          <FormControlLabel
            value="pickup"
            control={<Radio required />}
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
              variant="subtitle2"
              mb={2}
              color="#5B5B5B"
            >
              Адрес доставки
            </Typography>
            <TextField
              error={
                formik.touched.deliveryAddress && formik.errors.deliveryAddress
              }
              helperText={
                formik.touched.deliveryAddress &&
                formik.errors.deliveryAddress &&
                "Заполните поле"
              }
              name="deliveryAddress"
              onChange={formik.handleChange}
              value={formik.values.deliveryAddress}
              // required
              placeholder="Ваш адрес"
              fullWidth
            />
          </>
        )}
        <Typography
          className="sans"
          mt={2}
          variant="subtitle2"
          mb={2}
          color="#5B5B5B"
        >
          Дата{" "}
          {formik.values.deliveryType === "delivery"
            ? "доставки"
            : "получения заказа"}
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disablePast
            value={formik.values.deliveryDate}
            onChange={(value) => formik.setFieldValue("deliveryDate", value)}
            slotProps={{
              textField: {
                fullWidth: true,
                error:
                  formik.touched.deliveryDate && formik.errors.deliveryDate,
                helperText:
                  formik.touched.deliveryDate &&
                  formik.errors.deliveryDate &&
                  "Заполните поле",
              },
            }}
          />
        </LocalizationProvider>
        <Typography
          className="sans"
          mt={2}
          variant="subtitle2"
          mb={2}
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
      <Box display="flex" mt={5} columnGap={1.5}>
        <Button
          size="small"
          variant="contained"
          fullWidth
          disabled={!cart?.length}
          sx={{ fontSize: 10 }}
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
            fontSize: 10,
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
