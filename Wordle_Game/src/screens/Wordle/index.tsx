import React, { useState, useEffect } from "react";
import { WORDS } from "@common/constants";
import {
  Board,
  Container,
  CustomText,
  Keyboard,
  Screen,
} from "common/components";
import { Colors } from "common/themes";

//to update the each row
const copyArr = (arr: any[]) => [...arr.map((rows) => [...rows])];

const str = WORDS[Math.floor(Math.random() * WORDS.length)];
const requiredWord = str.charAt(0).toLowerCase() + str.slice(1);
const letters = requiredWord.split("");

const Wordle: React.FC = () => {
  const [data, setData] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  const [curRow, setCurRow] = useState(0);
  const [curCol, setCurCol] = useState(0);
  const [gameState, setGameState] = useState("playing");

  useEffect(() => {
    if (curRow > 0) {
      checkGameState();
    }
  }, [curRow]);

  const onLetterPress = (letter: string) => {
    if (gameState !== "playing") {
      return;
    }
    const updatedData = copyArr(data);

    if (letter === "delete") {
      const prevCol = curCol - 1;
      if (prevCol >= 0) {
        updatedData[curRow][prevCol] = "";
        setData(updatedData);
        setCurCol(prevCol);
      }
      return;
    }
    if (letter === "submit") {
      if (curCol === data[0].length) {
        setCurRow(curRow + 1); // to move to next row after submitting the word
        setCurCol(0);
      }
      return;
    }

    if (curCol < data[0].length) {
      updatedData[curRow][curCol] = letter;
      setData(updatedData);
      setCurCol(curCol + 1);
    }
  };

  const checkGameState = () => {
    if (IsGameWon()) {
      setGameState("won");
    } else if (isGameLost()) {
      setGameState("lost");
    }
  };

  const isGameLost = () => {
    return curRow === data.length;
  };
  const IsGameWon = () => {
    const row = data[curRow - 1];
    return row.every((letter, i) => letter === letters[i]);
  };
  // keyboard cell bg-color
  const getKBCellBGColor = (row: number, col: number) => {
    const letter = data[row][col];

    if (row >= curRow) {
      return "";
    }
    if (letter === letters[col]) {
      return "correctLetterAndPosition";
    }
    if (letters.includes(letter)) {
      return "correctLetter";
    }
    return "wrongLetter";
  };

  const getAllLettersWithColor = (color: string) => {
    return data.flatMap((row, i) =>
      row.filter((cell, j) => getKBCellBGColor(i, j) === color)
    );
  };

  // changing keyboard cell bg-color
  const greenCaps = getAllLettersWithColor("correctLetterAndPosition");
  const yellowCaps = getAllLettersWithColor("correctLetter");
  const greyCaps = getAllLettersWithColor("wrongLetter");

  return (
    <Screen flex={1} pt="80px" backgroundColor={Colors.black}>
      <CustomText
        color="white"
        pb="50px"
        type="h4"
        textAlign="center"
        width="100%"
      >
        WORDLE
      </CustomText>
      <Container flex={1} width="100%" justifyContent="space-between">
        <Board
          data={data}
          letters={letters}
          curRow={curRow}
          gameState={gameState}
          requiredWord={requiredWord}
        />
        <Keyboard
          onLetterPress={onLetterPress}
          greenCaps={greenCaps}
          yellowCaps={yellowCaps}
          greyCaps={greyCaps}
        />
      </Container>
    </Screen>
  );
};

export default Wordle;
