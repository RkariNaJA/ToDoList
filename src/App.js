import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div>
      <Header />
      <NotesList />
      <Footer />
    </div>
  );
}

export default App;
