import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Claim = () => {
  return (
    <>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Row className="mb-2">
                <Col lg={12} md={12} sm={12}>
                  <img src="/static/images/cara-klaim/claim1.jpg" className="w-100" />
                </Col>
              </Row>
              <h4 className="fs-20-s mb-1">
                Cara Klaim Asuransi
              </h4>
              <p>
                <em>Pahami Ketentuan Klaim Rawat Inap denga Metode Non Tunai (Penjaminan)</em>
              </p>

              <div>
                <p>
                  Demi kelancaran proses Penjaminan Klaim, ada beberapa hal yang perlu Anda ketahui:
                </p>
                <ol>
                  <li>
                    Pilih rumah sakit rekanan sesuai dengan Pelayanan Medis 24 jam yang tercantum pada Kartu Peserta Anda
                  </li>
                  <li>
                    Pastikan Anda membawa Kartu Identitas Asli (KTP/Akte Lahir) Pemegang Polis dan Tertanggung serta Kartu Peserta/Kartu Peserta Elektronik.
                  </li>
                  <li>
                    Pilih kamar sesuai <em>plan</em> yang anda miliki
                  </li>
                  <li>
                    Beberapa hal yang dapat memperpanjang proses penjaminan:
                    <ul>
                      <li>
                        Kelengkapan administrasi serta dokumen medis yang belum lengkap dari rumah sakit
                      </li>
                      <li>
                        Perlu dilakukan konfirmasi lebih lanjut atas dokumen - dokumen yang dikirimkan dari rumah sakit
                      </li>
                      <li>
                        Perlu dilakukan penelusuran lebih lanjut
                      </li>
                    </ul>
                  </li>
                </ol>
                <img src="/static/images/cara-klaim/claim2.jpg" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Claim;
