// src/Components/GetItem.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ItemCard = styled.div`
    background: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
    margin: 10px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ItemName = styled.h3`
    margin: 0;
    color: #333;
`;

const ItemDetail = styled.p`
    margin: 5px 0;
    color: #666;
`;

function GetItem() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/receitas');
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, []);

    return (
        <div>
            {items.map(item => (
                <ItemCard key={item._id}>
                    <ItemName>{item.nome}</ItemName>
                    <ItemDetail>Ingredientes: {item.ingredientes.join(', ')}</ItemDetail>
                    <ItemDetail>Modo de Preparo: {item.modo_preparo}</ItemDetail>
                    <ItemDetail>Calorias: {item.calorias}</ItemDetail>
                    <ItemDetail>Porções: {item.porcoes}</ItemDetail>
                    <ItemDetail>Tipo: {item.tipo}</ItemDetail>
                    <ItemDetail>Nutrientes: {item.nutrientes.join(', ')}</ItemDetail>
                </ItemCard>
            ))}
        </div>
    );
}

export default GetItem;