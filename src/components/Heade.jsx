import React from 'react';
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function Header(){

        const myRef = React.useRef(null)
        const executeScroll = () => scrollToRef(myRef)

return(
        <div ref={myRef}>
        <div className="homeButtonContent">
          <section className="homeButton">
          <a onClick={executeScroll}>🏠</a> | PROJECT
          </section>
        </div>
        </div>)
}
export default Header;