import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import img from "../../assets/images/benefits.webp";
import ButtonMore from "../../components/ButtonMore";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      boxRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <Box component="section" p={{ xs: "56px 0", md: "118px 0 152px" }} backgroundColor="#FFFFFF">
      <Container maxWidth="lg">
        <Typography ref={textRef} variant="h3" mb={{ xs: 4, md: "47px" }} fontWeight="bold">
          Ваш путеводитель в области сырья <br />и ингредиентов для пищевой промышленности
        </Typography>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2}>
          <Box
            ref={boxRef}
            minHeight="100%"
            flex={1}
            backgroundColor="#93A27C"
            borderRadius="15px"
            color="#FFF"
            display="flex"
            flexDirection="column"
            alignItems="end"
            justifyContent="end"
            p="30px"
          >
            <Typography fontWeight="700" mb={5.5} lineHeight="123%" fontSize={{ xs: 16, md: 18 }} className="sans">
              Мы гордимся долгосрочными и крепкими отношениями с нашими партнёрами и активно развиваем новые.
            </Typography>
            <Typography fontWeight="300" lineHeight="140%" fontSize={{ xs: 16, md: 16 }} className="sans">
              &#8212; Мы предлагаем вам не просто сырье, а экспертность и индивидуальный подход: всегда готовы помочь
              найти альтернативу, закрыть срочную потребность или предложить уникальное решение.
            </Typography>
          </Box>
          <Box ref={imageRef} flex={1} position="relative">
            <Box component="img" src={img} width="100%" height="100%" alt="Повар накладывает орешки в формочки" />
            <Link to="/about-us">
              <ButtonMore
                sx={{
                  width: 170,
                  position: "absolute",
                  bottom: 30,
                  right: 30,
                  border: "1px solid #B4B4B4",
                  "& .round": {
                    top: 3,
                  },
                  "& span": {
                    fontSize: "12px!important",
                  },
                }}
                txt="Читать далее"
              />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Benefits;
