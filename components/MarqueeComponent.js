import Marquee from 'react-double-marquee';

export default function MarqueeComponent() {
  return (
    <div
      style={{
        width: '875px',
        whiteSpace: 'nowrap',
      }}
    >
      <Marquee direction="left" className="d-inline">
      Aksi Perubahan Si Pelita MBD Frejon P.J Lameky, ST dapat membuat pendaftaran Kartu Pencari Kerja (AK/I) lebih mudah
      </Marquee>
    </div>
  );
}