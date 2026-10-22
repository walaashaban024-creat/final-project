import React from 'react';
import Allcomp from '../Components/Allcomp';
import Footer from '../Components/Footer';
import HeaderDetails from './HeaderDetails';
import SingleProp from './SingleProp';
import BestDeal from './BestDeal';

function AllDetails() {
  return (
    <div>
      <Allcomp />
      <HeaderDetails />
      <SingleProp />
      <BestDeal />
      <Footer />
    </div>
  );
}

export default AllDetails;