import { useState } from 'react';
import Card from '../components/Card/Card';
import Badge from '../components/Badge/Badge';
import { nanoCortexGear } from '../data/nanoCortexGear';
import './GearExplorer.css';

const GearExplorer = () => {
    const [activeTab, setActiveTab] = useState('captures');

    const renderCaptures = () => (
        <div className="gear-grid">
            {nanoCortexGear.captures.map(item => (
                <Card key={item.id} className="gear-card">
                    {item.imageUrl && <div className="gear-image" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>}
                    <div className="gear-header">
                        <h3>{item.name}</h3>
                        <Badge variant={item.type === 'Amp' ? 'amp' : 'pedal'}>{item.type}</Badge>
                    </div>
                    <p className="gear-brand">by {item.brand}</p>
                    <p className="gear-desc">{item.description}</p>

                    <div className="gear-users">
                        <span className="users-label">Known Users:</span>
                        <div className="users-list">
                            {item.users.map((user, idx) => (
                                <span key={idx} className="user-tag">{user}</span>
                            ))}
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );

    const renderIRs = () => (
        <div className="gear-grid">
            {nanoCortexGear.irs.map(item => (
                <Card key={item.id} className="gear-card">
                    {item.imageUrl && <div className="gear-image" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>}
                    <div className="gear-header">
                        <h3>{item.name}</h3>
                        <Badge variant="ir">Cab IR</Badge>
                    </div>
                    <p className="gear-brand">by {item.brand}</p>
                    <p className="gear-desc">{item.description}</p>
                    <div className="gear-metadata">
                        <span className="meta-label">Speaker:</span> {item.speaker}
                    </div>
                </Card>
            ))}
        </div>
    );

    const renderEffects = () => {
        const allEffects = [...nanoCortexGear.effects.pre, ...nanoCortexGear.effects.post];

        return (
            <div className="gear-grid">
                {allEffects.map(item => (
                    <Card key={item.id} className="gear-card">
                        {item.imageUrl && <div className="gear-image" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>}
                        <div className="gear-header">
                            <h3>{item.name}</h3>
                            <Badge variant="effect">{item.type}</Badge>
                        </div>
                        <p className="gear-desc">{item.description}</p>
                        <div className="gear-metadata">
                            <span className="meta-label">Position:</span>
                            {nanoCortexGear.effects.pre.find(e => e.id === item.id) ? 'Pre-FX' : 'Post-FX'}
                        </div>
                    </Card>
                ))}
            </div>
        );
    };

    return (
        <div className="page-container">
            <div className="explorer-header">
                <h1 className="glow-text">Gear Explorer</h1>
                <p>Your interactive library of the Nano Cortex factory arsenal.</p>
            </div>

            <div className="tabs-container">
                <button
                    className={`tab-btn ${activeTab === 'captures' ? 'active' : ''}`}
                    onClick={() => setActiveTab('captures')}
                >
                    Captures ({nanoCortexGear.captures.length})
                </button>
                <button
                    className={`tab-btn ${activeTab === 'irs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('irs')}
                >
                    Factory IRs ({nanoCortexGear.irs.length})
                </button>
                <button
                    className={`tab-btn ${activeTab === 'effects' ? 'active' : ''}`}
                    onClick={() => setActiveTab('effects')}
                >
                    Effects (Pre/Post)
                </button>
            </div>

            <div className="tab-content">
                {activeTab === 'captures' && renderCaptures()}
                {activeTab === 'irs' && renderIRs()}
                {activeTab === 'effects' && renderEffects()}
            </div>
        </div>
    );
};

export default GearExplorer;
