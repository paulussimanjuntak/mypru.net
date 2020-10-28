import { Avatar } from 'antd'
import Card from 'react-bootstrap/Card'

const Testimoni = ({ data }) => {
  return(
    <>
      <Card className="shadow-sm text-dark border-type-1 mb-3">
        <Card.Body className="text-center">
          <p className="mb-0">{data.comment}</p>
          <div className="d-block my-4">
            <Avatar size={74} src={data.avatar} alt={`MyPru.net - testimoni - ${data.name}`} />
          </div>
          <p className="font-weight-bold mb-0">{data.name}</p>
          <p className="mb-0">{data.job}</p>
        </Card.Body>
      </Card>
    </>
  )
}

export default Testimoni
