
const Carousel = ({description, img}) => {

    console.log(img)
    return (
        <div>  
            <p>{description}</p>
            <img src={img} className="d-block w-100" alt={description} />
        </div>
    )
}

export default Carousel;