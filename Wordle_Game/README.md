# Wordle

Wordle - The New York Times: Guess the WORDLE in six tries.

## Problem statement

- There is a list of 5-letter words. When game started, we pick random word from the list and player should guess it.
- Player has 6 attempts to guess the word
- After each guess, we have few cases to handle:

  - Word wasn't found in the list. Then we should show the message about it to user
  - User guessed the word. Showing congratulation message
  - Word exists in the list, but it's not the one, player is looking for. Then we need to check every letter. If player guessed leter and it's position - color it with green, if player guessed only letter, but no position - color it with yellow. If word doesn't contain this letter - color it with grey

- images below represent from initial state to desired solution

<p float="left">
  <img src="./screenshots/step-1.png" width="220" title="hover text">
  <img src="./screenshots/step-2.png" width="220" title="hover text">
  <img src="./screenshots/step-3.png" width="220" title="hover text">
</p>

---

## Included

- [React](https://github.com/facebook/react)
- [React Native](https://github.com/facebook/react-native)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Jest](https://github.com/facebook/jest)
- [React Native Testing Library](https://github.com/callstack/react-native-testing-library)

## Prerequisites

Make sure to have the following installed:

- Xcode
- Android Studio

You can use brew install for the following:

```bash
brew install yarn
brew install cocoapods
brew install node
brew install watchman
```

## Installation

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

```bash
$ yarn install
$ cd ios && pod install
```

## Development

#### iOS

Run command to open iOS simulator and run app:

```bash
$ react-native run-ios
```

#### Android

```bash
$ react-native start
$ react-native run-android
```

## Available scripts

```bash
$ yarn test
$ yarn prettier
$ yarn lint
$ yarn lint_check
```
