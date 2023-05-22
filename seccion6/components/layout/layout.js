import MainHeader from './header/main-header';

function Layout(props) {
  return <>
    <MainHeader></MainHeader>
    <main>
      {props.children}
    </main>
  </>
}

export default Layout;
