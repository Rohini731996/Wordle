import { Dimensions } from "react-native";

import styled from "styled-components/native";

import { Colors } from "@common/themes";

import { CustomText } from "../CustomText";

const { width } = Dimensions.get("screen");
const NUMBER_OF_LETTERS = 5;

const style = {
  box: {
    correctLetter: Colors.yellow,
    correctLetterAndPosition: Colors.green,
    wrongLetter: Colors.bodyDark,
  },
  text: {
    correctLetter: Colors.black,
    correctLetterAndPosition: Colors.black,
    wrongLetter: Colors.white,
  },
};

export const Row = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Box = styled.View<{
  type: "correctLetter" | "correctLetterAndPosition" | "wrongLetter" | "";
}>`
  background-color: ${({ type }) => (type ? style.box[type] : Colors.white)};
  align-items: center;
  justify-content: center;
  height: 60px;
  width: ${`${(width - 40 - NUMBER_OF_LETTERS * 2) / NUMBER_OF_LETTERS}px`};
  margin: 2px;
  border-radius: 5px;
`;

export const BoxText = styled(CustomText)<{
  type: "correctLetter" | "correctLetterAndPosition" | "wrongLetter" | "";
}>`
  color: ${({ type }) => (type ? style.text[type] : Colors.black)};
`;
