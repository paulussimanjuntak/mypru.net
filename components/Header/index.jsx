import { useState } from "react";
import { useRouter } from "next/router";
import { Dropdown, Menu, Drawer } from "antd";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { nasabahMenuData, careerMenuData, productMenuData } from "data/navbar";

const productMenu = (
  <Menu className="d-none d-lg-block user-select-none">
    {productMenuData.map((data, i) => (
      <Menu.ItemGroup
        title={<span className="fw-500 text-capitalize">{data.label}</span>}
        key={i}
      >
        {data.children.map((child, i) => (
          <Menu.Item key={i} className="text-capitalize">
            <Link href={`/products/${child.link}`}>
              <a className="text-decoration-none">{child.label}</a>
            </Link>
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    ))}
  </Menu>
);

const careerMenu = (
  <Menu className="d-none d-lg-block user-select-none">
    {careerMenuData.map((data, i) => (
      <Menu.Item key={i} className="text-capitalize">
        {data.label}
      </Menu.Item>
    ))}
  </Menu>
);

const nasabahMenu = (
  <Menu className="d-none d-lg-block user-select-none">
    {nasabahMenuData.map((data, i) => (
      <Menu.Item key={i} className="text-capitalize">
        {data.label}
      </Menu.Item>
    ))}
  </Menu>
);

const Header = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
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
            onClick={showDrawer}
          >
            <i className="far fa-bars" />
          </Navbar.Toggle>

          <Navbar.Collapse id="mypru-navbar-nav">
            <Nav className="ml-auto align-items-center">
              <Nav.Link href="/">Home</Nav.Link>

              <Dropdown
                arrow
                overlay={productMenu}
                trigger={["hover"]}
                placement="bottomCenter"
                overlayClassName="position-fixed"
                onClick={() => router.push("/products")}
              >
                <Nav.Link className="mx-2">Produk Kami</Nav.Link>
              </Dropdown>

              <Dropdown
                arrow
                overlay={careerMenu}
                trigger={["hover"]}
                placement="bottomCenter"
                overlayClassName="position-fixed"
                onClick={() => router.push("/career")}
              >
                <Nav.Link>Peluang Karir</Nav.Link>
              </Dropdown>

              <Dropdown
                arrow
                overlay={nasabahMenu}
                trigger={["hover"]}
                placement="bottomCenter"
                overlayClassName="position-fixed"
                onClick={() => router.push("/customer")}
              >
                <Nav.Link className="mx-2">Layanan Nasabah</Nav.Link>
              </Dropdown>

              <Link href="/articles">
                <Nav.Link as="a">Artikel</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Drawer
        placement="right"
        zIndex="1030"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        {productMenuData.map(data => {
          return data.children.map((child, i) => (
            <Link href={`/products/${child.link}`} key={i}>
              <p>
                <a className="text-decoration-none text-dark">{child.label}</a>
              </p>
            </Link>
          ))
        })}
      </Drawer>


      <style jsx>{`
        :global(.navbar-light .navbar-nav .nav-link) {
          color: rgba(0, 0, 0, 0.7);
        }
        :global(.navbar-light .navbar-nav .nav-link:focus, .navbar-light
            .navbar-nav
            .nav-link:hover) {
          border-radius: 2px;
          color: rgba(0, 0, 0, 0.95);
          background-color: rgba(0, 0, 0, 0.05);
        }
        :global(.navbar-shadow-bottom) {
          box-shadow: rgba(0, 0, 0, 0.18) 0px 1px 15px !important;
        }
      `}</style>
    </>
  );
};

export default Header;
