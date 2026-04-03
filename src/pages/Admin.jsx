import { useState, useEffect } from 'react';
import { nanoCortexGear } from '../data/nanoCortexGear';
import './Admin.css';

const Admin = () => {
    const [overrides, setOverrides] = useState({});
    const [saveStatus, setSaveStatus] = useState('');

    useEffect(() => {
        const overridesStr = localStorage.getItem('nanoCortexPhotos');
        if (overridesStr) {
            try {
                setOverrides(JSON.parse(overridesStr));
            } catch (e) {
                console.error("Could not parse overrides", e);
            }
        }
    }, []);

    const handleUrlChange = (id, newUrl) => {
        setOverrides(prev => ({
            ...prev,
            [id]: newUrl
        }));
    };

    const handleSave = () => {
        // Clean up empty strings
        const cleanedOverrides = {};
        for (const [id, url] of Object.entries(overrides)) {
            if (url && url.trim() !== '') {
                cleanedOverrides[id] = url.trim();
            }
        }

        localStorage.setItem('nanoCortexPhotos', JSON.stringify(cleanedOverrides));
        window.dispatchEvent(new Event('gear-photos-updated'));
        
        setSaveStatus('Saved successfully!');
        setTimeout(() => setSaveStatus(''), 3000);
    };

    const handleReset = () => {
        if (window.confirm("Are you sure you want to reset all photos to factory defaults?")) {
            localStorage.removeItem('nanoCortexPhotos');
            setOverrides({});
            window.dispatchEvent(new Event('gear-photos-updated'));
            setSaveStatus('Reset to factory defaults.');
            setTimeout(() => setSaveStatus(''), 3000);
        }
    };

    const renderGearSection = (title, items) => (
        <div className="admin-section">
            <h2>{title}</h2>
            <div className="admin-grid">
                {items.map(item => {
                    const currentOverrideUrl = overrides[item.id] !== undefined ? overrides[item.id] : '';
                    const displayUrl = currentOverrideUrl || item.imageUrl || '';
                    
                    return (
                        <div key={item.id} className="admin-card">
                            <div className="admin-card-header">
                                <h3>{item.name}</h3>
                                <span className="admin-badge">{item.type || 'IR'}</span>
                            </div>
                            
                            <div 
                                className="admin-image-preview" 
                                style={{ backgroundImage: displayUrl ? `url(${displayUrl})` : 'none' }}>
                                {!displayUrl && <span className="no-image">No Image</span>}
                            </div>
                            
                            <div className="admin-input-group">
                                <label htmlFor={`url-${item.id}`}>Image URL Override</label>
                                <input
                                    id={`url-${item.id}`}
                                    type="text"
                                    placeholder={item.imageUrl || "e.g. https://.../image.jpg"}
                                    value={currentOverrideUrl}
                                    onChange={(e) => handleUrlChange(item.id, e.target.value)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    return (
        <div className="page-container admin-page">
            <div className="admin-header">
                <h1 className="glow-text">Super Admin Photo Management</h1>
                <p>Override the default photos for Gear Explorer and Tone Details. These match via hardware ID. Changes are saved to your local browser storage.</p>
                
                <div className="admin-actions">
                    <button className="primary-btn" onClick={handleSave}>Save Changes</button>
                    <button className="secondary-btn" onClick={handleReset}>Reset All Defaults</button>
                    {saveStatus && <span className="save-status">{saveStatus}</span>}
                </div>
            </div>

            {renderGearSection("Captures / Amps", nanoCortexGear.captures)}
            {renderGearSection("Cabinet IRs", nanoCortexGear.irs)}
            {renderGearSection("Pre Effects", nanoCortexGear.effects.pre)}
            {renderGearSection("Post Effects", nanoCortexGear.effects.post)}
        </div>
    );
};

export default Admin;
