import React from 'react'
import { Container } from '../../styles/Container.styled'
import styled from "styled-components"

import AboutImg from "../../Images/about-img.png"

function Beyond() {

    const Beyond = styled.section`
        padding: 100px 0;
    `


    const Wrapper = styled.div`
        display: flex;
        align-items: center;
        gap: 48px;

        >div{
            flex: 0 1 50%;
        }

        h3{
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

    return (
        <Beyond>
            <Container>
                <Wrapper>
                    <div>
                        <h3>Growth & beyond</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                    </div>
                    <div>
                        <img src={AboutImg} alt="123" />
                    </div>
                </Wrapper>
            </Container>
        </Beyond>
    )
}

export default Beyond