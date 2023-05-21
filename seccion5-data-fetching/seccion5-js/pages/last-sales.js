import { useEffect, useState } from "react";



const LastSalesPage = (props) => {

  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    const sales = fetch(
      'firebase url'
    ).then(response => response.json())
      .then(data => {
        const transformedSaleS = [];

        for (const key in data) {
          transformedSaleS.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume
          })
        }

        setSales(transformedSaleS)
        setIsLoading(false)
      });
  }, [])

  if (isLoading) {
    return <p> Loading...</p>
  }
  if (!sales) {
    return <p> fetching...</p>
  }
  return (<ul>
    {sales ? sales.map(sale => <li key={sale.id}>
      {sale.username} - ${sale.volume}
    </li>) : null}
  </ul>)
}

export default LastSalesPage;

// export const getServerSideProps = async (context) => {
// }