


const UserProfilePage = (props) => {
  return <h1>{props.username}</h1>

}

export default UserProfilePage

export const getServerSideProps = async (context) => {
  // context: es la request
  const { params, req, res } = context;
  console.log('=============================');
  console.log('CONSOLE LOG UserProfilePage');
  console.log('=============================');

  return {
    props: {
      username: 'Ger'
    }
  }
}