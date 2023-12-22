"use client";

import {
  MainContainer,
  FirstBox,
  BoxA,
  SecondBox,
  BoxB1,
  BoxB2,
  InsideBoxB,
} from "./dashboardStyles";
import {
  SportsEsports,
  SportsKabaddi,
  WbTwilight,
  YouTube,
} from "@mui/icons-material";
import { DashboardWrapper } from "../stylesheets";

const Dashboard = () => {
  
  const icons = [
    <SportsEsports />,
    <SportsKabaddi />,
    <WbTwilight />,
    <YouTube />,
  ];

  return (
    <DashboardWrapper>
      <MainContainer>
        <FirstBox>
          {icons.map((icon, index) => (
            <BoxA key={index}>{icon}</BoxA>
          ))}
        </FirstBox>
        <SecondBox>
          <BoxB1>
            <InsideBoxB></InsideBoxB>
            <InsideBoxB></InsideBoxB>
          </BoxB1>
          <BoxB2>
            <InsideBoxB
              sx={{
                height: "150px",
              }}
            ></InsideBoxB>
            <InsideBoxB
              sx={{
                height: "150px",
              }}
            ></InsideBoxB>
            <InsideBoxB
              sx={{
                height: "150px",
              }}
            ></InsideBoxB>
          </BoxB2>
        </SecondBox>
      </MainContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
