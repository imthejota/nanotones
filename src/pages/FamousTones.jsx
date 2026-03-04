import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';
import { famousTones } from '../data/famousTones';
import './FamousTones.css';

const FamousTones = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('All');

    // Extract unique genres
    const genres = useMemo(() => {
        const uniqueGenres = new Set(famousTones.map(tone => tone.genre || 'Uncategorized'));
        return ['All', ...Array.from(uniqueGenres)].sort();
    }, []);

    // Filter tones
    const filteredTones = useMemo(() => {
        return famousTones.filter(tone => {
            const matchesSearch =
                tone.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tone.song.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tone.description.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesGenre = selectedGenre === 'All' || (tone.genre || 'Uncategorized') === selectedGenre;

            return matchesSearch && matchesGenre;
        });
    }, [searchQuery, selectedGenre]);

    return (
        <div className="page-container">
            <div className="tones-header">
                <h1 className="glow-text">Famous Tones</h1>
                <p>Step-by-step guides to dialing in iconic guitar sounds with your Nano Cortex.</p>
            </div>

            <div className="tones-filters">
                <div className="search-bar-container">
                    <input
                        type="text"
                        placeholder="Search by artist, song, or tone..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="tones-search-input"
                    />
                </div>
                <div className="genre-pills">
                    {genres.map(genre => (
                        <button
                            key={genre}
                            className={`genre-pill ${selectedGenre === genre ? 'active' : ''}`}
                            onClick={() => setSelectedGenre(genre)}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
            </div>

            <div className="tones-grid">
                {filteredTones.length > 0 ? (
                    filteredTones.map(tone => (
                        <Link key={tone.id} to={`/tones/${tone.id}`} className="tone-link">
                            <Card className="tone-card">
                                <div className="tone-meta">
                                    <span className="artist-name">{tone.artist}</span>
                                    <span className="genre-badge">{tone.genre || 'Rock'}</span>
                                </div>
                                <h3 className="song-title">"{tone.song}"</h3>
                                <p className="tone-desc">{tone.description}</p>

                                <div className="view-preset-btn">
                                    View Settings &rarr;
                                </div>
                            </Card>
                        </Link>
                    ))
                ) : (
                    <div className="no-result">
                        <p>No tones found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FamousTones;
