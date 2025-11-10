import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCabins } from "../../services/apiCabins";
import Loader from "../../ui/Loader";
import styled from "styled-components";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  width: 100%;
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: grid;

  grid-template-columns: repeat(6, 1fr);

  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  padding: 1.6rem 2.4rem;
`;

const CabinTable = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  if (isLoading === true) return <Loader />;
  if (error) return <p>Error</p>;
  console.log(cabins);

  return (
    <Table>
      <TableHeader>
        <div>hisldjfnls</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
      </TableHeader>
    </Table>
  );
};

export default CabinTable;
