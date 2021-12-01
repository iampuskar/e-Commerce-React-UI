import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex: 1;
margin: 5px;
height: 70vh;
position: relative;
align-items: center;
justify-content: center;
`
const Image = styled.img`

width: 100%;
height: 100%;
object-fit: cover;

`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`
const Button = styled.button`
padding: 10px;
border: none;
font-size: 18px;
font-weight: 500;
background-color: teal;
color: white;
cursor: pointer;
transition: all 0.3s ease;

&:hover{
    transform: scale(1.2);
}
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src= {item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
