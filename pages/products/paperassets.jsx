import Link from 'next/link'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'antd-button-color'
import Container from 'react-bootstrap/Container'

import style from 'components/Products/detailStyle'

const title = "Paper Asset, Apa Itu Paper Asset ?"
const linkWA = `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_TELEPON}&text=Hi%2C%20Saya%20ingin%20mengetahui%20lebih%20lanjut%3A%0ANama%3A%20%0AUsia%3A%20%0APekerjaan%3A%20%0APesan%3A%20`

const ProductItem = () => {
  return(
    <>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Row className="mb-2">
                <Col lg={12} md={12} sm={12}>
                  <Image
                    unsized
                    quality={70}
                    alt={`MyPru.net | ${title}`}
                    src="/static/images/pa1.jpg"
                    className="w-100"
                  />
                </Col>
              </Row>
              <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
              <hr />

              <div>
                <p>
                  Kalau kita bahas tentang Asset, Apa yang terpikir di benak anda? pastinya rumah, ruko, tanah, emas dan logam mulia. Semua jenis asset tersebut setiap orang pasti ingin memilikinya dan kita kategorikan sebagai aset riil atau aset nyata.
                </p>
                <p>
                  Caranya bagaimana, agar dapat memiliki aset - aset tersebut. Ada yang mendapatkan dari orang tuanya (warisan), ada yang membeli secara Tunai atau ada juga yang mencicil atau kredit. Disamping itu, memiliki Asset Riil juga harus dipikirkan Biaya2 yang timbul seperti : Pajak, Biaya Perawatan atau juga bisa jadi timbul masalah baru (Sengketa Waris).
                </p>
                <p>
                  Saat ini ada SOLUSI memiliki Asset yang jauh lebih Terjangkau, Bebas Pajak dan Tanpa perlu ada Sengketa di kemudian hari. Namanya adalah PAPER ASSET
                </p>
                <p>
                  Paper asset adalah sebuah Asset yang dalam bentuk Polis Asuransi. Dimana didalamnya sudah ada Tertera Nilai Asset yang dimiliki dan merupakan Salah satu jenis Asset yang lagi trend di masa sekarang.
                </p>

                <h5 className="fs-18-s">
                  Keuntungan Paper Asset dibandingkan rumah atau properti:
                </h5>
                <ol>
                  <li>Tidak perlu uang deposit.</li>
                  <li>Tidak ada maintenance fee.</li>
                  <li>Tidak ada biaya pajak waris.</li>
                  <li>Tidak ada biaya balik nama atau notaris.</li>
                  <li>Bisa dibagi rata dan adil kepada ahli waris, sehingga tidak timbul perselisihan di kemudian hari.</li>
                </ol>

                <Image
                  unsized
                  quality={70}
                  alt={`MyPru.net | ${title}`}
                  src="/static/images/pa2.jpg"
                  className="w-100 mb-4"
                />

                <Link href={linkWA}>
                  <a target="_blank">
                    <Button
                      type="success"
                      size="large"
                      className="shadow-none"
                    >
                      Info Lebih Lanjut
                    </Button>
                  </a>
                </Link>

              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{style}</style>
    </>
  )
}

export default ProductItem
