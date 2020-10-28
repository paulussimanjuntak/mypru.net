import Link from "next/link";
import Image from "next/image";
import Card from "react-bootstrap/Card";

const CardBanner = ({ image, link }) => {
  return (
    <>
      <Card className="border-0">
        <Link href={link} as={link}>
          <a className="text-decoration-none text-dark">
            <Image
              unsized
              quality={60}
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
