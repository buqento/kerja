import { Carousel } from 'react-bootstrap'

function SlideComponent() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    // src="https://dummyimage.com/800x400/000/fff"
                    src="../images/pelantikan.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../images/gunung_kerbau.jpg"
                    // src="https://www.malukubaratdayakab.go.id/asset/foto_iklanatas/pkokkok.png"
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

export default SlideComponent