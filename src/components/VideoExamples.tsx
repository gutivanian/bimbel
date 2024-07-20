import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/VideoExamples.css';

const VideoExamples: React.FC = () => {
    return (
        <Container className="video-examples">
            <Row>
                <Col xs={12} md={4}>
                    <div className="video-thumbnail">
                        <img src="https://via.placeholder.com/300" alt="Biologi SMA" />
                        <h5>Biologi SMA</h5>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="video-thumbnail">
                        <img src="https://via.placeholder.com/300" alt="Ekonomi SMA" />
                        <h5>Ekonomi SMA</h5>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="video-thumbnail">
                        <img src="https://via.placeholder.com/300" alt="Matematika SMA" />
                        <h5>Matematika SMA</h5>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default VideoExamples;
