import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Components/Navbar';
import { Link } from 'react-router-dom';
function Products() {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [option, setOption] = useState("")

  const url = 'https://fakestoreapi.com/products/'
  const OptionChange = (e) => {
    const value = e.target.value
    setSelectedCategory(value);
    if (value == "") {
      setOption(value)
    } else {
      setOption(`category/${value}`)
    }
    setData([])
  }
  useEffect(() => {

    fetch(url + option)
      .then(response => response.json())
      .then(data => {
        setData(data)

      })
  }, [selectedCategory])
  const scrollDivRef = useRef(null);

  useEffect(() => {

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const initialProducts = data.slice(0, 5);
        setProducts(data);
        setData(initialProducts);
        setStartIndex(5);

      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const scrollDiv = scrollDivRef.current;
    const handleScroll = () => {
      if (scrollDiv.scrollTop + scrollDiv.clientHeight === scrollDiv.scrollHeight) {
        fetchMoreData();
        console.log("Scroll en altta");
      }
    };

    scrollDiv.addEventListener('scroll', handleScroll);

    return () => scrollDiv.removeEventListener('scroll', handleScroll);
  }, [data]);

  const fetchMoreData = () => {
    let newData;
    if (selectedCategory) {
      const filteredProducts = products.filter(product => product.category === selectedCategory);
      newData = filteredProducts.slice(startIndex, startIndex + 5);
    } else {
      newData = products.slice(startIndex, startIndex + 5);
    }
    setData(prevData => [...prevData, ...newData]);
    setStartIndex(prevIndex => prevIndex + 5);
  };

  return (
    <div>
      <Navbar />
      <div className='bg-gray-200 h-[calc(100vh-80px)]'>
        <div className=' h-full container mx-auto max-w-7xl px-4'>
          <h1 className='text-4xl font-bold text-center py-8 italic'>Products</h1>
          <div className=' justify-end flex' >
            <select className=' p-4 rounded-xl' onChange={OptionChange} >
              <option value="">All Products</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
          </div>
          <div ref={scrollDivRef} className=' h-[calc(100vh-240px)] relative overflow-y-auto'>
            {data.map((item) => (
              <div className=' flex justify-center py-4 ' key={item.id} >
                <Link to={`detail/${item.id}`} className='p-4 rounded-xl bg-white max-w-52 border-2 cursor-pointer'>
                  <div className=' shadow-xl '>
                    <img src={item.image} alt="" className=' object-fitt w-48 h-48 transition-all duration-200 ease-linear  hover:scale-105' />
                  </div>
                  <h1 className='py-2'>{item.title}</h1>
                  <p className='text-center font-bold'><span>{item.price}</span><span>$</span></p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
