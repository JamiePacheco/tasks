import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

/*
    *Add A Header
    *Add an image with alt text
    Add a list with at least three elements
    *Change background color of the header area
    Add a bootstrap button with text "log hello world"
    Have the button log in the console "hello world!"
    
    Have a two-column layout on the page somewhere
    Put a red-filled rectangle in each column using a div tag with
    width, height, and backgroundColor styles

*/

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <div>
                <span> Jamie Pacheco </span>
                <span> Hello World </span>
            </div>
            <div>
                <img
                    src={require("./images/removed-background-duke-funny.png")}
                    alt="picture of the duke"
                />
            </div>
            <div>
                <h1> Top 3 Tech Mascots </h1>
                <ol>
                    <li>Duke</li>
                    <li>Linux Penguin</li>
                    <li>Android droid</li>
                </ol>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    log hello world
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    height: "100px",
                                    width: "50px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    height: "100px",
                                    width: "50px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
