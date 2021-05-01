import { Carousel } from 'react-bootstrap'

function SlideInfoComponent() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../images/pelantikan400x800.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../images/gunung_kerbau400x800.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Gunung Kerbau</h3>
                    <p>Menikmati Safari Kala Senja</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

export default SlideInfoComponent