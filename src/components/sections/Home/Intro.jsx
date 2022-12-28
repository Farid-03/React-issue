import React from 'react'
import { Container } from '../../styles/Container.styled'
import styled from "styled-components"
import IntroBg from "../../Images/intro-img.png"
function Intro() {

    const Intro = styled.section`
        background-color: #212529;
        padding: 48px 0;
    `

    const Wrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 48px;
    `

    const TextBox = styled.div`

    `

    const Title = styled.h1`
        font-size: 48px;
        margin-bottom: 8px;
        color: white;

    `

    const Image = styled.img`
    `

    const Text = styled.p`
        font-size: 20px;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 24px;
    
    `

    const Buttons = styled.div`
        display: flex;
        align-items: center;
        gap: 24px;
    
    `

    const ButtonItem1 = styled.a`
        font-size: 20px;
        padding: 12px 24px;
        background-color: #0d6efd;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.1s ease;
        &:hover{
            background-color: #145bc4;

        }
    `

    const ButtonItem2 = styled.a`
        font-size: 20px;
        padding: 12px 24px;
        background-color: transparent;
        border: 2px solid #f8f9fa;
        color: #f8f9fa;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.1s ease;

        &:hover{
            background-color: #f8f9fa;
            color: black;
        }
    `

    return (
        <>
            <Intro>
                <Container>
                    <Wrapper>
                        <TextBox>
                            <Title>
                                A Bootstrap 5 template for modern businesses
                            </Title>
                            <Text>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</Text>
                            <Buttons>
                                <ButtonItem1>Get Started</ButtonItem1>
                                <ButtonItem2>Learn More</ButtonItem2>
                            </Buttons>
                        </TextBox>
                        <div>
                            <Image src={IntroBg} />
                        </div>
                    </Wrapper>
                </Container>
            </Intro>
        </>
    )
}

export default Intro