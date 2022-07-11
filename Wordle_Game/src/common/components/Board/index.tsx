import colors from "@common/themes/Colors";
import React from "react";
import { View, Text } from "react-native";
import { Container } from "../Container";
import { Box, BoxText, Row } from "./styles";

const getCellBgColor = (letters, letter, row, col, curRow) => {
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

export const Board = ({ data, letters, curRow, gameState, requiredWord }) => {
  return (
    <Container>
      {data.map((row, rowIndex) => (
        <Row key={`row-${rowIndex}`}>
          {row.map((col, colIndex) => {
            return (
              <Box
                key={`cell-${rowIndex}-${colIndex}`}
                type={getCellBgColor(letters, col, rowIndex, colIndex, curRow)}
              >
                <BoxText
                  type={getCellBgColor(
                    letters,
                    col,
                    rowIndex,
                    colIndex,
                    curRow
                  )}
                >
                  {col.toUpperCase()}
                </BoxText>
              </Box>
            );
          })}
        </Row>
      ))}
      {gameState == "won" && (
        <>
          <Text style={{ color: colors.green, marginVertical: 15 }}>
            Success: {requiredWord.toUpperCase()}
          </Text>
        </>
      )}
      {gameState == "lost" && (
        <>
          <Text style={{ color: colors.red, marginVertical: 15 }}>
            Failed: {requiredWord.toUpperCase()}
          </Text>
        </>
      )}
    </Container>
  );
};

export default Board;
