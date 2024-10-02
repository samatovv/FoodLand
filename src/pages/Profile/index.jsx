import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import NavigateNextIcon from "../../assets/images/NavigateNextIcon";
import { Link } from "react-router-dom";
import img from "../../assets/images/profile.png";
import InProcess from "../../assets/images/InProcess";
import Check from "../../assets/images/Check";

const Profile = () => {
  const breadcrumbs = [
    <Link key="1" to="/">
      Главная
    </Link>,
    <Link key="2" to="/">
      Мой профиль
    </Link>,
    <Typography key="3" sx={{ color: "text.primary" }}>
      Мои заказы
    </Typography>,
  ];
  return (
    <Container sx={{ pt: 6 }} maxWidth="lg">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Grid2 container spacing={4}>
        <Grid2 item size={3.1}>
          <Box
            mt={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p="28px"
            borderRadius="16px"
            border="1px solid #BABABA"
          >
            <img
              src={img}
              width={196}
              height={196}
              style={{
                objectFit: "cover",
                borderRadius: "100px",
              }}
              alt=""
            />
            <Typography variant="h5" mt={3} mb={3} fontWeight="600">
              Сергей Иванович
            </Typography>
            <Typography
              textAlign="center"
              variant="subtitle1"
              color="#848484"
              fontWeight="400"
            >
              Дебиторская задолженность
            </Typography>
            <Typography variant="h4" fontWeight={600}>
              5500
            </Typography>
          </Box>
        </Grid2>
        <Grid2 item size={8.9}>
          <Box
            display="flex"
            mt={2}
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
            component="table"
            sx={{
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
                "& th": {
                  color: "#737680",
                  fontSize: 12,
                  fontWeight: 400,
                  borderBottom: "1px solid #00000008",
                  p: "12px 0",
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
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Profile;
