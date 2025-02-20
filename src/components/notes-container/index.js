import { useContext } from "react"
import { NotesContext } from "../../App"
import Note from "../note";

function NotesContainer(){

    const {notes} = useContext(NotesContext)
    return(
        <div className="notes-container">
            <h2>Notes</h2>
            <div children="notes-list">
                {notes.map(note => <Note note = {note} key = {note.id} />)}
            </div>
        </div>
    )
}

export default NotesContainer;