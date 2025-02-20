import { useContext, useRef, useState } from "react";
import { NotesContext } from "../../App";

function Note({note}){

    const { saveNote, deleteNote} = useContext(NotesContext);

    const [isEditMode, setIsEditMode] = useState(note.editmode)
    const [text, setText] = useState(notes.text)
    const textareaRef = useRef(null);

    const handleSaveNote = () => {
        saveNote(note.id, text)
        setIsEditMode(false);
    }

    const getDataString = (timestamp) => {
        const temp = new Date(timestamp).toDateString().split(" ");
        return `${temp[2]} ${temp[1]} ${temp[3]}`
    };

    const adjustTextareaHeight = () => {
        textareaRef.current.style.maxheight = "1px";
        textareaRef.current.style.minheight = "1px";
        textareaRef.current.style.height = "1px";
    }

}

export default Note;