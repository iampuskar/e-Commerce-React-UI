import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'


const Container = styled.div``
const Wrapper = styled.div`
display: flex;
padding: 50px;

`
const ImgContainer = styled.div`
flex: 1;
margin-right: 30px;
`
const Image = styled.img`
width: 100%;
height: 70vh;
object-fit: cover;
`
const InfoContainer = styled.div`
flex: 1;

`
const Title = styled.h1`
font-size: 50px;
font-weight: 300;
margin-bottom: 20px;
`
const Desc = styled.p`
font-size: 20px;
font-weight: 200;
margin: 20px 0px;
`
const Price = styled.span`
font-size: 40px;
font-weight: 200;
`

const FilterContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
margin: 30px 0px;

`
const Filter = styled.div`
display: flex;
align-items: center;

`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const Filtercolor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
transition: all .3s ease;

&:hover{
    transform: scale(1.2);
}
`
const Select = styled.select`
margin-left: 10px;
padding: 5px;
`
const Option = styled.option`
color: teal;
font-size: 15px;
`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
`
const Amount = styled.span`
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border: 1.5px solid teal;
border-radius: 10px;
margin: 0px 5px;
`
const Button = styled.button`
padding: 15px;
background-color: teal;
border: none;
color: white;
font-size: 16px;
font-weight: 500;
cursor: pointer;
transition: all .3s ease;

&:hover{
    background-color: green;
    color: white;
    transform: scale(1.1);
}
`

const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>

            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Pullover</Title>
                    <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <Filtercolor color = "black" />
                        <Filtercolor color = "darkblue" />
                        <Filtercolor color = "grey" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <Select>
                            <Option Selected>XS</Option>
                            <Option Selected>M</Option>
                            <Option Selected>L</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                </AddContainer>
                </InfoContainer>     
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
