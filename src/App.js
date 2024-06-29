import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HighScores from "./pages/HighScores";
import GameOver from "./pages/GameOver";
import Game from "./pages/Game";
import NavBar from "./components/NavBar";
import { Main } from "./styled/Main";
import { Container } from "./styled/Container";
import Global from "./styled/Global";

function App() {
  return (
    <Router>
      <Global />
      <Main>
        <Container>
          <NavBar />
          <Routes>
            <Route path="/game" element={<Game />} />
            <Route path="/highScores" element={<HighScores />} />
            <Route path="/gameOver" element={<GameOver />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Main>
    </Router>
  );
}

export default App;
