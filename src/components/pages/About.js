import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap"

export default function About() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    let req = new XMLHttpRequest();
    req.open('POST', 'https://prof-69.firebaseio.com/about.json');
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload = function () {
        console.log('res', req.response);
    };
    // req.send(JSON.stringify({Logo: 'Logo'}));
    // req.send(JSON.stringify({imageSrc: './static/Logo.png'}));

    if (loading) {
        let req = new XMLHttpRequest();
        req.open('GET', 'https://prof-69.firebaseio.com/about.json');
        req.responseType = "json";
        req.onload = function () {
            let res = req.response; console.log('res', res);
            setLoading(false);
            let d = [];
            for (const property in res) {
                d.push(<h1 className="text-center mb-4 display-4" key={property}>{res[property].About}</h1>);
                d.push(<a key={property}> <Link to="/"><img src={res[property].imageSrc} /></Link></a>);
                d.push(<h3 className="text-center mb-4" key={property}>{res[property].Header}</h3>);
            }
            setData(d);
        };
        req.send();
    }


    return (
        <Container className="d-flex justify-content-center" style={{ minHeight: "50vh", textAlign: "center" }}>
            <div>
                {data}
            </div>

        </Container>
    )
}