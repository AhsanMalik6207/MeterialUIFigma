import Home from './components/Home/Home'; 
import DrawerAppBar from './NavBar';
import Players from './components/Players/Players'
import Section3 from './components/Section/section'
import Netsitem from './components/Netsitem/Netsitem'
// import TheTan from './TheTan';
import Gam from './components/GAM/Gam'
import RoadMap from './Roadmap';
import Footer from './components/Footer/Footer';
import Component from './components/NewComp/Component';
function App() {
  return (
    <>

            <Home />
            <DrawerAppBar />
            <Players />
            <Section3 />
            <Netsitem />
            <Gam />
            <Component />
            {/* <TheTan /> */}
            <RoadMap />
            <Footer />
    </>
  );
}

export default App;
