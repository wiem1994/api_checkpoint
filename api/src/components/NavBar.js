import React from "react";
import { Link } from "react-router-dom";
function NavBar({ isLogin, setIsLogin }) {
    return (
        <div className="nav-bar">
            <Link to="/">
                <h3 style={{ marginTop: "70px", color: "red" }}>Home</h3>
            </Link>
            <Link to="/users">
                {" "}
                <h3 style={{ marginTop: "30px", color: "red" }}>Users</h3>
            </Link>
            <button
                style={{
                    marginTop: "30px",
                    marginBottom: "40px",
                    color: "red",
                }}
                onClick={() => setIsLogin(!isLogin)}
            >
                {isLogin ? "Logout" : "Login"}
            </button>
        </div>
    );
}

export default NavBar;
