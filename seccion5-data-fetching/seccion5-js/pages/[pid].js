import data from '../data/dummy-backend.json'

const ProductDetailPage = (props) => {
  const { title, description } = props.loadedProduct
  console.log()
  return <>
    <h1>{title}</h1>
    <p>{description}</p>
  </>
}

// This function is executed at build time and should return an array of possible values for [pid]
export async function getStaticPaths() {
  // Fetch the dynamic data from your API or any other data source
  const paths = [
    { params: { pid: 'p1' } },
    { params: { pid: 'p2' } },
    { params: { pid: 'p3' } },
    // Add more objects here if you have additional dynamic paths
  ];

  // The returned paths will be pre-rendered as static HTML at build time
  return {
    paths,
    fallback: false // Set this to true if you have additional dynamic paths that are not listed here
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { pid: productId } = params;

  const title = 'something'
  const description = 'something description'
  const product = data.products.find(x => x.id === productId);

  return {
    props: {
      loadedProduct: product
    }
  }
}
export default ProductDetailPage;