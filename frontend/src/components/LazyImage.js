import React, { useState } from 'react';
import shimmer from '../assets/shimmer.gif'; // Assuming your shimmer.gif is in the assets folder

const LazyImage = ({ src, alt, className }) => {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
    };

    return (
        <div className={className}>
            <img
                src={loaded ? src : shimmer}
                alt={alt}
                className={className}
                onLoad={handleLoad}
                style={{ display: loaded ? 'block' : 'none' }}
            />
            {!loaded && (
                <img
                    src={shimmer}
                    alt="Loading..."
                    className={className}
                />
            )}
        </div>
    );
};

export default LazyImage;