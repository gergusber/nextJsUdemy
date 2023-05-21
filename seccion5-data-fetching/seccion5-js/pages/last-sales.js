import { useEffect, useState } from "react";
import useSWR from 'swr'
const URL_API_FIREBASE = 'url';

const LastSalesPage = (props) => {
  const [sales, setSales] = useState(props.sales);

  const { data, error } = useSWR(URL_API_FIREBASE, (url) => fetch(url).then(res => res.json())); //seSWR(URL_API_FIREBASE);


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


  if (!data && !sales )
    return <p> Loading...</p>


  else {
    return (<ul>
      {sales ? sales.map(sale => <li key={sale.id}>
        {sale.username} - ${sale.volume}
      </li>) : null}
    </ul>)
  }

}

export default LastSalesPage;

export const getStaticProps = async (context) => {
  const transformedSaleS = [];
  const response = await fetch(URL_API_FIREBASE)
  const data = await response.json();

  for (const key in data) {
    transformedSaleS.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume
    })
  }

  return {
    props: {
      sales: transformedSaleS,
      revalidate: 10
    }
  }
}