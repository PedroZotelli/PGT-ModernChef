import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./cardComponent.css";

function Cards() {
  // Repeatable card component for "Salada de frutas com amêndoas"
  const renderRecipeCard = () => (
    <div className="recipe-card">
      <Card className="custom-card">
        <div className="row g-0">
          <div className="col-md-4">
            <Card.Img
              variant="top"
              src={require("../Assets/imagem_fundo_login.png")}
              className="card-img-left"
            />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title>Salada de frutas com amêndoas</Card.Title>
              <Card.Text>
                Banana, maçã, laranja, morango, manga, e um toque de hortelã.
                Fresquinha e suculenta!
              </Card.Text>
              <div className="card-info">
                <Card.Text>Serve 2 pessoas</Card.Text>
                <Card.Text>15 minutos</Card.Text>
              </div>
              <Button variant="custom">Ver Receita e Nutrientes</Button>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );

  // Card component for "Fruta do Dia"
  const renderHighlightCard = () => (
    <div className="highlight-card">
      <Card className="bg-none custom-highlight-card">
        <Card.Img src={require("../Assets/laranja.jpg")} />
        <Card.Body className="card-overlay">
          <Card.Title>Fruta do Dia</Card.Title>
          <Card.Text>Laranja Lima</Card.Text>
          <Button variant="custom">Ver Benefícios</Button>
        </Card.Body>
      </Card>
    </div>
  );

  return (
    <div className="card-container">
      {renderRecipeCard()}
      {renderHighlightCard()}
      {renderRecipeCard()} {/* Duplicate the recipe card below */}
    </div>
  );
}

export default Cards;
