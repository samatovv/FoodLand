import React from "react";
import First from "./First";
// import Benefits from "./Benefits";
import Categories from "./Categories";
import WhyChooseUs from "./WhyChooseUs";
import Partners from "./Partners";
import Recommendations from "./Recommendations";
import OurClients from "./OurClients";
import News from "./News";

const Main = ({setCart}) => {
  return (
    <>
      <First />
      {/* <Benefits /> */}
      <Partners />
      <Categories />
      <WhyChooseUs />
      <Recommendations setCart={setCart} />
      <OurClients />
      <News />
    </>
  );
};

export default Main;
