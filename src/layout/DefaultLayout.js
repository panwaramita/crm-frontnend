import React from "react";
import Footer from "./partial/Footer.comp";
import Header from "./partial/Header.comp";

function DefaultLayout({ child1, child2, child3 }) {
  return (
    <div className='default-layout'>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        {/* Hello{child1} */}
        {/* {child2} */}
        {child3}
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default DefaultLayout;
