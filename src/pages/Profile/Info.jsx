import { Box, Button, Typography } from "@mui/material";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileData,
  updateProfileData,
  uploadFile,
} from "../../redux/reducers/profile";
import auth from "../../assets/images/auth.svg";
import logout from "../../assets/images/logout.svg";
import Alert from "../../components/Alert";
import Logout from "./Logout";

const Info = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.profile.data);
  const uploadedFile = useSelector((state) => state.profile.uploadedFile);

  const input = useRef(null);
  const firstUpdate = useRef(true);
  const [open, setOpen] = useState(false);
  const [out, setOut] = useState(false);

  const handleChange = (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    dispatch(uploadFile(formData));
  };

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (uploadedFile.status === 201) {
      dispatch(
        updateProfileData({
          id: data.id,
          image: uploadedFile.data,
        })
      );
    } else if (uploadedFile.status === 200) {
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
        <Button onClick={() => setOut(true)}>
          <img src={logout} style={{ marginRight: 8 }} alt="" />
          Выйти из аккаунта
        </Button>
      </Box>
      <Logout open={out} close={() => setOut(false)} />
      <Alert
        message={
          uploadedFile.status === 200
            ? "Ваша аватарка успешно обновлена"
            : uploadedFile?.data?.message
        }
        open={open}
        severity={uploadedFile.status === 200 ? "success" : "error"}
        setOpen={() => setOpen(false)}
      />
    </>
  );
};

export default Info;
