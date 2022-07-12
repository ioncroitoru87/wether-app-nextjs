import { useState } from "react";
import { useRouter } from "next/router";
// import { useLocation, useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";

import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
    const [user, setUser] = useState("");
    const auth = useAuth();
    const router = useRouter();

    const handleSearchInput = e => {
        setUser(e.target.value);
    };

    const handleSearchSubmit = e => {
        e.preventDefault();
        auth.login(user);
        router.push("/");
    };
    useEffect(() => {
        router.prefetch("/");
    }, []);
    return (
        <div>
            <LoginForm
                searchTerm={user}
                onSearchInput={handleSearchInput}
                onSearchSubmit={handleSearchSubmit}
            />
        </div>
    );
};

export default Login;
