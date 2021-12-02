import styled from 'styled-components'
import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


const Container = styled.div``
const Title = styled.h1`
margin: 20px;
`
const FilterContainer = styled.div`

display:flex; 
justify-content:space-between;
margin: 20px;
 `
const Filter = styled.div``
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
font-size: 20px;
border: 1px solid lightgray;
`
const Option = styled.option``



const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>ALL PRODUCTS</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter products</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Green</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products
                    </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (Asc)</Option>
                        <Option>Price (Desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
