import { carouselItems } from '../data/carsouelItems.js';
import CarouselContainer from './CarouselContainer.js'
import { Container, Row, Carousel } from 'react-bootstrap';

const intervalTimer = 2000
const SlideBar = () => {
    return (
        <Container fluid >
            <Row >
                <Carousel interval={intervalTimer} indicators={false} hover className="m-0 p-0">
                    {
                        carouselItems.map(({id, description, img}) => 
                            (   
                                <Carousel.Item>
                                    <CarouselContainer 
                                        description={description}
                                        img={img}
                                    />
                                </Carousel.Item>
                            )
                        )
                    }
                </Carousel>
            </Row>
        </Container>
        
    )
}
 
export default SlideBar;