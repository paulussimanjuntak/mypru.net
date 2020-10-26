import Link from "next/link";
import Card from "react-bootstrap/Card";

const CardBanner = ({ image }) => {
  return (
    <>
      <Card className="border-0">
        {/* <Link href="/promo" as="/promo"> */}
          <a className="text-decoration-none text-dark">
            <img
              className="mx-auto d-block img-fit w-100 rounded-0"
              src={image}
              alt="MyPru"
            />
          </a>
        {/* </Link> */}
      </Card>
    </>
  );
};

export default CardBanner;
