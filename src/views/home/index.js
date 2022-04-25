import React, { useState, useEffect } from 'react';
import ProductCard from "../../components/card/ProductCard";
import Pagination from "react-js-pagination";
import { useDispatch } from 'react-redux';
import { getProducts } from '../../stores/actions/products';
import { useSelector } from "react-redux";



function Home() {

    const [activePage, setActivePage] = useState(1)
    const [range, setRange] = useState({ start: 0, end: 6 })
    const productPerPage = 6;
    const sizelist = 24 //this.state.ProductsList.length;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());

    }, [dispatch])
    const products = useSelector((state) => state.products.products)

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber)

        const start = productPerPage * (pageNumber - 1);
        const end = productPerPage * pageNumber;
        const range = { start, end }

        setRange(range)

    }



    return (
        <>
            <div className="list-product">
                {(products.slice(range.start, range.end)).map((item, index) =>
                    < ProductCard key={item._id} product={item} />
                )
                }
            </div>
            <Pagination
                activePage={activePage}
                itemsCountPerPage={productPerPage}
                totalItemsCount={sizelist}
                pageRangeDisplayed={3}
                onChange={handlePageChange}
            />
        </>

    )

}

export default Home;