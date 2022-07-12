import styled from "styled-components";
import InputWithLabel from "./InputWithLabel";

const StyledForm = styled.form`
    margin: 20px 0;

    input,
    button {
        padding: 10px;
        border: 1px solid blue;
        border-radius: 10px;
        margin-right: 10px;
        outline: none;
    }
`;
const LoginForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => {
    return (
        <StyledForm onSubmit={onSearchSubmit}>
            <InputWithLabel
                id="search"
                type="email"
                value={searchTerm}
                onInputChange={onSearchInput}
                placeholder="add your email address"
            >
                <strong>Enter your email:</strong>
            </InputWithLabel>
            <button type="submit" disabled={!searchTerm}>
                Submit
            </button>
        </StyledForm>
    );
};

export default LoginForm;
