import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookDetails from './BookDetails';

const BookList = () => {
    return (
        <Row>
            <Col xs={8} className="row">
                <div className="col-sm-6 col-md-4 d-flex my-2">
                    <Card
                        border="info"
                        text="info"
                        className="flex-fill text-center shadow"
                    >
                        <Card.Body>Ky nghe lay tay</Card.Body>
                    </Card>
                </div>
                <div className="col-sm-6 col-md-4 d-flex my-2">
                    <Card
                        border="info"
                        text="info"
                        className="flex-fill text-center shadow"
                    >
                        <Card.Body>Ky nghe lay tay</Card.Body>
                    </Card>
                </div>
                <div className="col-sm-6 col-md-4 d-flex my-2">
                    <Card
                        border="info"
                        text="info"
                        className="flex-fill text-center shadow"
                    >
                        <Card.Body>Ky nghe lay tay</Card.Body>
                    </Card>
                </div>
                <div className="col-sm-6 col-md-4 d-flex my-2">
                    <Card
                        border="info"
                        text="info"
                        className="flex-fill text-center shadow"
                    >
                        <Card.Body>Ky nghe lay tay</Card.Body>
                    </Card>
                </div>
                <div className="col-sm-6 col-md-4 d-flex my-2">
                    <Card
                        border="info"
                        text="info"
                        className="flex-fill text-center shadow"
                    >
                        <Card.Body>Ky nghe lay tay</Card.Body>
                    </Card>
                </div>
                <div className="col-sm-6 col-md-4 d-flex my-2">
                    <Card
                        border="info"
                        text="info"
                        className="flex-fill text-center shadow"
                    >
                        <Card.Body>Ky nghe lay tay</Card.Body>
                    </Card>
                </div>
            </Col>
            <Col>
                <BookDetails />
            </Col>
        </Row>
    );
};

export default BookList;
