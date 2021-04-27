import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'
function FooterComponent() {
    return (
        <div className="p-5" style={{ backgroundColor: '#444', color: "#fff" }}>
            <small>Copyright &copy; 2021 All Rights Reserved<br />Dinas Penanaman Modal dan PTSP Kabupaten Maluku Barat Daya</small>
            <div>
                <FaFacebookSquare size={20} /> <FaInstagram size={22} />
            </div>
        </div>
    )
}
export default FooterComponent