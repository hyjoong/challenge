import React, { useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Text from "components/atoms/Text";
import Title from "components/atoms/Title";

const Header = () => {
  const [today, setToday] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const router: any = useRouter();

  useLayoutEffect(() => {
    const beforeToday = sessionStorage.getItem("today");
    if (
      router.pathname === "/" &&
      Object.keys(router.components).length === 2
    ) {
      sessionStorage.setItem("today", String(Number(beforeToday) + 1));
      sessionStorage.setItem("total", String(Number(beforeToday) + 10001));
      setToday(Number(sessionStorage.getItem("today")));
      setTotal(Number(sessionStorage.getItem("total")));
    } else {
      setToday(Number(sessionStorage.getItem("today")));
      setTotal(Number(sessionStorage.getItem("total")));
    }
  }, []);
  return (
    <StyledHeader>
      <VisitorsCount>
        <Text>TODAY </Text>
        <Text>{today}</Text>
        <Text> | </Text>
        <Text>TOTAL {total}</Text>
      </VisitorsCount>
      <MainHeader>
        <Title>사이좋은 사람들, 싸이월드</Title>
        <SettingText>
          <Text>사생활보호설정</Text>
          <Text>▶️</Text>
        </SettingText>
      </MainHeader>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  padding: 25px 0 3px 0;
  display: flex;
  width: 100%;
`;

const VisitorsCount = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 3px;
  width: 220px;

  p {
    :nth-child(2) {
      color: ${({ theme }) => theme.color.red};
      margin: 0 3px;
    }

    :nth-child(3) {
      display: flex;
      margin: 0 8px;
      color: ${({ theme }) => theme.color.skyBlue};
    }

    :nth-child(3) {
      margin: 0 8px;
    }
  }
`;

const MainHeader = styled.div`
  display: flex;
  width: 500px;
  margin: 0 10px;
  justify-content: space-between;
`;

const SettingText = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  p {
    :nth-child(2) {
      color: ${({ theme }) => theme.color.darkOrange};
    }
  }
`;

export default Header;
