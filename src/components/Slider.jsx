import React from "react";
import { Carousel } from "flowbite-react";

import Satu from "../assets/images/1.png";
import Dua from "../assets/images/2.png";
import Tiga from "../assets/images/3.png";
import Empat from "../assets/images/4.png";
import Lima from "../assets/images/5.png";

export default function Slider() {
  return (
    <Carousel className="h-[208px] sm:px-16 sm:py-2 md:h-[360px] ">
      <img alt="..." src={Satu} />
      <img alt="..." src={Dua} />
      <img alt="..." src={Tiga} />
      <img alt="..." src={Empat} />
      <img alt="..." src={Lima} />
    </Carousel>
  );
}
