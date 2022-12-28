import React from 'react'
import { Container } from '../../styles/Container.styled'
import styled from "styled-components"

function Step() {

    const Step = styled.section`
        padding: 48px 0;
    `
    const Wrapper = styled.div`
        display: flex;
        gap: 48px;
    `

    const TextBox = styled.div`
        flex: 0 0 424px;
    `

    const Text = styled.p`
        font-size: 32px;
        color: #212529;
        margin-bottom: 24px;
        font-weight: 700;
    `

    const Grid = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 48px;
    `
    const GridItem = styled.div`
        padding: 0 24px;
        width: 424px;
    
    `
    const GridIcon = styled.div`
        width: 48px;
        height: 48px;
        background-color: #0d6efd;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
    `
    const GridTitle = styled.h4`
        margin: 0;
        margin-bottom: 8px;
        font-size: 20px;
        color: #212529;

    
    `
    const GridText = styled.p`
        margin: 0;
        color: #212529;
        line-height: 150%;
    `

    return (
        <>
            <Step>
                <Container>
                    <Wrapper>
                        <TextBox>
                            <Text>A better way to start building.</Text>
                        </TextBox>
                        <Grid>
                            <GridItem>
                                <GridIcon>
                                    <svg width='24' height='24' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M88 104C88 95.16 95.16 88 104 88H152C160.8 88 168 95.16 168 104V152C168 160.8 160.8 168 152 168H104C95.16 168 88 160.8 88 152V104zM280 88C288.8 88 296 95.16 296 104V152C296 160.8 288.8 168 280 168H232C223.2 168 216 160.8 216 152V104C216 95.16 223.2 88 232 88H280zM88 232C88 223.2 95.16 216 104 216H152C160.8 216 168 223.2 168 232V280C168 288.8 160.8 296 152 296H104C95.16 296 88 288.8 88 280V232zM280 216C288.8 216 296 223.2 296 232V280C296 288.8 288.8 296 280 296H232C223.2 296 216 288.8 216 280V232C216 223.2 223.2 216 232 216H280zM0 64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM48 64V448C48 456.8 55.16 464 64 464H144V400C144 373.5 165.5 352 192 352C218.5 352 240 373.5 240 400V464H320C328.8 464 336 456.8 336 448V64C336 55.16 328.8 48 320 48H64C55.16 48 48 55.16 48 64z" /></svg>
                                </GridIcon>
                                <GridTitle>Featured title</GridTitle>
                                <GridText>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</GridText>
                            </GridItem>
                            <GridItem>
                                <GridIcon>
                                    <svg width='24' height='24' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M88 104C88 95.16 95.16 88 104 88H152C160.8 88 168 95.16 168 104V152C168 160.8 160.8 168 152 168H104C95.16 168 88 160.8 88 152V104zM280 88C288.8 88 296 95.16 296 104V152C296 160.8 288.8 168 280 168H232C223.2 168 216 160.8 216 152V104C216 95.16 223.2 88 232 88H280zM88 232C88 223.2 95.16 216 104 216H152C160.8 216 168 223.2 168 232V280C168 288.8 160.8 296 152 296H104C95.16 296 88 288.8 88 280V232zM280 216C288.8 216 296 223.2 296 232V280C296 288.8 288.8 296 280 296H232C223.2 296 216 288.8 216 280V232C216 223.2 223.2 216 232 216H280zM0 64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM48 64V448C48 456.8 55.16 464 64 464H144V400C144 373.5 165.5 352 192 352C218.5 352 240 373.5 240 400V464H320C328.8 464 336 456.8 336 448V64C336 55.16 328.8 48 320 48H64C55.16 48 48 55.16 48 64z" /></svg>
                                </GridIcon>
                                <GridTitle>Featured title</GridTitle>
                                <GridText>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</GridText>
                            </GridItem>
                            <GridItem>
                                <GridIcon>
                                    <svg width='24' height='24' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M88 104C88 95.16 95.16 88 104 88H152C160.8 88 168 95.16 168 104V152C168 160.8 160.8 168 152 168H104C95.16 168 88 160.8 88 152V104zM280 88C288.8 88 296 95.16 296 104V152C296 160.8 288.8 168 280 168H232C223.2 168 216 160.8 216 152V104C216 95.16 223.2 88 232 88H280zM88 232C88 223.2 95.16 216 104 216H152C160.8 216 168 223.2 168 232V280C168 288.8 160.8 296 152 296H104C95.16 296 88 288.8 88 280V232zM280 216C288.8 216 296 223.2 296 232V280C296 288.8 288.8 296 280 296H232C223.2 296 216 288.8 216 280V232C216 223.2 223.2 216 232 216H280zM0 64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM48 64V448C48 456.8 55.16 464 64 464H144V400C144 373.5 165.5 352 192 352C218.5 352 240 373.5 240 400V464H320C328.8 464 336 456.8 336 448V64C336 55.16 328.8 48 320 48H64C55.16 48 48 55.16 48 64z" /></svg>
                                </GridIcon>
                                <GridTitle>Featured title</GridTitle>
                                <GridText>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</GridText>
                            </GridItem>
                            <GridItem>
                                <GridIcon>
                                    <svg width='24' height='24' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M88 104C88 95.16 95.16 88 104 88H152C160.8 88 168 95.16 168 104V152C168 160.8 160.8 168 152 168H104C95.16 168 88 160.8 88 152V104zM280 88C288.8 88 296 95.16 296 104V152C296 160.8 288.8 168 280 168H232C223.2 168 216 160.8 216 152V104C216 95.16 223.2 88 232 88H280zM88 232C88 223.2 95.16 216 104 216H152C160.8 216 168 223.2 168 232V280C168 288.8 160.8 296 152 296H104C95.16 296 88 288.8 88 280V232zM280 216C288.8 216 296 223.2 296 232V280C296 288.8 288.8 296 280 296H232C223.2 296 216 288.8 216 280V232C216 223.2 223.2 216 232 216H280zM0 64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM48 64V448C48 456.8 55.16 464 64 464H144V400C144 373.5 165.5 352 192 352C218.5 352 240 373.5 240 400V464H320C328.8 464 336 456.8 336 448V64C336 55.16 328.8 48 320 48H64C55.16 48 48 55.16 48 64z" /></svg>
                                </GridIcon>
                                <GridTitle>Featured title</GridTitle>
                                <GridText>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</GridText>
                            </GridItem>

                        </Grid>
                    </Wrapper>
                </Container>
            </Step>
        </>
    )
}

export default Step