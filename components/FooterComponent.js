import { FaFacebookSquare } from 'react-icons/fa'
function FooterComponent() {
    return (
        <div className="p-5" style={{ backgroundColor: '#444', color: "#fff" }}>
            <small>Copyright &copy; 2021 All Rights Reserved<br />Dinas Penanaman Modal dan PTSP Kabupaten Maluku Barat Daya</small>
            <div>
                <a href="https://web.facebook.com/lowongankerja.mbd" target="blank">
                    <FaFacebookSquare size={20} color="#fff" />
                </a>
            </div>
        </div>
    )
}
export default FooterComponent