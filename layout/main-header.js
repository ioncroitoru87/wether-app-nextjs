import React from "react";
import { useEffect, useCallback } from "react";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledContainer = styled.div`
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding: 0 5px;
    border-radius: 10px;
`;

const StyledList = styled.ul`
    list-style: none;
    display: flex;

    li {
        margin-left: 20px;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;
const MainHeader = () => {
    const router = useRouter();
    const auth = useAuth();

    const onClick = useCallback(() => {
        auth.user && auth.logout();
    }, [auth]);

    useEffect(() => {
        if (!auth.user) {
            router.push("/login");
        }
    }, []);
    return (
        <StyledContainer>
            <StyledNav>
                <div>
                    <p>Weather App</p>
                </div>
                <StyledList>
                    <li>{auth.user && <div>Welcome {auth.user}</div>}</li>
                    <li onClick={onClick}>
                        <Link href="/login">
                            {!auth.user ? "login" : "logout"}
                        </Link>
                    </li>
                </StyledList>
            </StyledNav>
        </StyledContainer>
    );
};

export default MainHeader;
