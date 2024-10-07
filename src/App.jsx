import news_feed from './sample_news_stories.json';
import React from 'react';
import Story from '/components/Story';
import { useState } from 'react';

function App() {
  const [stories, setStories] = useState(news_feed.results);

  const handleDelete = (index) => {
    const updatedStories = stories.filter((_, i) => i !== index);
    setStories(updatedStories);
  };
  return (
    <div className="App">
      <h1>News Stories</h1>
      <div className="feed">
        {stories.map((story, index) => (
          <Story key={index} story={story} onDelete={() => handleDelete(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
