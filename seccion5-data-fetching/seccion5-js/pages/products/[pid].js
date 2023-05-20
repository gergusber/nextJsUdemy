import data from '../../data/dummy-backend.json'

const ProductDetailPage = (props) => {
  const { loadedProduct } = props
  if (!loadedProduct) // with fallback true, we can assume that  props.loadedProduct can be null due loading process  unless that fallback is blocking, that is waiting to response.
    return <p>Loading....</p>


  const { title, description } = loadedProduct
  console.log()
  return <>
    <h1>{title}</h1>
    <p>{description}</p>
  </>
}

// This function is executed at build time and should return an array of possible values for [pid]
export async function getStaticPaths() {
  // Fetch the dynamic data from your API or any other data source
  const ids = data.products.map(({ id }) => id);

  const params = ids.map(id => ({ params: { pid: id } })); // we construct the object of params with all the pIds dynamic 

  // The returned paths will be pre-rendered as static HTML at build time
  return {
    paths: params,
    fallback: true // Set this to true if you have additional dynamic paths that are not listed here
    // fallback: 'blocking' // Set this to true if you have additional dynamic paths that are not listed here
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { pid: productId } = params;

  const title = 'something'
  const description = 'something description'
  const product = data.products.find(x => x.id === productId);

  if (!product) {
    return { notFound: true }
  }

  return {
    props: {
      loadedProduct: product
    }
  }
}
export default ProductDetailPage;