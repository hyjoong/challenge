import React, { useState } from "react";
import styled from "styled-components";
import {
  BoardReturn,
  GetNewsQueryResult,
  GetNewsQueryVariables,
  useGetNewsQuery,
} from "lib/graphql/queries/schema";
import { useRouter } from "next/router";
import NewsItem from "components/molecules/NewsItem";
import Title from "components/atoms/Title";
import Divider from "components/atoms/Divider";
import Text from "components/atoms/Text";
import { bgmList, dashboardList } from "constants/index";
import Checkbox from "components/molecules/Checkbox";
import CheckboxInput from "components/atoms/CheckboxInput";
import Chip from "components/atoms/Chip";
import Contents from "../Contents";

const MainBoard = () => {
  const router = useRouter();
  const DEFAULT_PAGE = 0;
  const [checkItems, setCheckItems] = useState<string[]>([]);

  const { data: newsData, loading } = useGetNewsQuery({
    variables: { input: DEFAULT_PAGE } as GetNewsQueryVariables,
  }) as GetNewsQueryResult;

  if (!newsData) {
    return <div>network Error</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }

  const slicedData = newsData?.fetchBoards?.slice(0, 4);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const newArray = [...checkItems];
    if (checked) {
      setCheckItems([...newArray, value]);
    } else if (!checked && checkItems.includes(value)) {
      setCheckItems(newArray.filter((el) => el !== value));
    }
  };

  const handleAllCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    if (checked) {
      const newArray = new Array();
      bgmList.forEach((el) => newArray.push(`${el.song}`));
      setCheckItems(newArray);
    } else {
      setCheckItems([]);
    }
  };

  const handleNewsClick = (id: BoardReturn["number"]) => {
    router.push(`/diary/${id}`);
  };

  return (
    <Contents>
      <ContentBoards>
        <div>
          <Title>Update news</Title>
          <Divider />
          {newsData?.fetchBoards?.length === 0 ? (
            <div>new Data undefined</div>
          ) : (
            <>
              {slicedData?.map((news, index) => (
                <NewsItem
                  title={news.title}
                  id={news.number}
                  key={index}
                  onClick={handleNewsClick}
                />
              ))}
            </>
          )}
        </div>
        <Dashboard>
          {dashboardList.map((item, index) => (
            <div className="dashboardItem" key={index}>
              <Text>{item.title}</Text>
              <div className="countBox">
                <Text isBold={true}>{item.count}</Text>
                <div>{item.isNew && <Chip type="new">N</Chip>}</div>
              </div>
            </div>
          ))}
        </Dashboard>
      </ContentBoards>
      <BgmTitle>
        <Title>추억의 BGM</Title>
        <Text>TODAY MUSIC</Text>
      </BgmTitle>
      <BgmList>
        <div className="bgmHeader">
          <CheckboxInput
            type="checkbox"
            checked={bgmList.length === checkItems.length}
            onChange={handleAllCheck}
          />
          <Text>번호</Text>
          <Text>곡명</Text>
          <Text>아티스트</Text>
        </div>
        {bgmList.map((item, key) => (
          <Checkbox
            number={key + 1}
            onChange={handleCheck}
            value={item.song}
            song={item.song}
            artist={item.artist}
            checked={checkItems.includes(item.song)}
          ></Checkbox>
        ))}
      </BgmList>
    </Contents>
  );
};
const ContentBoards = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Dashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  margin: 18px 0 0 10px;
  height: 50px;
  border-top: 1px dashed ${({ theme }) => theme.color.gray};

  .dashboardItem {
    display: flex;
    border-bottom: 1px dashed ${({ theme }) => theme.color.gray};

    .countBox {
      display: flex;
      align-items: center;
      > p {
        &:nth-child(1) {
          color: ${({ theme }) => theme.color.skyBlue};
          margin-right: 2px;
        }
      }
    }

    > p {
      display: flex;
      align-items: center;
      height: 18px;
      &:hover {
        &:nth-child(1) {
          text-decoration: underline;
        }
      }
      &:nth-child(1) {
        margin-right: 10px;
      }

      cursor: pointer;
    }
  }
`;

const BgmTitle = styled.div`
  display: flex;
  margin: 8px 0;

  p {
    :nth-child(2) {
      display: flex;
      align-items: center;
      margin-left: 14px;
    }
  }
`;

const BgmList = styled.div`
  display: flex;
  flex-direction: column;

  .bgmHeader {
    display: flex;
    background-color: ${({ theme }) => theme.color.softGray};
    border-width: 2px 0;
    border-style: solid;
    border-color: ${({ theme }) => theme.color.gray};

    input {
      margin: 3px 20px;
    }

    p {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.color.gray};
      font-weight: bold;

      :nth-child(2) {
        width: 60px;
      }
      :nth-child(3) {
        width: 210px;
      }
    }
  }
`;

export default MainBoard;
