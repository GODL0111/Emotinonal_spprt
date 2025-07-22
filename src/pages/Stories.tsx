import React, { useEffect, useState } from 'react';
import { fetchStories } from '../utils/api';
import StorySharing from '../components/StorySharing';

const Stories: React.FC = () => {
    const [stories, setStories] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadStories = async () => {
            try {
                const fetchedStories = await fetchStories();
                setStories(fetchedStories);
            } catch (err) {
                setError('Failed to load stories.');
            } finally {
                setLoading(false);
            }
        };

        loadStories();
    }, []);

    if (loading) {
        return <div>Loading stories...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>User Stories</h1>
            <StorySharing />
            <ul>
                {stories.map((story) => (
                    <li key={story.id}>{story.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default Stories;