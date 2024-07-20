import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/Features.css';

const Features: React.FC = () => {
    return (
        <Container className="features">
            <Row>
                <Col xs={12} md={4} className="feature-item">
                    <div className="icon">🎯</div>
                    <h3>Focus on Concepts</h3>
                    <p>Belajar buat paham konsep sampe kebayang banget, bukan cuma menghafal rumus atau pake cara cepet.</p>
                </Col>
                <Col xs={12} md={4} className="feature-item">
                    <div className="icon">⚡</div>
                    <h3>Effective</h3>
                    <p>Ga ada lagi cerita belajar di kelas planga-plongo ketinggalan materi.</p>
                </Col>
                <Col xs={12} md={4} className="feature-item">
                    <div className="icon">🎉</div>
                    <h3>Fun</h3>
                    <p>Materi disampaikan dengan cara yang seru dan menyenangkan.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Features;
