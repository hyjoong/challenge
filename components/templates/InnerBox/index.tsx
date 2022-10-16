import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Tab from "components/atoms/Tab";
import Header from "components/molecules/Header";
import { tabList } from "constants/index";

interface Props {
  children?: React.ReactNode;
}

const InnerBox = ({ children }: Props) => {
  const router = useRouter();
  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { value } = e.target as HTMLButtonElement;
    router.push(`${value}`);
  };

  return (
    <StyledInnerBox>
      <Header />
      <Container>{children}</Container>
      {tabList.map((tab, key) => (
        <Tab
          key={key}
          index={key}
          value={tab.value}
          onClick={handleTabClick}
          isActive={router.pathname === tab.value}
        >
          {tab.title}
        </Tab>
      ))}
    </StyledInnerBox>
  );
};

const StyledInnerBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 748px;
  height: 484px;
  padding: 30px;
  background-image: url(/image/innerBox.png);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0px 12px 10px 6px;
`;

export default InnerBox;
