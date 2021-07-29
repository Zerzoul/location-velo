import { Image } from 'react-bootstrap';

const Carousel = ({description, img}) => {

    console.log(img)
    return (
        <div>  
            {/* <p>{description}</p> */}
            <Image  src={img} className="d-block w-100" alt={description} fluid/>
        </div>
    )
}

export default Carousel;