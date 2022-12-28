import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../styles/Container.styled'
import styled from "styled-components"


function Navbar() {

    const Navbar = styled.div`
        padding: 8px 0;
        background-color: #212529;
    `

    const Wrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `

    const Logo = styled.div`
        color: white;
        font-size: 20px;
    `

    const List = styled.ul`
        display: flex;
        align-items: center;
        gap: 16px;
    `

    const Li = styled.li`
    `

    const ListLink = styled.a`
        display: flex;
        align-items: center;
        gap: 5px;
        color: rgba(255, 255, 255, 0.55);
        transition: all 0.2s ease;

        &:hover{
            color: rgba(255, 255, 255, 0.8);
        }
    `

    const Dropdown = styled.div`
        width: 0; 
        height: 0; 
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid rgba(255, 255, 255, 0.55);
    `

    return (
        <Navbar>
            <Container>
                <Wrapper>
                    <Link to='/'>
                        <Logo>Start Bootstrap</Logo>
                    </Link>
                    <List>
                        <Li>
                            <Link to="/">
                                <ListLink>Home</ListLink>
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/about">
                                <ListLink>About</ListLink>
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/">
                                <ListLink>Contact</ListLink>
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/">
                                <ListLink>Pricing</ListLink>
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/">
                                <ListLink>FAQ</ListLink>
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/">
                                <ListLink>
                                    Blog
                                    <Dropdown></Dropdown>
                                </ListLink>
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/">
                                <ListLink>
                                    Portfolio
                                    <Dropdown></Dropdown>
                                </ListLink>
                            </Link>
                        </Li>
                    </List>
                </Wrapper>
            </Container>
        </Navbar>
    )
}

export default Navbar