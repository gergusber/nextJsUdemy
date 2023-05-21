import { useEffect, useState } from "react";
import useSWR from 'swr'
const URL_API_FIREBASE = 'url';

const LastSalesPage = (props) => {
  //useSWR(<request-url>, (url) => fetch(url).then(res => res.json())) if problems
  const { data, error } = useSWR(URL_API_FIREBASE, (url) => fetch(url).then(res => res.json())); //seSWR(URL_API_FIREBASE);
 
  const [sales, setSales] = useState();

  useEffect(() => {
    const transformedSaleS = [];

    if (data) {

      for (const key in data) {
        transformedSaleS.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume
        })
      }
    }
    setSales(transformedSaleS)
  }, [data])


  // const [sales, setSales] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setIsLoading(true)
  //   const sales = fetch(URL_API_FIREBASE).then(response => response.json())
  //     .then(data => {
  //       const transformedSaleS = [];

  //       for (const key in data) {
  //         transformedSaleS.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume
  //         })
  //       }

  //       setSales(transformedSaleS)
  //       setIsLoading(false)
  //     });
  // }, [])
  if (error)
    return <p> Fail to load...</p>


  if (!data)
    return <p> Loading...</p>

  if (!sales)
    return <p> Loading...</p>
  else{
    return (<ul>
      {sales ? sales.map(sale => <li key={sale.id}>
        {sale.username} - ${sale.volume}
      </li>) : null}
    </ul>)
  }

}

export default LastSalesPage;

// export const getServerSideProps = async (context) => {
// }