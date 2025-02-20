import { useContext } from "react"
import { NotesContext } from "../../App"

function NotesContainer(){

    const {notes} = useContext(NotesContext)
    return(
        <div className="notes-container">
            <h2>Notes</h2>
            <div children="notes-list">
                {notes.map(note => <div>Note</div>)}
            </div>
        </div>
    )
}

export default NotesContainer;