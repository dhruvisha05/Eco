// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function Product(){
//     let [pro , pro1] = useState([]);

//     useEffect(()=>{
//         axios.get("https://fakestoreapi.com/products")
//         .then(function(response){
//             console.log(response.data.result);
//             pro1(response.data)
//          })
//          .catch(function (error) {
//             // handle error
//             console.log(error);
//           })
//     },[]);
//     return(
//         <>
//              {/* <div>
//       <h1>Products</h1>
//       <ul>
//         {pro.map(product => (
//           <li key={product.id}>
//             <h2>{product.title}</h2>
//             <p>{product.description}</p>
//             <p>${product.price}</p>
//             <img src={product.image} alt={product.title} width="100" />
//           </li>
//         ))}
//       </ul>
//     </div> */}
//     <div className="products-container">
//       <h1>Products</h1>
//       <div className="products-grid">
//         {pro
//         .map(product => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.title} className="product-image" />
//             <div className="product-info">
//               <h2>{product.title}</h2>
//               <p>{product.description}</p>
//               <p className="product-price">${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//         </>
//     )
// }
// export default Product;
// src/Products.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
 
// const Products = ( ) => {
//   const [products, setProducts] = useState([]);
//   const [sortOption, setSortOption] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = () => {
//         onSearch(searchTerm);
//         console.log(searchTerm);
//     };

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the data!', error);
//       });
//   }, []);

//   const handleSortChange = (e) => {
//     setSortOption(e.target.value);
//   };

//   const getSortedProducts = () => {
//     let sortedProducts = [...products];

//     if (sortOption === 'asc') {
//       sortedProducts.sort((a, b) => a.price - b.price);
//     } else if (sortOption === 'desc') {
//       sortedProducts.sort((a, b) => b.price - a.price);
//     }

//     return sortedProducts;
//   };

//   const sortedProducts = getSortedProducts();

//   return (
//     <div className="products-container">
//       <h1>Products</h1>

//       <div className="filter-container">
//         <label htmlFor="sort">Sort by price: </label>
//         <select id="sort" value={sortOption} onChange={handleSortChange}>
//           <option value="">None</option>
//           <option value="asc">Low to High</option>
//           <option value="desc">High to Low</option>
//         </select>
//       </div>
//       <div className="search">
//                             <input
//                                 type="text"
//                                 placeholder="Search..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                             />
//                             <input type="button" onClick={handleSearch} value={"Search"} />
//                         </div>

//       <div className="products-grid">
//         {sortedProducts.map(product => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.title} className="product-image" />
//             <div className="product-info">
//               <h2>{product.title}</h2>
//               <p>{product.description}</p>
//               <p className="product-price">${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [sortOption, setSortOption] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the data!', error);
//       });
//   }, []);

//   const handleSortChange = (e) => {
//     setSortOption(e.target.value);
//   };

//   const getFilteredAndSortedProducts = () => {
//     let filteredProducts = [...products];

//     // Filter products based on the search term
//     if (searchTerm) {
//       filteredProducts = filteredProducts.filter(product =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Sort products based on the selected sort option
//     if (sortOption === 'asc') {
//       filteredProducts.sort((a, b) => a.price - b.price);
//     } else if (sortOption === 'desc') {
//       filteredProducts.sort((a, b) => b.price - a.price);
//     }

//     return filteredProducts;
//   };

//   const filteredAndSortedProducts = getFilteredAndSortedProducts();

//   return (
//     <div className="products-container">
//       <h1>Products</h1>

//       <div className="filter-container">
//         <label htmlFor="sort">Sort by price: </label>
//         <select id="sort" value={sortOption} onChange={handleSortChange}>
//           <option value="">None</option>
//           <option value="asc">Low to High</option>
//           <option value="desc">High to Low</option>
//         </select>
//       </div>

//       <div className="search">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="products-grid">
//         {filteredAndSortedProducts.map(product => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.title} className="product-image" />
//             <div className="product-info">
//               <h2>{product.title}</h2>
//               <p>{product.description}</p>
//               <p className="product-price">${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });

    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the categories!', error);
      });
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const getFilteredAndSortedProducts = () => {
    let filteredProducts = [...products];

    // Filter products based on the search term
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter products based on the selected category
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product =>
        product.category === selectedCategory
      );
    }

    // Sort products based on the selected sort option
    if (sortOption === 'asc') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'desc') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
  };

  const filteredAndSortedProducts = getFilteredAndSortedProducts();

  return (
    <div className="products-page">
      <div className="sidebar">
        <h2>Categories</h2>
        <ul>
          <li onClick={() => handleCategoryChange('')}>All</li>
          {categories.map(category => (
            <li key={category} onClick={() => handleCategoryChange(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="products-container">
        <h1>Products</h1>

        <div className="filter-container">
          <label htmlFor="sort">Sort by price: </label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="">None</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="products-grid">
          {filteredAndSortedProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
