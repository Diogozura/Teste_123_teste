import styled from 'styled-components'

export const Card = styled.article`
    width: 300px;
    height: 100px;
    background-color: rgb(169, 163, 246);
    color: #000000;
    text-align: center;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
`
export const FullCards = styled.section`
    display: flex;
    flex-wrap: wrap;

` 
export const Categorias = styled.aside`
    border: 1px solid black;
    border-radius: 10px;
    margin: 2px 5px;
    padding: 10px;
`
export const BlocCategorais = styled.div`
    display: flex;
    flex-wrap: wrap;
`