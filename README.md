# 🎮 Tic Tac Toe Game – React.js

A classic **Tic Tac Toe** (X/O) game built using **React.js** with component-based architecture. Clean and easy to follow, perfect for learning React fundamentals like state management, props, and component composition.

---

## 🧠 Project Structure

---

## 🚀 How It Works

### 🧩 Components Overview

#### 1. `Game.jsx`

- **Role**: Main controller for the game
- **Responsibilities**:
  - Initializes and manages the board state
  - Tracks player turns
  - Checks for a winner or draw
  - Handles restart logic

#### 2. `Board.jsx`

- **Role**: Grid renderer
- **Responsibilities**:
  - Receives board array and `onClick` handler via props
  - Maps through the array to render 9 `<Square />` components

#### 3. `Square.jsx`

- **Role**: Single button (X/O)
- **Responsibilities**:
  - Displays value (`X`, `O`, or `null`)
  - Triggers `onClick` from parent when clicked

---

## 🕹️ Game Rules

- Two players take turns clicking empty squares.
- Player 1: ❌ (X) | Player 2: 🟢 (O)
- First player to align 3 symbols in a row/column/diagonal wins.
- If all cells are filled with no winner → it's a **draw**.
- "Restart Game" resets the board for a new match.

---

## 🧮 Logic Breakdown

- Board is stored as an array of 9 items.
- Example:
  ```js
  ["X", "O", null, "X", "O", null, null, "X", null];
  ```
