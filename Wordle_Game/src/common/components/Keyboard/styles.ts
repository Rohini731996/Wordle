import styled from "styled-components/native";

import { Colors } from "@common/themes";

import { CustomText } from "../CustomText";

export const LetterHalf = styled.View`
  flex: 0.5;
`;

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

export const Letter = styled.Pressable<{
  type: "correctLetter" | "correctLetterAndPosition" | "wrongLetter" | "";
}>`
  flex: 1;
  background-color: ${({ type }) =>
    type ? style.box[type] : Colors.borderLight};
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 2px;
  border-radius: 5px;
`;

export const LetterDelete = styled.Pressable`
  align-items: center;
  justify-content: center;
  background-color: ${Colors.borderLight};
  width: 60px;
  height: 40px;
  margin: 2px;
  border-radius: 5px;
`;

export const LetterText = styled(CustomText)``;

export const DeleteText = styled(CustomText)`
  font-size: 36px;
  line-height: 36px;
  font-weight: 800;
`;

export const Submit = styled.Pressable`
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 10px 2px 2px;
  border-radius: 5px;
`;
