import { useState, useEffect } from 'react';
import { nanoCortexGear } from '../data/nanoCortexGear';

export const useGearOverrides = () => {
    const [gearData, setGearData] = useState(nanoCortexGear);

    useEffect(() => {
        const loadOverrides = () => {
            const overridesStr = localStorage.getItem('nanoCortexPhotos');
            if (overridesStr) {
                try {
                    const overrides = JSON.parse(overridesStr);
                    
                    const applyOverrides = (items) => {
                        return items.map(item => {
                            if (overrides[item.id]) {
                                return { ...item, imageUrl: overrides[item.id] };
                            }
                            return item;
                        });
                    };

                    setGearData({
                        captures: applyOverrides(nanoCortexGear.captures),
                        irs: applyOverrides(nanoCortexGear.irs),
                        effects: {
                            pre: applyOverrides(nanoCortexGear.effects.pre),
                            post: applyOverrides(nanoCortexGear.effects.post)
                        }
                    });
                } catch (e) {
                    console.error("Failed to parse gear photo overrides from local storage");
                }
            } else {
                setGearData(nanoCortexGear);
            }
        };

        loadOverrides();

        // Listen for standard storage events (across tabs)
        window.addEventListener('storage', loadOverrides);

        // Listen for a custom event we will dispatch within the same tab
        const handleCustomEvent = () => loadOverrides();
        window.addEventListener('gear-photos-updated', handleCustomEvent);

        return () => {
            window.removeEventListener('storage', loadOverrides);
            window.removeEventListener('gear-photos-updated', handleCustomEvent);
        };
    }, []);

    return gearData;
};
