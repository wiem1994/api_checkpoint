import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import UserCard from "./UserCard";
import { Redirect } from "react-router";
import axios from "axios";

function UsersList({ isLogin }) {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setList(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {!isLogin ? (
                <>
                    ({alert("not login yet")}
                    <Redirect to="/" />)
                </>
            ) : (
                <Container>
                    <Row>
                        {list.map((user, i) => (
                            <UserCard key={i} user={user} />
                        ))}
                    </Row>
                </Container>
            )}
        </div>
    );
}

export default UsersList;
