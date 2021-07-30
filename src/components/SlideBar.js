import { carouselItems } from '../data/carsouelItems.js';
import CarouselContainer from './CarouselContainer.js'
import { Container, Row, Carousel } from 'react-bootstrap';

const intervalTimer = 2000
const SlideBar = () => {
    return (
                <Carousel interval={intervalTimer} indicators={false} hover="hover={value.toString()}" className="m-0 p-0 carousel-container">
                    {
                        carouselItems.map(({id, description, img}) => 
                            (   
                                <Carousel.Item key={id}> 
                                    <CarouselContainer 
                                        description={description}
                                        img={img}
                                    />
                                </Carousel.Item>
                            )
                        )
                    }
                </Carousel>
        
    )
}
 
export default SlideBar;