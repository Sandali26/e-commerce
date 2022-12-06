import React from 'react';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';

const ProductDetailPage = () => {
	return(
		<>
		 	<NavBar/>	
		 	<PageHeading title="Home / About"/>
		 	<section className="section section-center">
		        <div className="title">
		          <span />
		          <h2>our history</h2>
		          <span />
		        </div>
		        <p className="about-text">
				A typical online store enables the customer to browse the firm's range of clothes and services, view photos or images of the clothes, along with information about the product specifications, features and prices. Online stores usually enable shoppers to use "search" features to find specific clothes, brands or items.
		        </p>
		    </section>
		 	<Sidebar/>
		 	<Cart/>
		</>
		)
}


export default ProductDetailPage;