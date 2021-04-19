import { Carousel } from 'react-bootstrap'

function SlideComponent() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.malukubaratdayakab.go.id/asset/foto_iklanatas/ramadhanhijau.jpg"
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.malukubaratdayakab.go.id/asset/foto_iklanatas/pkokkok.png"
                    alt="Second slide"
                />

                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

        </Carousel>
    )
}

export default SlideComponent