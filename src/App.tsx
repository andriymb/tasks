import React from "react";
import "./App.css";
import pineapple from "./assets/pineapple.png";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript, Andriy Miller-Bublyk
            </header>
            <div>
                <h1 style={{ backgroundColor: "purple" }}>A heading</h1>
                <Container>
                    <Row>
                        <Col>
                            <img src={pineapple} alt="Pineapple" />
                            <div
                                style={{
                                    height: "100px",
                                    width: "100px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                            <div
                                style={{
                                    height: "100px",
                                    width: "100px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
        </div>
    );
}

export default App;
