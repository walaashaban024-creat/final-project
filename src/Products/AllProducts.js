
import React, { useContext, useState } from 'react';
import Allcomp from '../Components/Allcomp';
import Footer from '../Components/Footer';
import { CartProvider, useCart } from 'react-use-cart';
import { AllData, apiValue } from '../Data/AllData';
import { Link } from 'react-router-dom';
function Page() {
    const data = useContext(apiValue);
    const [search, setSearch] = useState("All");
    
    const { addItem } = useCart();
    const getValue = (ahmed) => {
        setSearch(ahmed);
    };

    return (
        <div>
            <div className='section properties'>
                <div className='container'>
                    <ul className="properties-filter">
                        <li>
                            <button className={search=="All"?"is_active":""} onClick={()=>getValue("All")}>
                                All Data
                            </button>
                        </li>
                        <li>
                            <button className={search=="beauty"?"is_active":""} onClick={()=>getValue("beauty")}>
                                beauty
                            </button>
                        </li>
                        <li>
                            <button className={search=="fragrances"?"is_active":""} onClick={()=>getValue("fragrances")}>
                                fragrances
                            </button>
                        </li>
                        <li>
                            <button className={search=="furniture"?"is_active":""} onClick={() => getValue("furniture")}>
                         furniture
                        </button>
                        </li>
                    </ul>
                    <div className="row properties-box">
                        {data && data.map((item) => {
                            return search === "All" || item.category === search ? (
                                <div key={item.id} className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
                                    <div className="item">
                                        <a href="property-details.html">
                                            <img src={item.thumbnail || "assets/images/property-01.jpg"} alt={item.title} />
                                        </a>
                                        <span className="category">{item.category}</span>
                                        <h6>${item.price}</h6>
                                        <h4>
                                            <a href="property-details.html">{item.title}</a>
                                        </h4>
                                        <ul>
                                            <li>Bedrooms: <span>8</span></li>
                                            <li>Bathrooms: <span>8</span></li>
                                            <li>Area: <span>545m2</span></li>
                                            <li>Floor: <span>3</span></li>
                                            <li>Parking: <span>6 spots</span></li>
                                        </ul>
                                        <div className="main-button">
                                            <Link to={`/singleproduct/${item.id}`}>Details</Link>
                                             <button onClick={() => addItem(item)}>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ) : null;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

function AllProducts() {
    return (
        <AllData>
            <CartProvider>
                <Allcomp />
                <Page />
                <Footer />
            </CartProvider>
        </AllData>
    );
}

export default AllProducts;