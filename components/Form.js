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

const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => (
  <StyledForm onSubmit={onSearchSubmit}>
    <InputWithLabel
      id="search"
      value={searchTerm}
      onInputChange={onSearchInput}
      placeholder="Search weather..."
    >
      <strong>Search Weather:</strong>
    </InputWithLabel>
    <button type="submit" disabled={!searchTerm}>
      Submit
    </button>
  </StyledForm>
);

export default SearchForm;
