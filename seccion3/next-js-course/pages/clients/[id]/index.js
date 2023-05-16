import { useRouter } from 'next/router'



const ClientProjectsPage = () => {
  const router = useRouter()

  console.log(router.query)


  const loadProjectHandler = () => {

    // router.push('/clients/ger/project a') // we move to another page programatically
    // router.replace('/clients/ger/project a')// we remplace with another page programatically( we cant comeback)
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: {
        id: 'ger',
        clientprojectid: 'project a'
      }
    })
  }


  return <div>
    <h1>The project of a given client</h1>
    <button onClick={loadProjectHandler}> load project a</button>
  </div>
}

export default ClientProjectsPage;