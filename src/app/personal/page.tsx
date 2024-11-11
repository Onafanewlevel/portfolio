import React from 'react';
import Container from '../../components/layout/Container';

const Personal: React.FC = () => {
    return (
        <Container className="py-8">
            <h1 className="text-5xl font-bold mb-4">Personal</h1>
            <p className="text-lg mb-6">
                Discover my hobbies, interests, and personal projects that showcase my passion and creativity.
            </p>

            {/* Example Personal Content */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">Hobbies</h2>
                <ul className="list-disc list-inside">
                    <li className="mb-1">Photography</li>
                    <li className="mb-1">Hiking and Outdoor Adventures</li>
                    <li className="mb-1">Cooking and Culinary Arts</li>
                    {/* Add more hobbies as needed */}
                </ul>
            </section>

            <section>
                <h2 className="text-3xl font-semibold mb-2">Personal Projects</h2>
                <ul className="list-disc list-inside">
                    <li className="mb-2">
                        <strong>Personal Blog</strong>
                        <p className="text-sm mt-1">
                            A platform where I share insights on technology, travel, and personal growth.
                        </p>
                    </li>
                    <li className="mb-2">
                        <strong>Open Source Contributor</strong>
                        <p className="text-sm mt-1">
                            Contributing to various open-source projects to improve software accessibility and functionality.
                        </p>
                    </li>
                    {/* Add more projects as needed */}
                </ul>
            </section>
        </Container>
    );
};

export default Personal;
