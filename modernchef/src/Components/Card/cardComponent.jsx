import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>To com Fome e Sono(nome da comida)</Card.Title>
        <Card.Text>
        Salmón, Papaya, Tofu, Alcachofas, Miel,
        Queso azul, Quinoa, Remolacha, Jengibre, Aceitunas, 
        Espárragos, Salsa de soja, Cúrcuma, Semillas de chía, Pimientos rojos, Fresas, Menta, Arroz integral, Aguacate, Vinagre balsámico
        </Card.Text>
        <Button variant="primary">Abrir receita completa</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;