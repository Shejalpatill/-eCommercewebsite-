import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assests/images/travalTour.jpg";
import Locationdrop from "../Locationdrop";
import Button from "@mui/material/Button";
import { AiOutlineUser } from "react-icons/ai";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Search from "./Search";
import Nav from "./Nav";
import { useContext } from "react";
import { MyContext } from "../../App";

const Header = () => {
  const context = useContext(MyContext);
  return (
    <div className="HeaderWrapper container-lg container-xl container-xxl">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="logoWrapper col-sm-4 col-lg-3 d-flex align-items-center">
              <Link to={"/"}>
                <img src={logo} alt="logo_image" />
              </Link>
            </div>
            <div className="col-sm-8 d-flex align-items-center part2">
              <Search />
              {
                context.countryList.length!==1 &&  <Locationdrop />
              }
             
              <div className="part3">
                <div className=" d-flex align-items-center ml-auto">
                  <Button className="profileSymbol">
                    <AiOutlineUser />
                  </Button>
                  <div className="posRelative d-flex align-item-center">
                    <Button className="addToCart ml-2">
                    <FavoriteBorderIcon />
                    </Button>
                    <span className="count d-flex align-item-center justify-content-center">
                      1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Nav/>
    </div>
  );
};

export default Header;
