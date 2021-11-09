import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 100px;
    margin: 51px auto 0;
    height: calc(100vh - 51px);
    max-width: 1140px;
    box-sizing: border-box;
`;

const Title = styled.h1`
    color:cyan;
    font-weight: 300;
    font-size: 2.5rem;
    margin: 16px 0;
`;

const SubTitle = styled.p`
    color:cyan;
    max-width: 50%;
    font-size: 1.5rem;
    margin-bottom: 48px;
`;

const Social = styled.div``;
const SocialLink = styled.a`
    text-decoration: none;
    margin-right: 16px;

    &:last-child{
        margin-right: 0;
    }
`;

const FotoPerfil = styled.img`
    position: absolute;
    border-radius: 50%;
    box-shadow:0 0 40px -10px #000;
    right: 200px;
    width: 300px;
    height: 300px;
`;

const SocialIcon = styled.img`
    width: 30px;
    height: 30px;
`;

const Socialnetworks = [
    {
        name: 'Linkedin',
        image: "https://res.cloudinary.com/gestionarchivos/image/upload/v1636154687/Img-Portafolio%20digital/linkedin-png_cw2lbm.png",
        url: 'https://www.linkedin.com/in/cristian-javier-padierna-higuita-9463561a3/'
    },
    {
        name: 'Twitter',
        image: "https://res.cloudinary.com/gestionarchivos/image/upload/v1636157662/Img-Portafolio%20digital/gorjeo_gbsoja.png",
        url: 'https://twitter.com/ChrissPHiguita'
    },
    {
        name: 'Github',
        image: "https://res.cloudinary.com/gestionarchivos/image/upload/v1636157494/Img-Portafolio%20digital/github_rfn0ym.png",
        url: 'https://github.com/CristianP50'
    }
]

export function Welcome() {
    return (
    <Wrapper id="inicio">   
        <Title>Soy Cristian Padierna</Title>
        <SubTitle>
        Me considero una persona responsable, dinámica y creativa, con facilidad de adaptación y capacidad de trabajar en equipo. 
        </SubTitle>
        <Social>
            {Socialnetworks.map((link, key) => <SocialLink key={`social-link-${key}`} href={link.url} target="_blank" rel="nooponer noreferrer" aria-label={link.name}>
                <SocialIcon src={link.image} />
            </SocialLink>)}
        </Social>
        <FotoPerfil src="https://res.cloudinary.com/gestionarchivos/image/upload/v1636401786/Img-Portafolio%20digital/20210420122419364_biietq.jpg" />
    </Wrapper>
    )
}



