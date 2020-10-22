import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

import style from 'components/Products/detailStyle'

const benefitsData = [
  {
    image: "/static/images/benefits/PRUCinta1.png",
    description: "Manfaat Meninggal Dunia atas diri Peserta Yang Diasuransikan sesuai dengan yang tercantum di dalam Polis"
  },
  {
    image: "/static/images/benefits/PRUCinta2.png",
    description: "Manfaat Jatuh Tempo dalam bentuk Nilai Tunai atas beban Dana Nilai Tunai pada saat Polis masih aktif diakhir masa kepesertaan"
  },
  {
    image: "/static/images/benefits/PRUCinta3.png",
    description: "Masa Kepesertaan dapat diperpanjang tanpa pemeriksaan kesehatan sesuai Ketentuan pada Polis"
  },
  {
    image: "/static/images/benefits/PRUCinta4.png",
    description: "Manfaat Meninggal Dunia karena Kecelakaan sebelum usia 70 tahun dalam periode 6 (enam) minggu sejak tanggal 1 (satu) Ramahan yang ditetapkan oleh Pemerintah Republik Indonesia mengikuti ketentuan dalam Polis"
  },
]

const title = "PRULink Term"

const ProductItem = () => {
  return(
    <>
      <section>
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
          <div className="box-description">
            <p className="mb-2">
              <strong>{title}</strong>
            </p>
          </div>
        </Container>
      </section>

      <style jsx>{style}</style>
    </>
  )
}

export default ProductItem
