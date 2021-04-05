import React, { useEffect, useState } from "react";
import { Container, Jumbotron, Row, Spinner } from "reactstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

function Profile({ isLogin }) {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { Id } = useParams();

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/?id=${Id}`)
            .then((res) => setUser(res.data[0]))
            .then(() => setIsLoading(false))
            .catch((err) => console.log(err));
    }, []);
    console.log(user);
    return (
        <div>
            {isLoading ? (
                <>
                    {" "}
                    <Spinner color="primary" />{" "}
                </>
            ) : (
                <Container>
                    <Jumbotron>
                        <Row className="d-flex justify-content-center align-items-center">
                            <p
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    fontSize: "1.5em",
                                }}
                                className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
                            >
                                {user.name[0]}
                            </p>

                            <h1 className="display-3 col">{user.name}</h1>

                            <p className="lead text-center col">
                                {user.address.street},{user.address.suite},
                                {user.address.city}
                            </p>
                        </Row>
                    </Jumbotron>
                </Container>
            )}
        </div>
    );
}

export default Profile;
