import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'
function FooterComponent() {
    return (
        <div className="p-5" style={{ backgroundColor: '#444', color: "#fff" }}>
            <small>Copyright &copy; Dinas Penanaman Modal dan PTSP Kabupaten Maluku Barat Daya 2021 All Rights Reserved</small>
            <div>
                <FaFacebookSquare size={28} /> <FaTwitter size={30} /> <FaInstagram size={30} />
            </div>
        </div>
    )
}
export default FooterComponent