import { defaultWritter } from "constants/index";

interface Props {
  id?: string;
  title: string;
  contents: string;
}

const useFetchingInput = () => {
  const setFetchingOption = ({ title, contents, id }: Props) => {
    return id
      ? {
          variables: {
            writer: defaultWritter,
            title,
            contents,
            number: Number(id),
          },
        }
      : {
          variables: {
            writer: defaultWritter,
            title,
            contents,
          },
        };
  };

  return { setFetchingOption };
};

export default useFetchingInput;
