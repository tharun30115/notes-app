import { createContext, useState } from "react";
import Sidebar from "./components/sidebar";
import NotesContainer from "./components/notes-container";

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

  const saveNote = (noteId, text ) => {
    const note = notes.find(note => note.id === noteId);
    note.text = text
    note.editmode = false
    setNotes([...notes])
  }

  const value = {
    notes,
    addNote,
    deleteNote,
    saveNote
  };

  return (
    <NotesContext.Provider value ={value}>
    <div className="notes-app">
      <Sidebar/>
      <NotesContainer/>
    </div>
    </NotesContext.Provider>
  );
}

export default App;
