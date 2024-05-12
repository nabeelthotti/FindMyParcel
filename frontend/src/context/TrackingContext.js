import React, { createContext, useContext, useState } from 'react';

const TrackingContext = createContext();

export const useTracking = () => useContext(TrackingContext);

export const TrackingProvider = ({ children }) => {
    const [trackingInfo, setTrackingInfo] = useState(null);

    const value = { trackingInfo, setTrackingInfo };

    return <TrackingContext.Provider value={value}>{children}</TrackingContext.Provider>;
};
