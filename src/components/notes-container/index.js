function NotesContainer(){
    return(
        <div className="notes-container">
            <h2>Notes</h2>
            <div children="notes-list">
                {NotesContainer.map(note => <div>Note</div>)}
            </div>
        </div>
    )
}