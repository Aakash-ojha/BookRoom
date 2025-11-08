import React, { useEffect, useState } from "react";
import { getCabins } from "../services/apiCabins";

const Cabins = () => {
  const [cabins, setCabins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCabin() {
      try {
        setIsLoading(true);
        const data = await getCabins();
        console.log(data);
        setCabins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCabin();
  }, []);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {cabins.map((cabin) => (
        <img src={cabin.image} />
      ))}
    </div>
  );
};

export default Cabins;
