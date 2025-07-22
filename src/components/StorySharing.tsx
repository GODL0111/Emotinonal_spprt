import React, { useState } from 'react';

const StorySharing: React.FC = () => {
    const [story, setStory] = useState('');
    const [submittedStories, setSubmittedStories] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setStory(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (story.trim()) {
            setSubmittedStories([...submittedStories, story]);
            setStory('');
        }
    };

    return (
        <div>
            <h2>Share Your Story</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={story}
                    onChange={handleInputChange}
                    placeholder="Write your story here..."
                    rows={5}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <h3>Submitted Stories</h3>
            <ul>
                {submittedStories.map((submittedStory, index) => (
                    <li key={index}>{submittedStory}</li>
                ))}
            </ul>
        </div>
    );
};

export default StorySharing;