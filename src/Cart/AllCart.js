import React from 'react'
import AllComp from '../Components/Navbar';
import Footer from '../Components/Footer';
import { CartProvider, useCart } from 'react-use-cart'
import Navbar from '../Components/Navbar';

function Cart(){
    const {items,updateItemQuantity,removeItem,totalItems,totalUniqueItems,cartTotal,emptyCart,isEmpty} = useCart();
    return(
        <div>

       <div className="container bootstrap snippets bootdey">
  <div className="col-md-9 col-sm-8 content">
     <div className="row">
  <div className="col-md-12">
    <ol className="breadcrumb" style={{ fontSize: '18px', background: 'transparent', padding: '0', marginBottom: '15px' }}>
      <li style={{ display: 'inline' }}>
        <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>Home</a>
      </li>
      <span style={{ margin: '0 10px', color: '#6c757d', fontWeight: 'bold' }}>/</span>
      <li className="active" style={{ display: 'inline', color: '#333', fontWeight: '500' }}>Cart</li>
    </ol>
  </div>
</div>
    <div className="row">
      <div className="col-md-12">
        <div className="panel panel-info panel-shadow">
          <div className="panel-heading">
            <h3>
              <img
                className="img-circle img-thumbnail"
                src="https://bootdey.com/img/Content/user_3.jpg"
                style={{width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover'}} 
                alt="User"
              />
              Matew darfkmoun
            </h3>
          </div>
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://www.bootdey.com/image/400x200/FFB6C1/000000"
                        
                        style={{ width: '50px', height: '50px', maxWidth: '50px', maxHeight: '50px', objectFit: 'cover', display: 'block', margin: '0 auto', borderRadius: '4px' }}
                        alt="Product"
                      />
                    </td>
                    <td>
                      <strong>Product 1</strong>
                      <p>Size : 26</p>
                    </td>
                    <td>
                      <form className="form-inline">
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={1}
                          style={{ width: '120px', minWidth: '120px' }}
                        />
                        <button type="button" className="btn btn-default">
                          <i className="fa fa-pencil" />
                        </button>
                          <a href="#" className="btn btn-primary" style={{ width: '45px', height: '38px', fontSize: '18px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
  🗑️
</a>
                      </form>
                    </td>
                    <td>$54.00</td>
                    <td>$54.00</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://www.bootdey.com/image/400x200/87CEFA/000000"
                        style={{ width: '50px', height: '50px', maxWidth: '50px', maxHeight: '50px', objectFit: 'cover', display: 'block', margin: '0 auto', borderRadius: '4px' }}

                        alt="Product"
                      />
                    </td>
                    <td>
                      <strong>Product 2</strong>
                      <p>Size : M</p>
                    </td>
                    <td>
                      <form className="form-inline" >
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={2}
                          style={{ width: '120px', minWidth: '120px' }}
                        
                        />
                        <button type="button" className="btn btn-default">
                          <i className="fa fa-pencil" />
                        </button>
                        <a href="#" className="btn btn-primary" style={{ width: '45px', height: '38px', fontSize: '18px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
  🗑️
</a>
                      </form>
                    </td>
                    <td>$16.00</td>
                    <td>$32.00</td>
                  </tr>
                  <tr>
                    <td colSpan={5}>&nbsp;</td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={{border: 'none'}}></td>
                    <td className="text-right">Total Product</td>
                    <td>$86.00</td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={{border: 'none'}}></td>
                    <td className="text-right">Total Shipping</td>
                    <td>$2.00</td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={{border: 'none'}}></td>
                    <td className="text-right"><strong>Total</strong></td>
                    <td>$88.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px'}}>
    <a href="#" className="btn btn-success">
        <span className="glyphicon glyphicon-arrow-left" />
        &nbsp;Continue Shopping
    </a>
    <a href="#" className="btn btn-primary">
        Next
        <span className="glyphicon glyphicon-chevron-right" />
    </a>
</div>
      </div>
    </div>
  </div>
</div>


        </div>
    )
}

function AllCart() {
    return (
        <CartProvider>
        <AllComp />
            <Cart/>
            <Footer />
        </CartProvider>
    )
}

export default AllCart