import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const renderStars = (rate) => {
  const stars = [];
  for (let i = 0; i < rate; i++) {
    stars.push(<span key={i} className="text-yellow-400">★</span>);
  }
  for (let i = rate; i < 4; i++) {
    stars.push(<span key={i} className="text-gray-400">★</span>);
  }
  return stars;
};
export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchData = () => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(respo => respo.json())
        .then(data => {
          console.log("data", data);
          setData(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
          setLoading(false);
        });
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <nav className='h-20 relative w-full shadow-xl bg-white px-4'>
        <Link to={"/products"} className='absolute h-full flex items-center cursor-pointer text-2xl'>{"←"}</Link>
        <div className='h-full flex justify-center items-center font-bold text-3xl'>Product Details</div>
      </nav>
      <div className='h-[calc(100vh-80px)] bg-gray-200'>
        <div className='container h-full mx-auto max-w-7xl pt-11'>
          {loading ? (
            <div className=" h-full flex items-center justify-center">
               <div className="border-gray-300 h-16 w-16 animate-spin rounded-full border-8 border-t-gray-500" />
            </div>
          ) : (
            <div className="flex flex-col md:flex-row max-w-4xl mx-auto ">
              <div className="md:w-1/2 p-4 ">
                <div className="w-full h-80 bg-white p-4 rounded-3xl ">
                  <img src={data.image} alt='' title={data.title} className='h-full w-full ' />
                </div>
              </div>
              <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-2">{data.title}</h2> 
                <p className="text-gray-600 mb-4">{data.description}</p>
                <div className="flex mb-2">
                  {renderStars(data.rating.rate)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
