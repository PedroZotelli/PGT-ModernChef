import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cardComponent.css';

function Cards() {
  return (
    <div className="container">
      <div className="card-wrapper">
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <Card.Img variant="top" src="holder.js/100px180" className="img-fluid rounded-start" alt="Card image" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <Card.Title>To com Fome e Sono(nome da comida)</Card.Title>
                <Card.Text>
                  Salmón, Papaya, Tofu, Alcachofas, Miel,
                  Queso azul, Quinoa, Remolacha, Jengibre, Aceitunas, 
                  Espárragos, Salsa de soja, Cúrcuma, Semillas de chía, Pimientos rojos, Fresas, Menta, Arroz integral, Aguacate, Vinagre balsámico
                </Card.Text>
                <Button variant="primary">Veja os Benefícios</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <Card>
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
      </div>
    </div>
  );
}

export default Cards;
