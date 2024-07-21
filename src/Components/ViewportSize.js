import React, { useState, useEffect } from 'react';

const ViewportSize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Viewport Size</h2>
            <p>Width: {size.width} px</p>
            <p>Height: {size.height} px</p>
        </div>
    );
};

export default ViewportSize;
