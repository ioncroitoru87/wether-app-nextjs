import { useRouter } from "next/router";
import styled from "styled-components";

const StyledButtonCity = styled.button`
    padding: 10px 15px;
    margin: 5px;
    cursor: pointer;
`;
const WeatherContainerItem = ({ item }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/${item.name}`);
    };
    return (
        <>
            <StyledButtonCity onClick={handleClick}>
                {item.name}
            </StyledButtonCity>
        </>
    );
};

export default WeatherContainerItem;
