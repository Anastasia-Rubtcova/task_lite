import styled from '@emotion/styled';

const MainTitle = styled.h1`
    color: #0cb857;
`;

export function Title(props) {
    console.log(props.title);
    return <MainTitle>{props.title}</MainTitle>;
}