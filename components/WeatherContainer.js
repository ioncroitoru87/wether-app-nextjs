import WeatherContainerItem from "./WeatherContainerItem";

import { useRouter } from "next/router";
import styled from "styled-components";

const StyledButtonCity = styled.button`
    padding: 10px 15px;
    margin: 5px;
    cursor: pointer;
`;
const WeatherContainer = ({ data, city }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/${city}`);
    };
    return (
        <>
            <StyledButtonCity onClick={handleClick}>{city}</StyledButtonCity>

            {data.map((item, idx) => (
                <WeatherContainerItem key={idx} item={item} city={city} />
            ))}
        </>
    );
};

export default WeatherContainer;
