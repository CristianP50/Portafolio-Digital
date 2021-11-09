import React, { useEffect, useState } from "react"
import styled from "styled-components";
import { Container } from "../Container";
import { Title } from "../title";

const Proyect = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: calc(33.33% - 16px)!important;
    background: #1e1e1e;
    border-radius: 4px;
    margin: 8px;
    padding: 25px;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    color: #ccc;
    box-sizing: border-box;
`;

const Projects = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
`;

const DivImage = styled.div``;

const ImgProyect = styled.img`
    width: 100%;
    height: 200px;
`;

const TitleRepositorio = styled.h4`
    font-size: 1.5em;
    text-align: center;
    color:cyan;
`;

const LinkRepositorio = styled.a`
    text-decoration: none;
    color: #ffff;
    margin-top: 10px;
    font-size: 1em;
`;

const Icono = styled.img`
    cursor: pointer;
    width: 20px;
    height: 20px;
`;

export function Repositories() {
    const url = "https://my-json-server.typicode.com/CristianP50/Api-repositorios/repositorios";
    const [todo, settodo] = useState()

    const getProyectos = async () => {
        const response = await fetch(url);
        const data = await response.json();
        settodo(data);
        console.log(data);
    };

    useEffect(() => {
        getProyectos();
        return () => {

        }
    }, [])

    return (
        <Container id="proyectos">
            <Title>Proyectos</Title>
            <Projects>
                {!todo ? 'cargando...' : 
                    todo.map((repos) => {
                return (
                    <Proyect key={repos.id} >
                        <TitleRepositorio>{repos.name}</TitleRepositorio>
                        <DivImage>
                            <ImgProyect src={repos.img} />
                        </DivImage>
                        <LinkRepositorio href={repos.link} target="_blank" rel="nooponer noreferrer">
                            <Icono src="https://res.cloudinary.com/gestionarchivos/image/upload/v1636239615/Img-Portafolio%20digital/git_swftua.png" />
                        </LinkRepositorio>
                    </Proyect>    
                )
                    })
                }     
            </Projects>
        </Container>
    )
}