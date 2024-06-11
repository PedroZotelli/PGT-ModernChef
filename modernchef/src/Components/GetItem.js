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

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

const ListItem = styled.li`
    margin: 0;
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
                    <ItemDetail>
                        Ingredientes:
                        <List>
                            {item.ingredientes.map((ingrediente, index) => (
                                <ListItem key={index}>
                                    {ingrediente.nome} - {ingrediente.quantidade}
                                </ListItem>
                            ))}
                        </List>
                    </ItemDetail>
                    <ItemDetail>
                        Modo de Preparo:
                        <List>
                            {item.modo_preparo.map((etapa, index) => (
                                <ListItem key={index}>{etapa}</ListItem>
                            ))}
                        </List>
                    </ItemDetail>
                    <ItemDetail>Calorias: {item.calorias}</ItemDetail>
                    <ItemDetail>Porções: {item.porcoes}</ItemDetail>
                    <ItemDetail>Tipo: {item.tipo}</ItemDetail>
                    <ItemDetail>
                        Nutrientes:
                        <List>
                            {item.nutrientes.map((nutriente, index) => (
                                <ListItem key={index}>
                                    {nutriente.nome} - {nutriente.quantidade}
                                </ListItem>
                            ))}
                        </List>
                    </ItemDetail>
                </ItemCard>
            ))}
        </div>
    );
}

export default GetItem;