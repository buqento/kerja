import MapComponent from './MapComponent'
function FooterComponent() {
    return (
        <div className="pt-3">
            <MapComponent />
            <div className="p-3">
                <small>Copyright &copy; 2021 All Rights Reserved<br />Dinas Penanaman Modal dan PTSP Kabupaten Maluku Barat Daya</small>
            </div>
        </div>
    )
}
export default FooterComponent