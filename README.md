# 싸이월드 구현 챌린지

## [배포주소](https://psyworld.vercel.app/)

</br>

## 기술 스택

- Typescript
- Styled-Components
- Graphql

</br>

## 프로젝트 실행

```javascript
1. root 경로에.env 파일 생성후 코드 추가

NEXT_PUBLIC_GRAPHQL_URI="http://practice.codebootcamp.co.kr/graphql"

2. yarn install

3. yarn dev

```

## 👓 실행 화면

</br>

#### 1. 메인 페이지

- 최근에 작성된 다이어리 게시글 4개를 보여주고 우측에 총 다이어리 게시글 수와 총 방명록 수와 새로 작성된 게시글 수를 나타낸다.
- 다이어리 `새로작성된 글/총 게시글 수`

- 새로 작성된 게시글은 24시간 이내로 작성된 게시글이고 새로 작성된 게시글이 하나라도 있으면 오른쪽에 `N` 배지가 나타난다

![](https://velog.velcdn.com/images/hyunjoong/post/e282bf9e-0a78-4243-a072-48429cb66502/image.png)

</br>

#### 2. 게임 페이지

끝말잇기 게임과 로또번호 추첨 게임을 할 수 있다

![](https://velog.velcdn.com/images/hyunjoong/post/a03eccb5-76fb-4ddf-a03a-80ea6fb9d5f8/image.png)

</br>

#### 3. 다이어리 페이지

- 다이어리 게시글을 나타낸다
- 한 페이지에는 10개의 다이어리 글들을 보여주고 아래 화살표 버튼을 클릭해서 페이지를 이동할 수 있다
- 상단에 있는 다이어리 작성 버튼을 클릭해서 다이어리를 작성할 수 있다
- 다이어리 게시글 수와 현재 페이지를 계산해서 다음 페이지에 데이터가 없을 시 버튼이 비활성화된다.
- 새로 작성된 게시글이면 날짜 옆에 `N` 배지가 나타난다
- 자세히 보러가기를 클릭하면 클릭한 다이어리의 상세 페이지로 이동한다

![](https://velog.velcdn.com/images/hyunjoong/post/c35e104d-cdef-49c7-9715-04db05b1f7ee/image.png)

</br>

#### 4. 다이어리 상세 페이지

- 다이어리 상세 데이터를 나타낸다
- 게시글에는 제목, 작성자, 내용을 나타낸다
- 새로 작성된 게시글이면 날짜 옆에 `N` 배지가 나타난다
- 수정하기 버튼을 클릭해서 게시글을 수정할 수 있다
- 삭제하기 버튼을 클릭해서 게시글을 삭제할 수 있다

![](https://velog.velcdn.com/images/hyunjoong/post/82aa6a8e-8569-4f10-90b5-0cb066d40765/image.png)

</br>

#### 5. 다이어리 상세 수정 페이지

- 클릭한 다이어리의 제목 & 내용을 수정할 수 있다
- 수정하기 버튼을 클릭해서 수정을 완료한다

![](https://velog.velcdn.com/images/hyunjoong/post/bcab3123-8c44-4a5a-9e2d-c569f197b7f4/image.png)

</br>

#### 6. 다이어리 작성 페이지

- 제목과 내용을 입력한 후 등록하기 버튼을 클릭해서 다이어리를 새로 작성할 수 있다

![](https://velog.velcdn.com/images/hyunjoong/post/f4e4110e-f830-46d7-b917-162c61deeba1/image.png)


#### 7. 방명록 페이지

- 작성된 방명록들을 나타낸다
- 한 페이지에는 10개의 방명록을 보여주고 아래 화살표 버튼을 클릭해서 페이지를 이동할 수 있다
- 이름과 내용을 입력해서 방명록을 작성할 수 있다
  - 이름을 입력하지 않을 경우 방명록에 이름이 `익명`으로 나타난다
- 삭제 버튼을 클릭해서 방명록을 삭제할 수 있다

![](https://velog.velcdn.com/images/hyunjoong/post/6c362d46-59de-480b-bd54-53794aef088c/image.png)

#### 8. 내정보 페이지

- 이름, 나이, 학교 정보를 입력한 후 저장 버튼을 클릭해서 프로필 정보를 수정할 수 있다
  - 수정한 프로필 정보는 업데이트되어서 왼쪽에 나타나는 프로필 컴포넌트에 바로 적용된다

![](https://velog.velcdn.com/images/hyunjoong/post/a400ff62-b843-41a8-a2ba-285d4f802e96/image.png)
