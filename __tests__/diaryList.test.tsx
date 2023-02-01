import React from "react";
import { render, screen } from "@testing-library/react";
import DiaryList from "../components/organisms/DiaryList";
import { MockedProvider } from "@apollo/client/testing";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

// const handleCreateDiary = vi.fn();
const MOCK_QUERY = { page: "1" };

describe("DiaryList", () => {
  it("DiaryList page should rendered", () => {
    render(
      <MockedProvider>
        <ThemeProvider theme={theme}>
          <DiaryList query={MOCK_QUERY} />
        </ThemeProvider>
      </MockedProvider>
    );

    expect(screen.getByText("Diary"));
    expect(screen.getByText("TODAY STORY"));

    const writeButton = screen.getByRole("button", { name: /다이어리 작성/i });
    expect(writeButton).toBeInTheDocument();
  });

  it("", () => {
    // fireEvent.click(writeButton);
    // expect(handleCreateDiary).toBeCalled();
  });
});
