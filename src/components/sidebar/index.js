import { useState } from "react";

const colors = [
    "#ebcfad",
    "#f5b0a4",
    "#84dada",
    "#eff5b1",
    "#9adbf6",
];

function Sidebar(){
    const [selectedTheme, setSelectedTheme] = useState(colors[0]);

    return(
        <div className="sidebar">
            <button className="add-note-btn">
                <i className="fa fa-plus"></i>
            </button>
            <div className="colors-input-list">
                {colors.map(color => (
                    <div className="color-input">
                        <input
                        type="radio"
                        name="color-input"
                        value={color}
                        id={"color-"+color}
                        checked = { selectedTheme === color}
                        onClick={(e) => setSelectedTheme(color)}
                        />
                        <label htmlFor={"color-"+color} style={{background: color}}></label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;