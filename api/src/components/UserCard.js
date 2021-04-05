import React from "react";
import { Link } from "react-router-dom";
import {
    Col,
    Card,
    CardHeader,
    CardText,
    ListGroup,
    ListGroupItem,
    Button,
} from "reactstrap";

function UserCard({ user }) {
    return (
        <Col sm="12" md="6" className="my-3">
            <Card>
                <CardHeader className="p-4 d-flex justify-content-around align-items-center ">
                    <CardText
                        style={{
                            width: "70px",
                            height: "70px",
                            fontSize: "1.5em",
                        }}
                        className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
                    >
                        {user.name[0]}
                    </CardText>
                    <ListGroup flush className="w-75">
                        <ListGroupItem>{user.name}</ListGroupItem>
                        <ListGroupItem>{user.email}</ListGroupItem>
                        <Button
                            className="px-0 bg-info"
                            color="link"
                            onClick={(e) => e.preventDefault()}
                        >
                            <Link
                                to={`/profile/${user.id}`}
                                style={{ color: "black" }}
                            >
                                Go To Profile
                            </Link>
                        </Button>
                    </ListGroup>
                </CardHeader>
            </Card>
        </Col>
    );
}

export default UserCard;
