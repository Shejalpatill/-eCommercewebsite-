import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpenInCategory, setIsOpenInCategory] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 d-flex align-items-center all-categories">
            <Button className="category d-flex align-items-center" onClick={() => setIsOpenInCategory(!isOpenInCategory)}>
              <span className="cIcon1"> <IoIosMenu /> </span>
              <span className="text1">All Categories</span>
              <span className="cIcon2"> <FaAngleDown /> </span>
            </Button>
            <div className={`in-category shadow ${isOpenInCategory ? 'open' : ''}`}>
              <ul>
                <li>
                  <Link to="/destination/1"><Button>Restaurants<FaAngleDown className="ml-auto" /></Button></Link>
                  {/* <div className="sub-menu shadow">
                    <Link to="/"><Button></Button></Link>
                    <Link to="/"><Button>Home2</Button></Link>
                    <Link to="/"><Button>Home3</Button></Link>
                    <Link to="/"><Button className="last">Home4</Button></Link>
                  </div> */}
                </li>
                <li><Link to="/destination/2"><Button>Beaches</Button></Link></li>
                <li><Link to="/destination/3"><Button>Destinations</Button></Link></li>
                <li><Link to="/destination/4"><Button>Things Do</Button></Link></li>
                <li><Link to="/destination/5"><Button>Hotels</Button></Link></li>              
                </ul>
            </div>
          </div>
          <div className="col-sm-9 nav2 d-flex align-items-center">
            <ul className="list list-inline">
              <li className="list-inline-item">
                <Link to="/" ><Button>HOME</Button></Link>
                <div className="home-sub-menu shadow">
                  <Link to="/"><Button>Home1</Button></Link>
                  <Link to="/"><Button>Home2</Button></Link>
                  <Link to="/"><Button>Home3</Button></Link>
                  <Link to="/"><Button>Home4</Button></Link>
                  <Link to="/"><Button>Home5</Button></Link>
                </div>
              </li>
              <li className="list-inline-item"><Link to="/destination/1"><Button>DESTINATION</Button></Link></li>
              <li className="list-inline-item"><Link to="/"><Button>TOUR LIST</Button></Link></li>
              <li className="list-inline-item"><Link to="/"><Button>BLOG</Button></Link></li>
              <li className="list-inline-item"><Link to="/"><Button>BLOG </Button></Link></li>
              <li className="list-inline-item"><Link to="/"><Button>BLOG VISIT</Button></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
