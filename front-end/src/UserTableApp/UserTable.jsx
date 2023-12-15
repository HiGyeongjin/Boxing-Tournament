import React, { Children } from "react";
import styled from "styled-components";

const colors = {
  pink0: "#fff0f6",
  pink1: "#ffdeeb",
  pink2: "#fcc2d7",
  pink5: "#f06595",
  pink9: "#a61e4d",
};

export default function UserTable({ users }) {
  return (
    <Table>
      <caption>User table</caption>

      <thead>
        <tr>
          <th>Username</th>
          <th>City</th>
          <th>Company</th>
        </tr>
      </thead>

      <tbody>
        {Children.toArray(
          users.map(({ username, address, company }) => (
            <tr>
              <td>{username}</td>
              <td>{address.city}</td>
              <td>{company.name}</td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  border-spacing: 0;
  border-collapse: collapse;

  font-size: 0.9rem;
  color: ${colors.pink9};
  font-weight: 700;

  caption {
    color: black;
    font-size: 1.4rem;
    font-weight: bold;
    padding-bottom: 8px;
  }

  &,
  th,
  td {
    border: 1px solid black;
  }

  th,
  td {
    padding: 12px;
    min-width: 200px;
  }

  th {
    background: ${colors.pink5};
    color: white;
    font-size: 1.2rem;
  }

  tr:nth-child(2n) {
    background: ${colors.pink0};
  }
`;
