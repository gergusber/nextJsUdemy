import data from '../data/dummy-backend.json'
import Link from 'next/link'

function HomePage(props) {
  const { products } = props
  return (
    <ul>
      {products.map(x => {
        return <li key={x.id}>
          <Link href={`/${x.id}`}> {x.title} </Link>
        </li>
      })}

    </ul>
  );
}

export async function getStaticProps() {

  if (!data) {
    return {
      redirect: {
        destination: '/no-data'
      }
    }// redirects to another page.
  }
  if (!data.products.length) {
    return { notFound: true }// if the code to fails data is failing the return not found page.
  }

  return {
    props: {
      ...data
    },
    revalidate: 10, // revalidate and update at 10 seconds
    // notFound: true,  // if the code to fails data is failing the return not found page.
    // redirect : {} // redirects to another page.
  };
}

export default HomePage;
