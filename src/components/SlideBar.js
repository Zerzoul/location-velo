import { carouselItems } from '../data/carsouelItems.js';
import CarouselContainer from './CarouselContainer.js'
import Carousel from 'react-bootstrap/Carousel'

const SlideBar = () => {
    return (
        <Carousel>
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
    )
}
 
export default SlideBar;