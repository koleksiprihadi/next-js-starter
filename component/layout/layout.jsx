// components/Layout.js

import Head from 'next/head';

const Layout = ({ children, type }) => {
    let layoutContent;
    switch (type) {
        case "khusus":
            layoutContent = (
                <>
                  <Head>
                    <title>Test</title>
                    <link rel="icon" href="/favicon.ico" />
                  </Head>
                  <header>Dashboard</header>
                  <main>{children}</main>
                  <footer>Dashboard Footer</footer>
                </>
              );
            break;
        default:
            layoutContent = (
                <>
                  <Head>
                    <title>Test</title>
                    <link rel="icon" href="/favicon.ico" />
                  </Head>
                  <header>Dashboard Header</header>
                  <main>{children}</main>
                  <footer>Dashboard Footer</footer>
                </>
              );
            break;
    }
  
    return layoutContent;
  };
  
  export default Layout;
  