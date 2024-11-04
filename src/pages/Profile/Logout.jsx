import { Box, Button, Dialog, Typography } from "@mui/material";
import cookie from "cookie_js";
import React from "react";
import { useNavigate } from "react-router";

const Logout = ({ open, close }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    cookie.removeSpecific("foodland_token");
    sessionStorage.clear();
    navigate("/");
    localStorage.clear();
  };
  return (
    <Dialog
      open={open}
      onClose={close}
      sx={{
        "& .MuiPaper-root": {
          p: { xs: "39px 42px", md: "96px 64px" },
          borderRadius: "24px",
        },
      }}
    >
      <Typography
        fontSize={{ xs: 16, md: 24 }}
        fontWeight={700}
        mb={{ xs: 5, md: 6 }}
        maxWidth={315}
        textAlign="center"
      >
        Вы точно хотите выйти из аккатунта?
      </Typography>
      <Box
        maxWidth={205}
        width={205}
        m="0 auto"
        display="flex"
        flexDirection="column"
        rowGap={2}
      >
        <Button
          onClick={close}
          fullWidth
          size="small"
          variant="contained"
          color="primary"
        >
          Вернуться
        </Button>
        <Button
          onClick={handleLogout}
          fullWidth
          sx={{ color: "var(--primary)" }}
          size="small"
          variant="outlined"
          color="primary"
        >
          Выйти
        </Button>
      </Box>
    </Dialog>
  );
};

export default Logout;
