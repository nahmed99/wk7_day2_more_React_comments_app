import React, {useState} from 'react'; // Newer versions do NOT require the React import (done automatically)


// the parmater name needs to match the name of the 'sent' variable/function.
const CommentForm = ({handleCommentSubmit}) => {

    // We are going to setup two state variables. State variable are those that can change and then that change is reflected on the users view.
    // The states are set here, and not higher up because we only need to use them here.

    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");


    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();  // To prevent form submission without the rest of the code being executed.

        // 1. do form validation ... check it is not empty, for example
        const authorToSubmit = author.trim(); // remove leading/trailing whitespace
        const textToSubmit = text.trim(); // remove leading/trailing whitespace

        if (!authorToSubmit || !textToSubmit) {
            // Don't submit if either form field is empty - checking for empty strings
            return; // Just jump out of this function
        }

        // 2. update list of comments with new comment


        // 3. reset form
        setAuthor("");
        setText("");
    }


    return(
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text" 
                placeholder="Your name" 
                value={author} 
                onChange={handleAuthorChange}
                />

            <input 
                type="text" 
                placeholder="Say something" 
                value={text}
                onChange={handleTextChange}
                />

            <input 
                type="submit" 
                value="Add comment" 
                />
        </form>
    );
};

export default CommentForm;