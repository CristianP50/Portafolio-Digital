import styled from "styled-components"
import { Container } from "./Container";

const Wrapper = styled.header`
    display: flex;
    background: #1e1e1e;
    box-shadow: 0 10px 30px -10px rgb(30 30 30 / 70);
    color: white;
`;

const Menu = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

const MenuItem = styled.a`
    padding: 16px;
    cursor: pointer;
    color: #ccc;
    text-decoration: none;

    &:hover{
        background: #252526;
        color: #ccc;
    }
`;

export function Headers() {
    return <Wrapper>
            <Container>
                <Menu>
                    <MenuItem href="#inicio">Inicio</MenuItem>
                    <MenuItem href="#proyectos">Proyectos</MenuItem>
                    <MenuItem href="#form">Contacto</MenuItem>
                </Menu>
            </Container>    
            </Wrapper>
}

