import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Wine: React.FC = ( match ): JSX.Element => {
    const [data, setData] = useState<any>([]);
    const params = useParams();
   
    useEffect(() => {
        const fetchWine = async () => {
            await axios
              .get(
                `http://localhost:3000/wines/?id=${params}`
              )
              .then((res) => {
                setData(res.data);
                console.log(res.data)
              })
              .catch((err) => console.log(err));
          };
        fetchWine();
    }, [params]);


// const fetchWine = async () => {
//     await axios
//       .get(
//         `http://localhost:3000/wines/?id=${params.id}`
//       )
//       .then((res) => {
//         setData(res.data);
//         console.log(data)
//       })
//       .catch((err) => console.log(err));
//   };
 
      return (
        <div>
        {/* {data.map((wine: any) => {
          return (
            <div className='product-container' key={wine._id}>
              <div>
                <img className='prod-image' src={wine.imageUrl} alt='' />
              </div>
              <div>
                <h1 className='brand'>{wine.title}</h1>
                <h2>{wine.category}</h2>
                <p>{wine.description}</p>
                <p>
                  <strong>Storage:</strong> {wine.storeInYears} years
                </p>
                <p>
                  <strong>Grapes:</strong> {wine.grapes}
                </p>
              </div>
            </div>
          );
        })} */}
      </div>
    );
  };
    export default Wine;