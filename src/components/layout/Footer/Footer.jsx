import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../styles/Container.styled'
import styled from "styled-components"

function Footer() {

    const Footer = styled.div`
        background-color: #212529;
        padding: 24px 0;
    `

    const Wrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `

    const Copy = styled.div`
        color: #fff;
        font-size: 14px;
    `

    const List = styled.ul`
        margin: 0;
        display: flex;
        align-items: center;
        gap: 16px;
    `

    const Li = styled.li`
        color: #fff;
    `

    const ListLink = styled.a`
        color: white;
        text-decoration: underline;
    `

    return (
        <Footer>
            <Container>
                <Wrapper>
                    <Copy>Copyright © Your Website 2022</Copy>
                    <List>
                        <Li>
                            <Link to="/">
                                <ListLink>Privacy</ListLink>
                            </Link>
                        </Li>
                        <Li>·</Li>
                        <Li>
                            <Link to="/about">
                                <ListLink>Terms</ListLink>
                            </Link>
                        </Li>
                        <Li>·</Li>
                        <Li>
                            <Link to="/">
                                <ListLink>Contact</ListLink>
                            </Link>
                        </Li>
                    </List>
                </Wrapper>
            </Container>
        </Footer>
    )
}

export default Footer