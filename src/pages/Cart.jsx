import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'


const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;

`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`

const Top = styled.div`
padding: 30px;
display: flex;
align-items: center;
justify-content: space-between;
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" ? "none" : "1px solid grey"};
background-color: ${props=>props.type === "filled" ? "teal" : "transparent"};
color: ${props=>props.type === "filled" && "white"};
`

const TopTexts = styled.div`

`
const TopText = styled.span`
margin: 0px 10px;
text-decoration: underline;
cursor: pointer;
`


const Bottom = styled.div`
display: flex;
justify-content: space-between;
`
const Info = styled.div`
flex: 3;
`
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`

const Product = styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetail = styled.div`
flex: 2;
display: flex;
`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
const ProductName = styled.div`

`
const ProductID = styled.span`

`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 
`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;

`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 300;

`

const Hr = styled.hr`
border: none;
background-color: whitesmoke;
height: 1.5px;
`

const SummaryTitle = styled.h1`
font-weight: 200;

`
const SummaaryItem = styled.div`
margin:30px 0px ;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`
const SummaaryItemText = styled.span``
const SummaaryItemPrice = styled.span``
const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: teal;
font-weight: 600;
color: white;
border: none;
cursor: pointer;
transition:all .3s ease ;

&:hover{
    transform: scale(0.9);
    background-color: black;
}
`



const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product> 
                            <ProductDetail>
                                <Image src="https://img.joomcdn.net/fecd7f81b18b873bc22e0605473ef1c229631493_original.jpeg"/>
                                <Details>
                                    <ProductName><b>Product:</b> CALIBER SPORTS SHOES</ProductName>
                                    <ProductID><b>ID:</b> 998765</ProductID>
                                    <ProductColor color= "black"/>
                                    <ProductSize><b>Size:</b> 41</ProductSize>

                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                               <ProductAmountContainer>
                                   <Add/>
                                   <ProductAmount>2</ProductAmount>
                                   <Remove/>
                               </ProductAmountContainer>
                               <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product> 
                            <ProductDetail>
                                <Image src="https://i.insider.com/55a95c962acae711008b7b73?width=1136&format=jpeg"/>
                                <Details>
                                    <ProductName><b>Product:</b> NIKE MENS SHOES</ProductName>
                                    <ProductID><b>ID:</b> 523343</ProductID>
                                    <ProductColor color= "red"/>
                                    <ProductSize><b>Size:</b> 39</ProductSize>

                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                               <ProductAmountContainer>
                                   <Add/>
                                   <ProductAmount>1</ProductAmount>
                                   <Remove/>
                               </ProductAmountContainer>
                               <ProductPrice>$ 700</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaaryItem>
                            <SummaaryItemText>Subtotal</SummaaryItemText>
                            <SummaaryItemPrice>$ 80</SummaaryItemPrice>
                        </SummaaryItem>
                        <SummaaryItem>
                            <SummaaryItemText>Estimated shipping</SummaaryItemText>
                            <SummaaryItemPrice>$ 5.90</SummaaryItemPrice>
                        </SummaaryItem>
                        <SummaaryItem>
                            <SummaaryItemText>Shipping Discount</SummaaryItemText>
                            <SummaaryItemPrice>$ -5.90</SummaaryItemPrice>
                        </SummaaryItem>
                        <SummaaryItem type="total">
                            <SummaaryItemText >Total</SummaaryItemText>
                            <SummaaryItemPrice>$ 100</SummaaryItemPrice>
                        </SummaaryItem>
                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
