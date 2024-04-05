import Carousel from 'react-bootstrap/Carousel';

function CarouselCopm() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDLs8ti367KV0OjoeYne_YZGeTBB6L7CFe9PyWtRlUQ&s' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://static.itdg.com.br/images/1200-630/8564ddd6287d2a9271b50ba1fca8a7d6/shutterstock-413580649.jpg'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2021/09/comida-brasileira-sao-paulo.gif?w=1200&h=674&crop=1' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCopm;