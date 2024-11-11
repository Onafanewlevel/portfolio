// src/components/layout/Container.tsx

import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string; // Optional additional classes
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'; // Optional max-width
    paddingY?: string; // Optional vertical padding
}

const Container: React.FC<ContainerProps> = ({
    children,
    className = '',
    maxWidth = '7xl',
    paddingY = 'px-4 sm:px-6 lg:px-8',
}) => {
    return (
        <div className={`mx-auto ${paddingY} max-w-${maxWidth} ${className}`}>
            {children}
        </div>
    );
};

export default Container;
