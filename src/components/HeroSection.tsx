import React from 'react';
import { Carousel } from 'react-bootstrap';
import './styles/HeroSection.css';

const HeroSection: React.FC = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>What We Have Done So Far</h3>
                    <p>More than 46,000 videos, etc...</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Add more items as needed */}
        </Carousel>
    );
};

export default HeroSection;
