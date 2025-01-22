import React, { useContext, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Slide from '@mui/material/Slide';
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Locationdrop = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState('Select Location'); // Default value
    const [countryList, setCountryList] = useState([]);
    const context = useContext(MyContext);

    useEffect(() => {
        if (context.countryList) {
            setCountryList(context.countryList);
            const indiaIndex = context.countryList.findIndex(country => country.country === 'India');
            if (indiaIndex !== -1) {
                setSelectedIndex(indiaIndex);
                setSelectedLocation('India');
            }
        }
    }, [context.countryList]);

    const selectCountry = (index) => {
        setSelectedIndex(index);
        setSelectedLocation(context.countryList[index].country);
        setIsOpenModal(false); // Close the modal after selection
    };

    const filterCountry = (e) => {
        const keyword = e.target.value.toLowerCase();
        const originalList = context.countryList || [];
        
        if (keyword) {
            const filteredList = originalList.filter((item) =>
                item.country.toLowerCase().includes(keyword)
            );
            setCountryList(filteredList);
        } else {
            setCountryList(originalList);
        }
    };

    // Truncate the selectedLocation to 10 characters with ellipsis
    const truncateLocation = (location, maxLength) => {
        return location.length > maxLength ? location.substring(0, maxLength) + '...' : location;
    };

    return (
        <div>
            {/* Button to display the current selected location */}
            <Button className="disDrop" onClick={() => setIsOpenModal(true)}>
                <div className="info d-flex flex-column">
                    <span className="dropName">Your Location</span>
                    <span className="selectName">{truncateLocation(selectedLocation, 10)}</span>
                </div>
                <div className="symbolDrop">
                    <FaAngleDown />
                </div>
            </Button>

            {/* Dialog for selecting a location */}
            <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} TransitionComponent={Transition} className="tourLocation">
                <span className="text1 mb-3">Pick a Location for Your Journey</span>
                <Button className="close_btn" onClick={() => setIsOpenModal(false)} aria-label="Close">
                    <IoClose />
                </Button>
                <div className="searchContent d-flex align-items-center w-100">
                    <input type="text" placeholder="Search" onChange={filterCountry} />
                    <Button aria-label="Search">
                        <IoMdSearch />
                    </Button>
                </div>
                <ul className="countryList data-box mt-2">
                    {countryList.length > 0 ? (
                        countryList.map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => selectCountry(index)}
                                    className={selectedIndex === index ? 'active' : ''}
                                    aria-label={`Select ${item.country}`}
                                >
                                    {item.country}
                                </button>
                            </li>
                        ))
                    ) : (
                        <li>No countries found</li>
                    )}
                </ul>
            </Dialog>
        </div>
    );
};

export default Locationdrop;
