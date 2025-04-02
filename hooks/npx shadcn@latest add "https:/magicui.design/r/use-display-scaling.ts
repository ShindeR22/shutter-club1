// hooks/use-display-scaling.ts
import { useState, useEffect } from 'react';

interface DisplayScalingOptions {
        scaledMinWidth?: number;
        scaledMaxWidth?: number;
        highDpiMinWidth?: number;
        lowDpiFactorBreakpoint?: number;
}

interface DisplayScalingResult {
        windowWidth: number;
        windowHeight: number;
        isScaledDisplay: boolean;
        isHighDpiDisplay: boolean;
        scaleFactor: 'small' | 'medium' | 'large' | 'xl';
        dpiScaleFactor: number;
}

/**
 * Hook to detect and handle display scaling factors for responsive design
 * 
 * @param options Configuration options for scaling detection
 * @returns Object containing window dimensions and scaling information
 */
const useDisplayScaling = (options?: DisplayScalingOptions): DisplayScalingResult => {
        const defaultOptions: DisplayScalingOptions = {
                scaledMinWidth: 1200,        // Min width to consider for scaled displays (e.g., 1920 w/ 125% scaling)
                scaledMaxWidth: 1536,        // Max width to consider for scaled displays
                highDpiMinWidth: 1920,       // Minimum width to consider high DPI
                lowDpiFactorBreakpoint: 1600 // Below this width, lower DPI factor is assumed
        };

        const config = { ...defaultOptions, ...options };

        // Initialize state with zeroes to avoid hydration mismatch
        const [windowDimensions, setWindowDimensions] = useState({
                width: 0,
                height: 0
        });

        // Update dimensions after component mounts and on window resize
        useEffect(() => {
                const updateDimensions = () => {
                        setWindowDimensions({
                                width: window.innerWidth,
                                height: window.innerHeight
                        });
                };

                // Set initial dimensions
                updateDimensions();

                // Add event listener
                window.addEventListener('resize', updateDimensions);

                // Clean up
                return () => {
                        window.removeEventListener('resize', updateDimensions);
                };
        }, []);

        // Determine if the display is scaled (e.g., 1920×1080 with 125% scaling)
        const isScaledDisplay =
                windowDimensions.width > 0 &&
                windowDimensions.width >= config.scaledMinWidth! &&
                windowDimensions.width <= config.scaledMaxWidth!;

        // Determine if this is a high DPI display
        const isHighDpiDisplay = windowDimensions.width >= config.highDpiMinWidth!;

        // Calculate approximate DPI scale factor (simplified)
        let dpiScaleFactor = 1;
        if (isScaledDisplay) {
                dpiScaleFactor = 1.25; // Most common scaling (125%)
        } else if (isHighDpiDisplay) {
                dpiScaleFactor = 1.5;  // For 4K and similar displays
        } else if (windowDimensions.width < config.lowDpiFactorBreakpoint!) {
                dpiScaleFactor = 1;    // Standard scaling for smaller screens
        }

        // Determine a general scale factor category
        let scaleFactor: 'small' | 'medium' | 'large' | 'xl';
        if (windowDimensions.width < 768) {
                scaleFactor = 'small';
        } else if (windowDimensions.width < 1280) {
                scaleFactor = 'medium';
        } else if (windowDimensions.width < 1920) {
                scaleFactor = 'large';
        } else {
                scaleFactor = 'xl';
        }

        return {
                windowWidth: windowDimensions.width,
                windowHeight: windowDimensions.height,
                isScaledDisplay,
                isHighDpiDisplay,
                scaleFactor,
                dpiScaleFactor
        };
};

export default useDisplayScaling;