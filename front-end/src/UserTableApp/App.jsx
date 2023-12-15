import React, { Fragment, useState, useEffect } from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector, Provider } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import UserTable from "./UserTable";

const checkboxes = [
  {
    id: "filterUsername",
    name: "filterUsername",
    label: "Filter by Username",
  },

  {
    id: "filterCity",
    name: "filterCity",
    label: "Filter by City",
  },

  {
    id: "filterCompany",
    name: "filterCompany",
    label: "Filter by Company",
  },
];

const filterMap = {
  filterUsername: (user) => user.username,
  filterCity: (user) => user.address.city,
  filterCompany: (user) => user.company.name,
};

const initialState = {
  filters: [],
  searchData: [],
  users: [],
};

const filterFn = (filters, query) => (item) => {
  const filterFunctions = filters.map((filter) => filterMap[filter]);

  const filterItem = (data) =>
    filterFunctions.reduce((acc, fn) => {
      acc.push(fn(data));
      return acc;
    }, []);

  return filterItem(item).join().toLowerCase().search(query) !== -1;
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // reducers를 완성하세요.
    initializeSearchData(state, action) {
      const { initData } = action.payload;
      state.searchData = initData;
      state.users = initData;
    },

    searchUsers(state, action) {
      const { query } = action.payload;
      const { searchData, filters } = state;

      if (!query) {
        state.users = searchData;
        return;
      }

      const filteredUsers = searchData.filter(filterFn(filters, query));

      state.users = filteredUsers;
    },

    addFilter(state, action) {
      state.filters.push(action.payload.name);
    },
    removeFilter(state, action) {
      const index = state.filters.findIndex(
        (filter) => filter === action.payload.name
      );
      state.filters.splice(index, 1);
    },
  },
});

// action creator를 slice에서 생성한 것으로 대체하세요.

const { initializeSearchData, searchUsers, addFilter, removeFilter } =
  usersSlice.actions;

const store = configureStore({ reducer: usersSlice.reducer });

export default function App() {
  return (
    <Provider store={store}>
      <UserTableApp />
    </Provider>
  );
}

const usersSelector = (state) => state.users;

function UserTableApp() {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
      .then((data) => dispatch(initializeSearchData({ initData: data })));
  }, [dispatch]);

  const handleReset = () => setQuery("");
  const handleChange = (e) => setQuery(e.target.value);

  useEffect(() => {
    dispatch(searchUsers({ query }));
  }, [dispatch, query]);

  const handleCheckboxChange = (e) => {
    const name = e.target.name;
    if (e.target.checked) dispatch(addFilter({ name }));
    else dispatch(removeFilter({ name }));
    dispatch(searchUsers({ query }));
  };

  return (
    <Container>
      <div>
        <label htmlFor="search-query">Search</label>
        <input
          value={query}
          onChange={handleChange}
          id="search-query"
          type="text"
          name="search-query"
        />
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>

      <CheckboxController>
        {checkboxes.map(({ id, name, pathFn, label }) => (
          <Fragment key={id}>
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              id={id}
              name={name}
            />
            <label htmlFor={id}>{label}</label>
          </Fragment>
        ))}
      </CheckboxController>

      <UserTable users={users} />
    </Container>
  );
}

const Container = styled.div`
  min-height: 600px;
`;

const CheckboxController = styled.div`
  padding: 8px 0;

  input:not(:first-of-type) {
    margin-left: 20px;
  }
`;
