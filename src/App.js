import { useState } from "react";
import Sidebar from "./components/sidebar";

 export const NotesContext = createContext(null);

function App() {

  const [notes,setNotes] = useState([])

  const addNote = (theme) => {
    setNotes([
      {
        id: Math.random().toString(36),
        text: "",
        theme,
        timestamp: +new Date(),
        editmode: true
      },
      ...notes
    ])
  }

  const deleteNote = (noteId) => {
    setNotes(
      notes.filter(note => note.id !== noteId)
    )
  }

  const value = {
    notes
  };

  return (
    <NotesContext.Provider value ={value}>
    <div className="notes-app">
      <Sidebar/>
    </div>
    </NotesContext.Provider>
  );
}

export default App;
