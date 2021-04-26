import Iframe from 'react-iframe'
function MapComponent() {
    return (
        <div className="text-center">
            <h1 className="py-3">Alamat</h1>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1396.3781737074105!2d127.80068213341815!3d-8.146811951004807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d1d6d09ad5353d3%3A0x55e5ee4416466db9!2sKANTOR%20BUPATI%20MALUKU%20BARAT%20DAYA!5e0!3m2!1sen!2sid!4v1619440647922!5m2!1sen!2sid"
                width="100%"
                height="270px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                frameBorder={0}
            />
        </div>
    )
}
export default MapComponent