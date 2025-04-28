import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSectionObserver } from "../lib/useSectionObserver";
import MediaQuery from "react-responsive";
import DesktopVersion from "../components/resultLaptop"
import TabletVersion from "../components/resultTablet";
import PhoneVersion from "../components/resultPhone";

export default function SkinAnalysisLanding({ scrollY = 0 }) {
  

  return (
      <>
        <MediaQuery minWidth={1024}>
          <DesktopVersion />
        </MediaQuery>
  
        <MediaQuery minWidth={768} maxWidth={1023}>
          <TabletVersion />
        </MediaQuery>
  
        <MediaQuery maxWidth={767}>
          <PhoneVersion />
        </MediaQuery>
      </>
  );
}
