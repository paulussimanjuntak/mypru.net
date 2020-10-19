import { Dropdown, Menu } from "antd";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const nasabahMenuData = [
  { label: "Cara Klaim" },
  { label: "Testimoni Klaim" },
  { label: "Cara Pembayaran" },
  { label: "Informasi Perusahaan" },
  { label: "Konsultasi" },
]

const careerMenuData = [
  { label: "Benefit jadi agen" },
  { label: "Sistem Business" },
  { label: "Jenjang karir" },
]

const productMenuData = [
  {
    label: "Proteksi Kesehatan",
    children: [
      { label: "Pruprime Healthcare Plus" },
      { label: "PSS" },
    ]
  },
  {
    label: "Proteksi Penghasilan",
    children: [
      { label: "PRU TOP" },
      { label: "PCB 88" },
    ]
  },
  {
    label: "Persiapan Dana Waris",
    children: [
      { label: "PRU Cinta" },
      { label: "Linkterm" },
    ]
  },
  {
    label: "Asuransi Karyawan",
    children: [
      { label: "Pru Corporate" },
      { label: "Pruworks" },
    ]
  }
]

const productMenu = (
  <Menu className="d-none d-lg-block user-select-none">
    {productMenuData.map((data, i) => (
      <Menu.ItemGroup title={<span className="fw-500 text-capitalize">{data.label}</span>} key={i}>
        {data.children.map((child, i) => (
          <Menu.Item key={i} className="text-capitalize">{child.label}</Menu.Item>
        ))}
      </Menu.ItemGroup>
    ))}
  </Menu>
);

const careerMenu = (
  <Menu className="d-none d-lg-block user-select-none">
    {careerMenuData.map((data, i) => (
      <Menu.Item key={i} className="text-capitalize">{data.label}</Menu.Item>
    ))}
  </Menu>
)

const nasabahMenu = (
  <Menu className="d-none d-lg-block user-select-none">
    {nasabahMenuData.map((data, i) => (
      <Menu.Item key={i} className="text-capitalize">{data.label}</Menu.Item>
    ))}
  </Menu>
)

const Header = () => {
  return(
    <>
      <Navbar
        expand="lg"
        expanded={false}
        variant="light"
        bg="light"
        fixed="top"
        className="bg-white navbar-shadow-bottom user-select-none"
      >
        <Container>
          <Navbar.Brand href="/" className="font-italic">
            <img
              src="/static/images/logo.png"
              height="38"
              className="d-inline-block align-top"
              alt="MyPru"
            />
          </Navbar.Brand>
          <Navbar.Toggle 
            className="border-0 px-2"
            aria-controls="mypru-navbar-nav" 
          >
            <i className="far fa-bars" />
          </Navbar.Toggle>

          <Navbar.Collapse id="mypru-navbar-nav">
            <Nav className="ml-auto align-items-center">
              <Nav.Link href="/">
                Home
              </Nav.Link>

              <Dropdown 
                arrow
                overlay={productMenu} 
                trigger={['hover']}
                placement="bottomCenter" 
                overlayClassName="position-fixed"
              >
                <Nav.Link className="mx-2">
                  Produk Kami
                </Nav.Link>
              </Dropdown>

              <Dropdown 
                arrow
                overlay={careerMenu} 
                trigger={['hover']}
                placement="bottomCenter" 
                overlayClassName="position-fixed"
              >
                <Nav.Link>
                  Peluang Karir
                </Nav.Link>
              </Dropdown>

              <Dropdown 
                arrow
                overlay={nasabahMenu} 
                trigger={['hover']}
                placement="bottomCenter" 
                overlayClassName="position-fixed"
              >
                <Nav.Link className="mx-2">
                  Layanan Nasabah
                </Nav.Link>
              </Dropdown>

              <Nav.Link>
                Artikel
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>

      <style jsx>{`
        :global(.navbar-light .navbar-nav .nav-link){
          color: rgba(0,0,0,0.7);
        }
        :global(.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover){
          border-radius: 2px;
          color: rgba(0,0,0,0.95);
          background-color: rgba(0,0,0,0.05);
        }
        :global(.navbar-shadow-bottom) {
          box-shadow: rgba(0, 0, 0, 0.18) 0px 1px 15px !important;
        }
      `}</style>
    </>
  )
}

export default Header
