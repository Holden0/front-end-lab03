import React from "react";
import '/src/index.css';

const Story = ({ story, onDelete }) => {
    function handleDelete(e){
        if (e.target === e.currentTarget) {
            return;
        }
        if (e.target.tagName !== 'SPAN') {
            return;
        }
        onDelete();
    }
  return (
    <div className="story" onClick={handleDelete}> 
    <span className="delete">x</span>
    <div className="story_header"> 
        <div className="story_image">
            <img src={story.image_url ||'https://placehold.co/600x400'}/>
        </div>       
            <h1>
            <a href={story.link} target="_blank" rel="noopener noreferrer">
            {story.title}
          </a>
            <div className="story_creator">
            Author: {story.creator}
            </div>
            </h1>
    </div>
        <p>{story.description}</p>
    </div>
    );
};

export default Story;