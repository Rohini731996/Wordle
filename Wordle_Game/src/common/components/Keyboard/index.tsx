import React from "react";

import { Container } from "../Container";
import { LETTERS } from "./constants";
import {
  DeleteText,
  Letter,
  LetterDelete,
  LetterHalf,
  LetterText,
  Submit,
} from "./styles";

export const Keyboard = ({
  onLetterPress,
  greenCaps = [],
  yellowCaps = [],
  greyCaps = [],
}: any) => {
  const getKeyBGColor = (key) => {
    if (greenCaps.includes(key)) {
      return "correctLetterAndPosition";
    }
    if (yellowCaps.includes(key)) {
      return "correctLetter";
    }
    if (greyCaps.includes(key)) {
      return "wrongLetter";
    }
    return "";
  };

  const renderLetter = (letter, i) => {
    if (letter.type === "half") {
      return <LetterHalf key={`${letter}-${i}`} />;
    }
    if (letter.type === "delete") {
      return (
        // TODO: add onPress functionality
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        <LetterDelete
          key={`${letter}-${i}`}
          onPress={() => onLetterPress(letter.type)}
        >
          <DeleteText>&#9249;</DeleteText>
        </LetterDelete>
      );
    }
    return (
      // TODO: add onPress functionality
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Letter
        type={getKeyBGColor(letter.letter)}
        key={`${letter}-${i}`}
        onPress={() => onLetterPress(letter.letter)}
      >
        <LetterText>{letter.letter?.toUpperCase()}</LetterText>
      </Letter>
    );
  };

  return (
    <Container>
      {LETTERS.map((row, i) => (
        <Container width="100%" flexDirection="row" key={i}>
          {row.map(renderLetter)}
        </Container>
      ))}
      <Submit onPress={() => onLetterPress("submit")}>
        <LetterText color="white">SUBMIT</LetterText>
      </Submit>
    </Container>
  );
};
