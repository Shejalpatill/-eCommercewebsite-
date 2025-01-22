import { IoMdSearch } from "react-icons/io";
import Button from "@mui/material/Button";
const Search = () => {
    return(
        <div className="searchContent d-flex align-items-center">
        <input type="text" placeholder="Search"/>
        <Button>
          <IoMdSearch/>
        </Button>
      </div>
    )
}

export default Search;