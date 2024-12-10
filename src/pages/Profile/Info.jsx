import { Box, Button, Typography } from "@mui/material";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileData,
  setUploadedFile,
  updateProfileData,
  uploadFile,
} from "../../redux/reducers/profile";
import auth from "../../assets/images/auth.svg";
import logout from "../../assets/images/logout.svg";
import Alert from "../../components/Alert";
import Logout from "./Logout";
import { handleLoading } from "../../redux/reducers/mainSlice";

const Info = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.profile.data);
  const uploadedFile = useSelector((state) => state.profile.uploadedFile);

  const input = useRef(null);
  const firstUpdate = useRef(true);
  const [open, setOpen] = useState(false);
  const [out, setOut] = useState(false);

  const handleChange = (event) => {
    if (event.target.files[0].size > 1000000) {
      setOpen(true);
      dispatch(
        setUploadedFile({
          data: {
            message:
              "Размер файла слишком большой, попробуйте другое изображение",
          },
        })
      );
    } else {
      const formData = new FormData();
      formData.append("file", event.target.files[0]);
      dispatch(uploadFile(formData));
      dispatch(handleLoading(true));
    }
  };

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    dispatch(handleLoading(false));

    if (uploadedFile?.status === 201) {
      dispatch(
        updateProfileData({
          id: data?.id,
          image: uploadedFile.data,
        })
      );
    } else if (uploadedFile?.status === 200) {
      dispatch(getProfileData());
      setOpen(true);
    }
  }, [uploadedFile]);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={{ xs: "16px 16px 0 16px", md: "28px 0" }}
        borderRadius="16px"
        mt={{ xs: 4, md: 0 }}
        border="1px solid #BABABA"
      >
        <Box
          display="flex"
          mb={{ xs: 2, md: 0 }}
          flexDirection={{ xs: "row", md: "column" }}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            component="img"
            src={!data?.image?.url ? auth : data?.image?.url}
            width={100}
            height={100}
            mr={{ xs: 2, md: 0 }}
            sx={{
              objectFit: "cover",
              borderRadius: "100px",
            }}
            alt=""
          />
          <div>
            <Typography
              className="sans"
              variant="subtitle1"
              textAlign="center"
              mt={1.2}
              mb={1.2}
              fontWeight="600"
            >
              {data?.name}
            </Typography>
            <Typography
              className="sans"
              variant="body1"
              mb="2px"
              fontWeight="400"
              color="#5B5B5B"
              textAlign={{ xs: "start", md: "center" }}
            >
              {data?.email}
            </Typography>
            <Typography
              className="sans"
              variant="body1"
              mb={2.5}
              fontWeight="400"
              textAlign={{ xs: "start", md: "center" }}
              color="#5B5B5B"
            >
              {data?.phone}
            </Typography>
          </div>
        </Box>
        <Box
          borderTop="1px solid #E2E2E2"
          borderBottom="1px solid #E2E2E2"
          p="15px 0"
          width="100%"
          mb={{ xs: 1.5, md: "50px" }}
        >
          <Typography
            className="sans"
            textAlign="center"
            variant="body1"
            color="#848484"
            fontWeight="600"
          >
            Дебиторская задолженность
          </Typography>
          <Typography
            className="sans"
            color="var(--primary)"
            textAlign="center"
            variant="h4"
            fontWeight={600}
          >
            {data?.debt}
          </Typography>
        </Box>
        <input
          type="file"
          id="upload"
          ref={input}
          onChange={handleChange}
          accept="image/*"
          style={{ display: "none" }}
        />
        <Button
          onClick={() => input.current.click()}
          variant="contained"
          sx={{
            m: "0 auto",
            backgroundColor: "#F5F5F5",
            borderRadius: "10px",
            color: "#5B5B5B",
            fontWeight: 400,
            mb: 2,
            fontFamily: "Open Sans",
            fontSize: 13,
          }}
        >
          Редактировать фото
        </Button>
        <Button
          sx={{
            color: "var(--primary)",
            "&:hover svg path": {
              fill: "#FFF",
            },
          }}
          onClick={() => setOut(true)}
        >
          <svg
            width="18"
            height="18"
            style={{ marginRight: 8 }}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.74547 8.35866C6.38089 8.35866 6.09261 8.64199 6.09261 9.00033C6.09261 9.35033 6.38089 9.64199 6.74547 9.64199H11.8327V13.6253C11.8327 15.667 10.1454 17.3337 8.05967 17.3337H3.93055C1.85327 17.3337 0.166016 15.6753 0.166016 13.6337V4.37533C0.166016 2.32533 1.86175 0.666992 3.93903 0.666992H8.07663C10.1454 0.666992 11.8327 2.32533 11.8327 4.36699V8.35866H6.74547ZM14.8578 6.11716L17.2912 8.54216C17.4162 8.66716 17.4828 8.82549 17.4828 9.00049C17.4828 9.16716 17.4162 9.33383 17.2912 9.45049L14.8578 11.8755C14.7328 12.0005 14.5662 12.0672 14.4078 12.0672C14.2412 12.0672 14.0745 12.0005 13.9495 11.8755C13.6995 11.6255 13.6995 11.2172 13.9495 10.9672L15.2828 9.64216H11.8328V8.35883H15.2828L13.9495 7.03383C13.6995 6.78383 13.6995 6.37549 13.9495 6.12549C14.1995 5.86716 14.6078 5.86716 14.8578 6.11716Z"
              fill="#93A27C"
            />
          </svg>
          Выйти из аккаунта
        </Button>
      </Box>
      <Logout open={out} close={() => setOut(false)} />
      <Alert
        message={
          uploadedFile?.status === 200
            ? "Ваша аватарка успешно обновлена"
            : uploadedFile?.data?.message
        }
        open={open}
        severity={uploadedFile?.status === 200 ? "success" : "error"}
        setOpen={() => setOpen(false)}
      />
    </>
  );
};

export default Info;
