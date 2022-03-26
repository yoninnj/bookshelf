import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.css";
import PDFviewer from "./PDFviewer";

export default class shelf extends Component {
    state = {
        pdflink: null,
    };
    render() {
        const { pdflink } = this.state;
        console.log("asdf = ", pdflink);

        return (
            <div>
                <CardGroup>
                    <Card style={{ width: "90%" }}>
                        <Card.Img
                            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                            alt="..."
                            position="top"
                        />
                        <Card.Body>
                            <Card.Title style={{ color: "green" }}>
                                BOOOK
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                One Stop For all BOOKS
                            </Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Aperiam corporis, et, ut
                                placeat similique quibusdam nihil consequuntur
                                deleniti dolores eos consectetur, sunt aut quo
                                amet sapiente quis molestias maiores nostrum.
                            </Card.Text>
                            <button
                                onClick={() =>
                                    this.setState({
                                        pdflink: "../../pdfs/asset.pdf",
                                    })
                                }
                            >
                                Read Me!!
                            </button>
                            <PDFviewer url={pdflink} />
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        );
    }
}
