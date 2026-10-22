import React from 'react';
import Allcomp from '../Components/Allcomp';
import Footer from '../Components/Footer';
import HeaderContact from './HeaderContact';
import SecContact from './SecContact';

function AllContact() {
  return (
    <div>
      <Allcomp />
      <HeaderContact />
      <SecContact />
      <Footer />
    </div>
  );
}

export default AllContact;