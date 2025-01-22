import PopularDestination from "../../Components/cartPopularDestination";
import HomeContent from "../../Components/HomeContent";
const Home = () => {
    return (
       <>
          <HomeContent/>
          <section className="popularDestination">
            <div className="container">
               <div className="row"></div>
                   <PopularDestination/>
            </div>
          </section>
          <section>
            <div className="container">
                
                
            </div>
          </section>
       </>
    );
};

export default Home;