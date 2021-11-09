import styled from "styled-components";
import { useForm } from '@formspree/react';

const ContForm = styled.div`
`; 

const FormContacto = styled.form`
    width:540px;
    min-height:510px;
    background:#e6e6e6;
    border-radius:8px;
    box-shadow:0 0 40px -10px #000;
    margin:calc(50vh - 220px) auto;
    padding:20px 30px;
    max-width:calc(100vw - 40px);
    box-sizing:border-box;
    font-family:'Montserrat',sans-serif;
    position:relative;
`;

const TitleForm = styled.h2`
    margin:10px 0;
    padding-bottom:10px;
    width:180px;
    color:#78788c;
    border-bottom:3px solid #78788c;
`;

const Input = styled.input`
    width:100%;
    padding:10px;
    box-sizing:border-box;
    background:none;
    outline:none;
    resize:none;
    border:0;
    font-family:'Montserrat',sans-serif;
    transition:all .3s;
    border-bottom:2px solid #bebed2;

    &:focus{
        border-bottom:2px solid #78788c
    }
`;

const TexTarea = styled.textarea`
    width:100%;
    padding:10px;
    box-sizing:border-box;
    background:none;
    outline:none;
    border:0;
    font-family:'Montserrat',sans-serif;
    transition:all .3s;
    border-bottom:2px solid #bebed2;
    &:focus{
        border-bottom:2px solid #78788c
    }
`; 

const Label = styled.label`
    &::before{
        content:attr(type);
        display:block;
        margin:28px 0 0;
        font-size:14px;
        color:#5a5a5a
    }

`;

const Button = styled.button`
    float:right;
    padding:8px 12px;
    margin:8px 0 0;
    font-family:'Montserrat',sans-serif;
    border:2px solid #78788c;background:0;
    color:#5a5a6e;cursor:pointer;
    transition:all .3s;

    &:hover{
        background:#78788c;
        color:#fff
    }
`;

const Alerta = styled.p`
    font-size: 2em;
    text-align: center;
    color: red;

`; 

export function Formulario(){
    const [state, handleSubmit] = useForm("mpzkgejz");
  if (state.succeeded) {
      return <Alerta>Gracias por contactarnos</Alerta>;
  }
    return(
    <ContForm>
        <FormContacto id="form" onSubmit={handleSubmit}>
            <TitleForm>CONTACT US</TitleForm>
            <Label htmlFor="name"  type="Nombre completo:">
                <Input name="name" id="name" type="text" required placeholder="Nombre completo..."></Input>
            </Label>
            <Label htmlFor="email"  type="Correo:">
                <Input  name="email" id="email" type="email" required placeholder="Correo Electrónico..."></Input>
            </Label>
            <Label htmlFor="tel"  type="Teléfono:">
                <Input name="tel" id="tel" type="number" required placeholder="+57 Número de contacto"></Input>
            </Label>
            <Label htmlFor="mensaje" type="Mensaje:">
                <TexTarea id="mensaje" name="mensaje" required placeholder="Deja un mensaje..."></TexTarea>
            </Label>
            <Button type="submit" disabled={state.submitting}>Enviar</Button>
        </FormContacto>
    </ContForm>
    )

}
