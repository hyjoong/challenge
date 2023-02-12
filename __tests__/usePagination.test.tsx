import { renderHook, act } from "@testing-library/react-hooks";
import usePagination from "../hooks/usePagination";

describe("usePagination", () => {
  it("초기 상태인 page와 totalCount를 반환한다", () => {
    const { result } = renderHook(() => usePagination(1, 100));
    expect(result.current[0]).toBe(1);
    expect(result.current[1]).toBe(false);
  });

  it("handlePrevPage 함수를 호출하면 이전 페이지 상태값을 반환한다(page - 1)", () => {
    const { result } = renderHook(() => usePagination(2, 100));
    console.log(result.current);
    act(() => {
      result.current[2]();
    });

    expect(result.current[0]).toBe(1);
    expect(result.current[1]).toBe(false);
  });

  it("handleNextPage 함수를 호출하면 다음 페이지 상태값을 반환한다(page + 1)", () => {
    const { result } = renderHook(() => usePagination(1, 100));

    act(() => {
      result.current[3]();
    });

    expect(result.current[0]).toBe(2);
    expect(result.current[1]).toBe(false);
  });
});
