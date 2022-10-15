import styled from "styled-components";
import Main from "components/templates/Main";

const Index = () => {
  return (
    <Root>
      <Main />
    </Root>
  );
};

const Root = styled.div`
  width: calc(100% - 33px);
  min-height: calc(100vh - 21px);
  padding: 21px 0 0 33px;
  background-image: url(./image/background.png);
`;

export default Index;
