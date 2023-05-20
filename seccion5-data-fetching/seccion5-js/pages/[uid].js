


const UserIdPage = (props) => {
  return <h1>HOLAAAA : {props.id}</h1>
}

export default UserIdPage

export const getServerSideProps = async (context) => {
  // context: es la request
  const { params, req, res } = context;
  console.log('=============================');
  const userId = params.uid

  return {
    props: {
      id: `userid-${userId}`
    }
  }
}