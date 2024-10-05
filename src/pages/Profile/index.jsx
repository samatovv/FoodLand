import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Container,
  Grid2,
  Pagination,
  PaginationItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import NavigateNextIcon from "../../assets/images/NavigateNextIcon";
import { Link } from "react-router-dom";
import InProcess from "../../assets/images/InProcess";
import Check from "../../assets/images/Check";
import Card from "../../components/Card";
import ArrowBackIcon from "../../components/ArrowBackIcon";
import ArrowForwardIcon from "../../components/ArrowForwardIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileData,
  updateProfileData,
  uploadFile,
} from "../../redux/reducers/profile";
import auth from "../../assets/images/auth.svg";
import Table from "./Table";
import Alert from "../../components/Alert";

const Profile = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.profile.data);
  const uploadedFile = useSelector((state) => state.profile.uploadedFile);

  const input = useRef(null);
  const firstUpdate = useRef(true);
  const [open, setOpen] = useState(false);

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
          id: `66f63b2791771229369aff0a`,
          image: uploadedFile.data,
        })
      );
    } else if (uploadedFile.status === 200) {
      dispatch(getProfileData());
      setOpen(true);
    }
  }, [uploadedFile]);

  useEffect(() => {
    dispatch(getProfileData());
  }, []);

  const breadcrumbs = [
    <Link key="1" className="sans" to="/">
      Главная
    </Link>,
    <Typography className="sans" key="2">
      Мой профиль
    </Typography>,
    <Typography className="sans" key="3" sx={{ color: "text.primary" }}>
      Мои заказы
    </Typography>,
  ];

  return (
    <>
      <Container sx={{ pt: 6, pb: "52px" }} maxWidth="lg">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Grid2 container spacing={2} mt={2}>
          <Grid2 item size={3.1}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              p="28px 0"
              borderRadius="16px"
              border="1px solid #BABABA"
            >
              <img
                src={!data?.image?.url ? auth : data?.image?.url}
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                  borderRadius: "100px",
                }}
                alt=""
              />
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
              >
                {data?.email}
              </Typography>
              <Typography
                className="sans"
                variant="body1"
                mb={2.5}
                fontWeight="400"
                color="#5B5B5B"
              >
                {data?.phone}
              </Typography>
              <Box
                borderTop="1px solid #E2E2E2"
                borderBottom="1px solid #E2E2E2"
                p="15px 0"
                width="100%"
                mb="50px"
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
                  mb: "62px",
                  fontWeight: 400,
                  fontFamily: "Open Sans",
                }}
              >
                Редактировать фото
              </Button>
            </Box>
          </Grid2>
          <Grid2 item size={8.9}>
            <Table />
          </Grid2>
        </Grid2>
        <Typography variant="h5" mt={4} fontWeight={600}>
          Мои товары
        </Typography>
        <Grid2 container>
          {/* <Grid2 item size={2.4}>
          <Card item={{}} />
        </Grid2> */}
        </Grid2>
        <Box display="flex" justifyContent="center" mt={5}>
          <Pagination
            size="large"
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
            count={5}
            color="primary"
          />
        </Box>{" "}
      </Container>
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

export default Profile;
