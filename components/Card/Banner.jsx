import Link from "next/link";
import Card from "react-bootstrap/Card";

const CardBanner = ({ image, link }) => {
  return (
    <>
      <Card className="border-0">
        <Link href={link} as={link}>
          <a className="text-decoration-none text-dark">
            <img
              className="mx-auto d-block img-fit w-100 rounded-0"
              src={image}
              alt="MyPru"
            />
          </a>
        </Link>
      </Card>
    </>
  );
};

export default CardBanner;
