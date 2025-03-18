import React from "react";
import { NavigationButtons } from "./NavigationButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  return (
    <div className="relative w-[1512px] h-[130px] bg-[#000000cc]">
      <div className="absolute top-[69px] left-[120px] font-exo2 text-white text-3xl tracking-[-3.00px] leading-5 whitespace-nowrap">
        JSK Video Editing
      </div>

      <div className="gap-[60px] absolute top-[60px] left-[399px] inline-flex items-center justify-center">
        <NavigationButtons
          className="!flex-[0_0_auto]"
          property1="default"
          text="HOME"
        />
        <NavigationButtons
          className="!flex-[0_0_auto]"
          property1="default"
          text="ABOUT"
        />
        <NavigationButtons
          className="!flex-[0_0_auto]"
          property1="default"
          text="PORTFOLIO"
        />
        <NavigationButtons
          className="!flex-[0_0_auto]"
          property1="default"
          text="TESTIMONIALS"
        />
        <NavigationButtons
          className="!flex-[0_0_auto]"
          property1="default"
          text="CONTACT"
        />
      </div>

      <div className="inline-flex items-center justify-center gap-[19px] absolute top-[70px] left-[1295px]">
        <div className="flex space-x-4">
          <FontAwesomeIcon
            icon={faFacebook}
            className="w-5 h-5 text-blue-600"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-5 h-5 text-blue-700"
          />
          <FontAwesomeIcon icon={faYoutube} className="w-5 h-5 text-red-600" />
        </div>
      </div>
    </div>
  );
};
