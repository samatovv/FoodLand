import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ButtonMore from "../../components/ButtonMore";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { getBanner } from "../../redux/reducers/mainSlice";
import Search from "../../shared/Search";
import gsap from "gsap";

const First = () => {
  const dispatch = useDispatch();
  const banner = useSelector((state) => state.main.banner);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const searchRef = useRef(null);

  const firstAnimated = useRef(sessionStorage.getItem("firstAnimated") === "true");
  const [isFirstLoad, setIsFirstLoad] = useState(!firstAnimated.current);

  useEffect(() => {
    if (!banner?.results?.length) {
      dispatch(getBanner(`/banners?type=main`));
    }
  }, []);

  useEffect(() => {
    if (banner?.results?.length > 0) {
      const delay = isFirstLoad ? 1.5 : 0; 

      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out", delay }
      );

      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: delay + 0.5 }
      );

      gsap.fromTo(
        [searchRef.current, buttonRef.current],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.3, delay: delay + 1 }
      );

      firstAnimated.current = true;
      sessionStorage.setItem("firstAnimated", "true");

      setIsFirstLoad(false);
    }
  }, [banner]);

  useEffect(() => {
    const clearSession = () => sessionStorage.removeItem("firstAnimated");
    window.addEventListener("beforeunload", clearSession);
    return () => window.removeEventListener("beforeunload", clearSession);
  }, []);


  return (
    <Box
      ref={containerRef}
      component="section"
      className="first"
      p="0 0 0"
      maxHeight="100vh"
      minHeight="100vh"
      height="100%"
      sx={{
        background: `url(${Array.isArray(banner?.results) && banner?.results[0]?.imageUrl}) center/cover no-repeat;`,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: "97px", md: "314px" },
        }}
      >
        <Typography
          ref={titleRef}
          fontWeight="bold"
          lineHeight="110%"
          variant="h1"
          m={{ xs: "0 auto", md: "unset" }}
          color="#FFFFFF"
          maxWidth={{ xs: 299, md: 620 }}
          textAlign={{ xs: "center", md: "start" }}
        >
          Ваш путеводитель в области сырья
        </Typography>
        <Box
          mt={{ xs: 5, md: 6 }}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          rowGap={2}
        >
          <Box ref={searchRef} sx={{ zIndex: 10, position: "relative" }}>
            <Search />
          </Box>
          <Box ref={buttonRef}>
            <ButtonMore
              sx={{
                width: { xs: "100%", md: 193, borderRadius: "15px" },
                ml: { xs: 0, md: "34.5px" },
                fontFamily: "Open Sans",
                fontWeight: 400,
                fontSize: 16,
              }}
              txt="Заказать звонок"
              href="tel:+996 550 114 477"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default First;
