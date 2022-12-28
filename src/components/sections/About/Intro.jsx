import React from 'react'
import { Container } from '../../styles/Container.styled'
import styled from "styled-components"
function Intro() {

    const Intro = styled.section`
        padding: 100px 0;
    `

    const Wrapper = styled.div`
        max-width: 688px;
        margin: 0 auto;
        text-align: center;

        h1{
            margin: 0;
            font-size: 40px;
            color: #212529;
            margin-bottom: 16px;
        }
        p{
            color: #6c757d;
            font-size: 20px;
            line-height: 150%;
            margin: 0;
            margin-bottom: 24px;
        }
    `

    const LinkItem = styled.button`
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

    return (
        <Intro>
            <Container>
                <Wrapper>
                    <h1>Our mission is to make building websites easier for everyone.</h1>
                    <p>Start Bootstrap was built on the idea that quality, functional website templates and themes should be available to everyone. Use our open source, free products, or support us by purchasing one of our premium products or services.</p>
                    <LinkItem>Read our story</LinkItem>
                </Wrapper>
            </Container>
        </Intro>
    )
}

export default Intro