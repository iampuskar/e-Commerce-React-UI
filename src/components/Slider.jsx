import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
/* overflow: hidden; */
`;
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: lightgrey;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props=> props.direction === "left" && "20px"};
right: ${props=> props.direction === "right" && "20px"};
cursor: pointer;
opacity: 0.5;
`;
const Wrapper = styled.div`
display: flex;
height: 100%;
/* transform: translateX(-100vw); */
`;
const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #${props => props.bg};

`;
const ImgContainer = styled.div`
flex: 1;
/* margin-right: 20px;
width: 50%; */
height: 100%;
`;
const Image = styled.img`
height: 80%;
`;
const InfoContainer = styled.div`
flex: 1;
/* margin-left: 20px; */
/* width: 50%; */
padding: 50px;
`;
const Title = styled.h1`
font-size: 70px;
`;
const Description = styled.p`
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
margin: 50px 0;

`;
const Button = styled.button`
padding: 10px;
border: 1px solid black;
font-size: 18px;
font-weight: 500;
background-color: black;
color: white;
cursor: pointer;
`;




const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
            <Slide bg="f5fafd">
                <ImgContainer>
                    <Image src="https://lh3.googleusercontent.com/proxy/jDwgYuzunTA9CAeQBvN_HtalnKrBs5EdaAjesZ-NszhHbMZWTTo0jWLjRahtIvgSduS1I5M0HyLiTpM0jTW6clMEt87HzhGGfhA8TzT7AQNxgsjLzEJhkF8ySr2zI3h0zyS0cvIZSbPc1oM"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Description>Don't Compromise on style,Get flat 30% off for new arrivals</Description>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide bg="fcf1ed">
                <ImgContainer>
                    <Image src="https://lh3.googleusercontent.com/proxy/jDwgYuzunTA9CAeQBvN_HtalnKrBs5EdaAjesZ-NszhHbMZWTTo0jWLjRahtIvgSduS1I5M0HyLiTpM0jTW6clMEt87HzhGGfhA8TzT7AQNxgsjLzEJhkF8ySr2zI3h0zyS0cvIZSbPc1oM"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Description>Don't Compromise on style,Get flat 30% off for new arrivals</Description>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide bg="f5fafd">
                <ImgContainer>
                    <Image src="https://lh3.googleusercontent.com/proxy/jDwgYuzunTA9CAeQBvN_HtalnKrBs5EdaAjesZ-NszhHbMZWTTo0jWLjRahtIvgSduS1I5M0HyLiTpM0jTW6clMEt87HzhGGfhA8TzT7AQNxgsjLzEJhkF8ySr2zI3h0zyS0cvIZSbPc1oM"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Description>Don't Compromise on style,Get flat 30% off for new arrivals</Description>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
