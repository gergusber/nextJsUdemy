import MainNavigation from "./mainNavigation/main-navigation";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Layout;