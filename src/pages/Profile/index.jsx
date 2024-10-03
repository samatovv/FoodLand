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
import React, { useEffect, useRef } from "react";
import NavigateNextIcon from "../../assets/images/NavigateNextIcon";
import { Link } from "react-router-dom";
import InProcess from "../../assets/images/InProcess";
import Check from "../../assets/images/Check";
import Card from "../../components/Card";
import ArrowBackIcon from "../../components/ArrowBackIcon";
import ArrowForwardIcon from "../../components/ArrowForwardIcon";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData, uploadFile } from "../../redux/reducers/profile";
import auth from "../../assets/images/auth.svg";

const Profile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.profile.data);

  const input = useRef(null);

  const handleChange = (event) => {
    var files = new FormData();
    if (event.target.files[0].size > 1000000) alert("Ошибка");
    else {
      files.append("file", event.target.files[0]);
      dispatch(uploadFile(files));
    }
  };

  useEffect(() => {
    dispatch(getProfileData(`66e7172477ef57df7547873c`));
  }, []);

  const breadcrumbs = [
    <Link key="1" to="/">
      Главная
    </Link>,
    <Typography key="2">Мой профиль</Typography>,
    <Typography key="3" sx={{ color: "text.primary" }}>
      Мои заказы
    </Typography>,
  ];
  return (
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
            <Typography variant="subtitle1" mt={1.2} mb={1.2} fontWeight="600">
              {data?.name}
            </Typography>
            <Typography
              variant="body1"
              mb="2px"
              fontWeight="400"
              color="#5B5B5B"
            >
              {data?.email}
            </Typography>
            <Typography
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
                textAlign="center"
                variant="body1"
                color="#848484"
                fontWeight="600"
              >
                Дебиторская задолженность
              </Typography>
              <Typography textAlign="center" variant="h4" fontWeight={600}>
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
              }}
            >
              Редактировать фото
            </Button>
          </Box>
        </Grid2>
        <Grid2 item size={8.9}>
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
                    <th>Номер заказа</th>
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
                  <tr>
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
                  </tr>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
      <Typography variant="h5" mt={4} fontWeight={600}>
        Мои товары
      </Typography>
      <Grid2 container>
        <Grid2 item size={2.4}>
          <Card item={{}} />
        </Grid2>
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
  );
};

export default Profile;
