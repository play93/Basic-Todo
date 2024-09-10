import styled from "styled-components";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  console.log("dsfd");
  return (
    <RootLayoutMain>
      <RootLayoutContents>
        <Outlet />
      </RootLayoutContents>
    </RootLayoutMain>
  );
};

export default RootLayout;

const RootLayoutMain = styled.main`
  background-color: #f6f5f6;
  min-height: 100vh;
`;

const RootLayoutContents = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
`;
