import React from 'react'
import AnimatedPage from '../animated/AnimatedPage';
import Footer from './BasicFooter';
import Navbar from './BasicNavbar';
import ScrollToTopButton from '../other/ScrollToTopButton';
import BasicHero from './BasicHero'

function BasicPage(props) {
  return ( 
    
      <AnimatedPage>
        <div>
            <Navbar activePage={props.activePage}/>
            <BasicHero activePage={props.activePage} heroText={props.heroText}/>
            {props.children}
            <Footer />
            <ScrollToTopButton />
        </div>
      </AnimatedPage>
  );
}

export default BasicPage;
