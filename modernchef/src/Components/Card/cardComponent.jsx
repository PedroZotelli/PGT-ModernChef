import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./cardComponent.css";

function Cards() {
  return (
    <div className="container">
      <div className="card-wrapper">
        <div className="card mb-3" style={{ maxWidth: "600px", maxHeight: "auto" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <Card.Img
                variant="top"
                src="holder.js/100px180"
                className="img-fluid rounded-start"
                alt="Card image"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <Card.Title>Feijoada</Card.Title>
                <Card.Text>Feijuca, bão demais!</Card.Text>
                <Card.Text>Serve 2 pessoass</Card.Text>
                <Button variant="primary">Ver Receita e Nutrientes</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <Card bg="dark" text="white">
          <Card.Img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwVKqwBm52U-J1qi4ZLhCZV5h-HCDNzVTPDiXX5FucQ&s"
            className="card-img"
            alt="Card image"
          />
          <div className="card-overlay">
            <Card.Title>Fruta do Dia</Card.Title>
            <Card.Text>Laranja Lima</Card.Text>
            <Button variant="primary">Ver Benefícios</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
