import { Box, Container, Grid, Pagination, PaginationItem, Typography } from "@mui/material";
import React from "react";
import ButtonMore from "../../components/ButtonMore";
import Card from "../../components/Card";
import ArrowBackIcon from "../../components/ArrowBackIcon";
import ArrowForwardIcon from "../../components/ArrowForwardIcon";

const Recommendations = () => {
  return (
    <Box component="section" p="76px 0">
      <Container maxWidth="lg">
        <Box
          display="flex"
          mb={4}
          justifyContent="space-between"
          alignItems="end"
        >
          <div>
            <Typography
              variant="h6"
              color="var(--primary-light)"
              fontWeight="medium"
            >
              Вам могут понравится
            </Typography>
            <Typography variant="h2" fontWeight="bold" maxWidth={681} mt={1}>
              Рекомендуемые товары
            </Typography>
          </div>
          <ButtonMore txt="Все товары" />
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <Card />
          </Grid>
          <Grid item xs={3}>
            <Card />
          </Grid>
          <Grid item xs={3}>
            <Card />
          </Grid>
          <Grid item xs={3}>
            <Card />
          </Grid>
        </Grid>
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
    </Box>
  );
};

export default Recommendations;
