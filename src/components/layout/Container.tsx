// src/components/layout/Container.tsx

import React from 'react';
import clsx from 'clsx';

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
    const maxWidthClass = (() => {
        switch (maxWidth) {
            case 'sm':
                return 'max-w-sm';
            case 'md':
                return 'max-w-md';
            case 'lg':
                return 'max-w-lg';
            case 'xl':
                return 'max-w-xl';
            case '2xl':
                return 'max-w-2xl';
            case '3xl':
                return 'max-w-3xl';
            case '4xl':
                return 'max-w-4xl';
            case '5xl':
                return 'max-w-5xl';
            case '6xl':
                return 'max-w-6xl';
            case '7xl':
            default:
                return 'max-w-7xl';
        }
    })();

    return (
        <div className={clsx('mx-auto', paddingY, maxWidthClass, className)}>
            {children}
        </div>
    );
};

export default Container;
