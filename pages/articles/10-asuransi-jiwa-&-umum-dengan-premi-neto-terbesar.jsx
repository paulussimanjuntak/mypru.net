import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const DetailArticle = () => {
  return(
    <>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Row className="mb-2">
                <Col lg={12} md={12} sm={12}>
                  <img src="/static/images/articles/1.jpg" className="w-100" />
                </Col>
              </Row>
              <h4 className="fs-20-s mb-1">
                10 Asuransi Jiwa & Umum dengan Premi Neto Terbesar
              </h4>
              <small className="fs-12 text-secondary">3 Agustus 2019</small>
              <hr />
              <p>
                Ibarat gizi bagi tubuh manusia, asupan yang optimal akan membuat seseorang akan makin sehat. Asupan gizi yang tidak optimal membuat tubuh cenderung kurang fit. Demikian juga dengan tingkat kesehatan perusahaan asuransi, ikut ditentukan besaran premi neto yang berhasil dikumpulkan. Produk yang inovatif dan strategi pemasaran yang tepat akan mengantar perusahaan mengumpulkan premi optimal.
              </p>
              <p>
                Berdasarkan ketentuan Otoritas Jasa Keuangan (OJK), premi neto merupakan hasil dari premi bruto yang dimobilisasi perusahaan asuransi, dikurangi komisi dan selisih antara premi reasuransi yang dibayar dan komisi reasuransi yang diterima. Demikian ketentuan yang tertuang dalam POJK No. 5 Tahun 2015 tentang kesehatan perusahaan asuransi dan reasuransi.
              </p>
              <p>
                Jika melihat peta industri sejauh ini, 10 perusahaan teratas sangat dominan dalam berbagai indikator, termasuk dalam soal meraih premi neto. Berdasarkan data publikasi yang dihimpun litbang Majalah Investor, selama tahun 2018, 10 besar premi neto perusahaan asuransi jiwa mencapai Rp114,38 triliun atau naik 5,3% dibanding tahun sebelumnya sebesar Rp 108,63 triliun. Sepuluh asuransi jiwa dengan premi neto terbesar pada 2018 menguasai pangsa 63,3% dibanding total premi neto 50 perusahaan asuransi jiwa senilai Rp 180,6 triliun.
              </p>
              <p>
                Dominasi 10 besar pemain ini juga tampak di industri asuransi umum. Selama 2018, nilai premi neto 10 pemain terbesar mencapai Rp 18,9 triliun, tumbuh 12,7% dari tahun sebelumnya sebesar Rp 16,77 triliun. Pangsa premi 10 perusahaan asuransi teratas mencapai 56,17% dari total premsi 76 perusahaan asuransi umum sebesar Rp 33,65 triliun.
              </p>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <img src="/static/images/articles/11.jpg" className="w-100" />
                </Col>
              </Row>
              <p>
                <small className="text-secondary">10 Asuransi Jiwa dengan Premi Neto Terbesar 2018</small>
              </p>
              <p>
                Menarik untuk mencermati peraih premi neto terbesar dan dominan dari kelompok asuransi jiwa maupun umum. Bertengger pada posisi puncak peraih premi netor terbesar adalah PT Prudential Life Assurance. Meski turun sekitar 6% dari pencapaian tahun 2017, raihan premi neto sebesar Rp 22,83 triliun menunjukkan dominasi persahaan ini. Posisi kedua premi neto terbesar ditempati PT Asuransi Simas Jiwa sebesar Rp 19,06 triliun, naik 16,3% dari tahun sebelumnya. Sedangkan posisi ketiga ditempati AIA Financial yang mengakumulasi premi neto sebesar Rp 11,94 triliun selama 2018, naik 21% dari tahun 2017 sebesar Rp 9,87 triliun.
              </p>
              <p>
                Posisi keempat hingga 10 peraih premi neto terbesar secara berututan, PT Asuransi Jiwa Adisarana Wanaarta, PT Indolife Pensiontama, PT Asuransi Allianz Life Indonesia, dan PT Asuransi Jiwa Manulife Indonesia. Selanjutnya PT AXA Mandiri Financial Services, PT Capital Life Indonesia, serta PT BNI Life Insurance.
              </p>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <img src="/static/images/articles/111.jpg" className="w-100" />
                </Col>
              </Row>
              <p>
                <small className="text-secondary">10 Asuransi Umum dengan Premi Neto Terbesar 2018</small>
              </p>
              <p>
                Pada kelompok asuransi umum, Sinarmas Group berhasil menempatkan PT Asuransi Sinar Mas sebagai peraih premi neto terbesar pada 2018 dengan nilai Rp 3,18 triliun, melesat sekitar 58% dari tahun sebelumnya sebesar Rp 2,01 triliun. Menguntit di posisi kedua, PT Asuransi Astra dengan raihan premi neto Rp 3,11 triliun, naik 4,82% dibanding tahun sebelumnya. Sedangkan posisi ketiaga ditempati PT Asuransi Kredit Indonesia. Perusahaan pelat merah ini mengumpulkan premi neto Rp 2,59 triliun, meningkat 17,6% dari tahun sebelumnya sebesar Rp 2,2 triliun.
              </p>
              <p>
                Selanjutnya, posisi keempat hingga 10 secara berurutan PT Asuransi Jasa Indonesia (Persero), PT Asuransi Bangun Askrida, PT Asuransi Adira Dinamika, PT Asuransi Central Asia, PT Lippo General Insurance Tbk, PT Asuransi Bina Dana Arta Tbk, dan PT Asuransi Wahana Tata.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default DetailArticle
