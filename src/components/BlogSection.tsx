import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/BlogSection.css';

const BlogSection: React.FC = () => {
    return (
        <Container className="blog-section">
            <Row>
                <Col xs={12} md={4}>
                    <div className="blog-card">
                        <h5>Zenius Guide</h5>
                        <p>Kumpulan artikel berisi panduan dan tips belajar.</p>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="blog-card">
                        <h5>Zenius Insights</h5>
                        <p>Artikel dengan berbagai perspektif tentang pendidikan.</p>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="blog-card">
                        <h5>Zenius Info</h5>
                        <p>Update terbaru dari program Zenius.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogSection;
