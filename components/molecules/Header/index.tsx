import React from "react";
import styled from "styled-components";
import Text from "components/atoms/Text";
import Title from "components/atoms/Title";

const Header = () => {
  return (
    <StyledHeader>
      <VisitorsCount>
        <Text>TODAY </Text>
        <Text>0</Text>
        <Text> | </Text>
        <Text>TOTAL 12345</Text>
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
