import React, { useEffect, useState } from "react";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";

const Cabins = () => {
  const [cabins, setCabins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchCabin() {
  //     try {
  //       setIsLoading(true);
  //       const data = await getCabins();
  //       console.log(data);
  //       setCabins(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchCabin();
  // }, []);
  // Replaced useEffect with React Query for data fetching

  // if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Row type="horizontal">
        <Heading>Cabin</Heading>
        <p>Filter/Sort</p>
      </Row>

      <Row>
        <CabinTable />
      </Row>
    </>
  );
};

export default Cabins;
