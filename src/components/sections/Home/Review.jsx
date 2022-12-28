import React from 'react'
import { Container } from '../../styles/Container.styled'
import styled from "styled-components"

import ReviewLogo from "../../Images/Review-logo.png"
function Review() {

    const Review = styled.section`
        background-color: #f8f9fa;
        padding: 48px 0;
    `

    const Comment = styled.p`
        max-width: 590px;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 24px;
        font-style: italic;
        color: #212529;
        font-size: 24px;
        line-height: 150%;
    `

    const Info = styled.div`
        display: flex;
        align-items: center;
        gap: 16px;
        justify-content: center;
        img{
            border-radius: 50%;
        }
        P{
            color: #212529;
            font-weight: 700;
        }
        span{
            color: #0d6efd;
            font-weight: 900;
            font-size: 20px;
        }
    `

    return (
        <Review>
            <Container>
                <Comment>"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</Comment>
                <Info>
                    <img src={ReviewLogo} alt="" />
                    <p>Tom Ato</p>
                    <span>/</span>
                    <p>CEO, Pomodoro</p>
                </Info>
            </Container>
        </Review>
    )
}

export default Review