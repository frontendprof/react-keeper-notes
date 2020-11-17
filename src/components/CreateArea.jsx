
import React, { useState } from 'react';



function CreateArea() {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                    placeholder="Title" />

                <textarea
                    name="content"
                    value={note.content}
                    onChange={handleChange}
                    rows="3"
                />

                <button>Add</button>

            </form>

        </div>
    )
}

export default CreateArea;
