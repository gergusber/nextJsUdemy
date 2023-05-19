import data from '../data/dummy-backend.json'
// import path from 'path'
// import fs from 'fs/promises'


function HomePage(props) {
  const { products } = props
  return (
    <ul>
      {products.map(x => { return <li key={x.id}>{x.title}</li> })}
      {/* 
      <li>Product 2</li>
      <li>Product 3</li>
      <li>{ }</li> */}
    </ul>
  );
}

export async function getStaticProps() {
  // const filepath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  // const jsonData = await fs.readFile(filepath)
  // const data = JSON.parse(jsonData)
  console.log('(Re-)Generating...');
  return {
    // props: data
    props: {
      // products: [
      //   { id: 'p1', title: 'product1' },
      //   { id: 'p2', title: 'product2' },
      //   { id: 'p3', title: 'product3' },
      // ]
      ...data
    },
    revalidate: 10 // revalidate and update at 10 seconds
  };
}

export default HomePage;
