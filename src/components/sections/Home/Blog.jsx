import React from 'react'
import { Container } from '../../styles/Container.styled'
import styled from "styled-components"
import Card1 from "../../Images/card-1.png"
import Logo from "../../Images/Review-logo.png"
function Blog() {

    const Blog = styled.section`
        padding: 48px 0;
    `
    const Head = styled.div`
        max-width: 588px;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 48px;

        h2{
            color: #212529;
            font-size: 32px;
            margin-bottom: 8px;
        }
        p{
            color: #6c757d;
            font-size: 20px;
            line-height: 150%;
        }
    `

    const Card = styled.div`
        display: flex;
        align-items: center;
        gap: 24px;
        justify-content: space-between;
    `

    const CardItem = styled.div`
        max-width: 376px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        border-radius: 5px;
        overflow: hidden; 
        img{
            max-width: 100%;
        }
    `

    const CardTextBox = styled.div`
        height: 250px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        >span{
            max-width: fit-content;
            background-color: #0d6efd;
            border-radius: 20px;
            padding: 3px 9px;
            font-size: 14px;
            color: white;
            margin-bottom: 10px;
        }
        h3{
            margin: 0;
            margin-bottom: 20px;
        }
        p{
            margin: 0;
            line-height: 150%;
        }
    `

    const Info = styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content:flex-end;

        >div{
            display: flex;
            align-items: center;
            gap: 12px;

        }
        img{
            border-radius: 50%;
        }
        h5{
            margin: 0;
            font-weight: 900;
            margin-bottom: 5px;
        }
        p{
            color: #6c757d;
            margin: 0;
        }
    `

    const Sign = styled.div`
        margin-top: 90px;
        display: flex;
        align-items: center;
        background-color: #0d6efd;
        padding: 48px;
        border-radius: 10px;
        justify-content: space-between;
        margin-bottom: 50px;
    `

    const SignTextBox = styled.div`
        h4{
            margin: 0;
            color: white;
            font-size: 28px;
        }
        p{
            margin-bottom: 0;
            color: rgba(255, 255, 255, 0.5);
        }
    `

    const SignInput = styled.div`
        div{
            display: flex;
            border-radius: 2px;
            overflow: hidden;
            border: 1px solid white;
        }
        input:nth-child(1){
            flex: 1 0 auto;
            outline: 0;
            border: 0;
            padding: 12px;
            font-size: 18px;
        }
        input:nth-child(2){
            outline: 0;
            border: 0;
            padding: 12px;
            color: white;
            background-color: #0d6efd;
        }
        p{
            color: rgba(255, 255, 255, 0.5)
        }
    `

    return (
        <Blog>
            <Container>
                <Head>
                    <h2>From our blog</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
                </Head>
                <Card>
                    <CardItem>
                        <img src={Card1} alt="Not found" />
                        <CardTextBox>
                            <span>News</span>
                            <h3>Blog post title</h3>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Info>
                                <div>
                                    <img src={Logo} alt="" />
                                    <div>
                                        <h5>Kelly Rowan</h5>
                                        <p>April 2, 2022 · 10 min read</p>
                                    </div>
                                </div>
                            </Info>
                        </CardTextBox>
                    </CardItem>
                    <CardItem>
                        <img src={Card1} alt="Not found" />
                        <CardTextBox>
                            <span>Media</span>
                            <h3>Another blog post title</h3>
                            <p>This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Info>
                                <div>
                                    <img src={Logo} alt="" />
                                    <div>
                                        <h5>Kelly Rowan</h5>
                                        <p>April 2, 2022 · 10 min read</p>
                                    </div>
                                </div>
                            </Info>
                        </CardTextBox>
                    </CardItem>
                    <CardItem>
                        <img src={Card1} alt="Not found" />
                        <CardTextBox>
                            <span>News</span>
                            <h3>The last blog post title is a little bit longer than the others</h3>
                            <p>Some more quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Info>
                                <div>
                                    <img src={Logo} alt="" />
                                    <div>
                                        <h5>Kelly Rowan</h5>
                                        <p>April 2, 2022 · 10 min read</p>
                                    </div>
                                </div>
                            </Info>
                        </CardTextBox>
                    </CardItem>
                </Card>
                <Sign>
                    <SignTextBox>
                        <h4>New products, delivered to you.</h4>
                        <p>Sign up for our newsletter for the latest updates.</p>
                    </SignTextBox>
                    <SignInput>
                        <div>
                            <input type="email" placeholder='Email address...' />
                            <input type="button" value="Sign up" />
                        </div>
                        <p>We care about privacy, and will never share your data.</p>
                    </SignInput>
                </Sign>
            </Container>
        </Blog>
    )
}

export default Blog