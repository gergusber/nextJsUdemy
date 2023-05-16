import React from 'react'
import Link from 'next/link'

const ClientsPage = () => {

  const clients = [
    { id: '1', name: 'ger' },
    { id: '2', name: 'max' },
    { id: '3', name: 'nen' }
  ]
  return <div>
    <h1>The Default clients page</h1>
    <ul>
      {clients.map(client =>
        <li key={client.id}>
          {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
          <Link href={{
            pathname:'/clients/[id]',
            query:{
              id: client.id
            }
          }}>{client.name}</Link>
        </li>
      )}
    </ul>
  </div>
}

export default ClientsPage;