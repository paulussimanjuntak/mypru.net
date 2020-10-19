const Home = () => {
  return(
    <>
      {[...Array(5)].map((_,i) => (
        <h1 className="mb-5" key={i}>Home</h1>
      ))}
    </>
  )
}

export default Home
