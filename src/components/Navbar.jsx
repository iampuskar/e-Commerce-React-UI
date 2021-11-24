import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from './Announcement'


const Container = styled.div`
height: 60px;
/* background-color: black; */
`

const Wrapper = styled.div`
padding: 15px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;

`
const Language = styled.div`
/* color: white; */
cursor: pointer;
`
const SearchComponent = styled.div`
/* color: white; */
cursor: pointer;
border: 1px solid lightgray ;
display: flex;
margin-left: 40px;
padding: 5px;
`
const Input = styled.input`
color: black;
cursor: pointer;
border: none;
margin-right: 5px;
`
const Center = styled.div`
/* color: white; */
flex: 1;
text-align: center;
`
const Logo = styled.div`
/* font-size: x-large; */
font-weight: bold;
`
const Right = styled.div`
/* color: white; */
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 15px;
`
const MenuItem = styled.div`
/* color: white; */
font-size: 14px;
margin-left: 25px;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                    <Left> 
                    <Language>EN</Language> 
                    <SearchComponent>
                        <Input/>
                        <Search style= {{color:"red", fontSize:"14px"}}/>
                    </SearchComponent>
                    </Left>
                  
                    <Center> 
                    <Logo>E-COMMERCE.</Logo>
                     </Center>

                    <Right> 
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem> <Badge badgeContent={4} color="secondary">
                         <ShoppingCartOutlined color="action" />
                         </Badge> 
                    </MenuItem>
                    
                     </Right>
                        
                     </Wrapper>
        </Container>
    )
}

export default Navbar
