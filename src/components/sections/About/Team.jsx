import React from 'react'
import { Container } from '../../styles/Container.styled'
import styled from "styled-components"

import Logo from "../../Images/team-logo.png"

function Team() {

    const Team = styled.section`
        padding: 100px 0;
        background-color: #f8f9fa;
    `

    const Title = styled.div`
        text-align: center;
        margin-bottom: 48px;
        h1{
            font-size: 32px;
            color: #212529;
            margin: 0;
            margin-bottom: 8px;
        }
        p{
            color: #6c757d;
            font-size: 20px;
            line-height: 150%;
            margin: 0;
        }
    `

    const Wrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `

    const Item = styled.div`
        width: 270px;
        text-align: center;
        img{
            border-radius: 50%;
        }
        h5{
            margin: 0;
            color: #212529;
            font-size: 20px;
            margin-top: 24px;
            margin-bottom: 8px;
        }
        p{
            color: #6c757d;
            font-style: italic;
        }
    `

    return (
        <Team>
            <Container>
                <Title>
                    <h1>Our team</h1>
                    <p>Dedicated to quality and your success</p>
                </Title>
                <Wrapper>
                    <Item>
                        <img src={Logo} alt="" />
                        <h5>Ibbie Eckart</h5>
                        <p>Founder & CEO</p>
                    </Item>
                    <Item>
                        <img src={Logo} alt="" />
                        <h5>Arden Vasek</h5>
                        <p>CFO</p>
                    </Item>
                    <Item>
                        <img src={Logo} alt="" />
                        <h5>Toribio Nerthus</h5>
                        <p>Operations Manager</p>
                    </Item>
                    <Item>
                        <img src={Logo} alt="" />
                        <h5>Malvina Cilla</h5>
                        <p>CTO</p>
                    </Item>
                </Wrapper>
            </Container>
        </Team>
    )
}

export default Team