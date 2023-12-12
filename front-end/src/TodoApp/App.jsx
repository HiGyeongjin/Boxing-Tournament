import React, {
  useCallback,
  useEffect,
  useState,
  createContext,
  //   useContext,
  //   useReducer,
} from "react";
import { useDispatch, Provider, useSelector } from "react-redux";
import { createSelector, configureStore, createSlice } from "@reduxjs/toolkit";

const capitalize = (s) => s.charAt(0).toUpperCase().concat(s.slice(1));
const filterList = ["all", "completed", "todo"];

const fetchTodos = () =>
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((data) => data.json())
    .then((todos) => todos.slice(0, 3));

const TodoContext = createContext(null);

const initialState = {
  todos: [],
  filter: "all",
  globalId: 3000,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // reducers를 완성하세요.
    changeFilter(state, action) {
      state.filter = action.payload;
    },

    initializeTodos(state, action) {
      state.todos = action.payload;
    },

    addTodo(state, action) {
      state.todos.unshift({
        title: action.payload,
        id: state.globalId,
      });
      state.globalId++;
    },
    deleteTodo(state, action) {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(index, 1);
    },
    toggleTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

const store = configureStore({ reducer: todosSlice.reducer });

// todosSlice의 reducers를 완성하고, 이 코드를 제거하세요.

// 이 코드를 리팩토링하여 useDispatch와 slice에서 생성한 액션을 활용해 action creator를 생성하세요.
// ex) const toggleTodo = id => dispatch(todoSlice.actions.toggleTodo(id))

const actions = todosSlice.actions;

function useTodoActions() {
  const dispatch = useDispatch();
  const toggleTodo = useCallback((id) => dispatch(actions.toggleTodo(id)), []);
  const deleteTodo = useCallback((id) => dispatch(actions.deleteTodo(id)), []);
  const addTodo = useCallback((title) => dispatch(actions.addTodo(title)), []);
  const changeFilter = useCallback(
    (filter) => dispatch(actions.changeFilter(filter)),
    []
  );
  const initializeTodos = useCallback(
    (todos) => dispatch(actions.initializeTodos(todos)),
    []
  );

  return {
    toggleTodo,
    deleteTodo,
    addTodo,
    changeFilter,
    initializeTodos,
  };
}

function TodoApp() {
  // Provider를 교체하고, store를 넣어주세요.
  return (
    <Provider store={store}>
      <TodosPage />
    </Provider>
  );
}

export default TodoApp;

function TodosPage() {
  // redux의 action creator를 사용하도록 메서드를 교체하세요.
  const { initializeTodos } = useTodoActions();

  useEffect(() => {
    fetchTodos().then(initializeTodos);
  }, [initializeTodos]);

  return (
    <div>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
}

function TodoForm() {
  // redux의 action creator를 사용하도록 메서드를 교체하세요.
  const { addTodo } = useTodoActions();
  const [title, setTitle] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(title);
        setTitle("");
      }}
    >
      <label htmlFor="todo-title">Title</label>

      <input
        id="todo-title"
        type="text"
        name="todo-title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <button type="submit">Make</button>
    </form>
  );
}
const filteredTodosSelector = createSelector(
  (state) => state.todos,
  (state) => state.filter,
  (todos, filter) => {
    return todos.filter((todo) => {
      return (
        filter === "all" ||
        (filter === "completed" && todo.completed) ||
        (filter === "todo" && !todo.completed)
      );
    });
  }
);
function TodoList() {
  // redux의 action creator를 사용하도록 메서드를 교체하세요.
  const { toggleTodo, deleteTodo } = useTodoActions();

  const filteredTodos = useSelector(filteredTodosSelector);

  // filteredTodosSelector 를 만들고, 데이터를 얻는 로직을 분리하세요.
  // createSelector를 활용하세요.

  const handleDeleteTodo = (id) => (e) => {
    e.stopPropagation();
    deleteTodo(id);
  };

  return (
    <ul>
      {filteredTodos.map(({ title, completed, id }) => (
        <li key={id} onClick={() => toggleTodo(id)}>
          <h5>{title}</h5>
          <div>
            {completed ? "☑️ " : "✏️ "}
            <button onClick={handleDeleteTodo(id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

function TodoFilter() {
  const { changeFilter } = useTodoActions();
  // context가 아닌 redux store에서 데이터를 얻어오세요.
  const filter = useSelector((state) => state.filter);

  return (
    <div>
      <label htmlFor="filter">Filter</label>
      <select
        onChange={(e) => changeFilter(e.target.value)}
        id="filter"
        name="filter"
        value={filter}
      >
        {filterList.map((filterText) => (
          <option key={filterText} value={filterText}>
            {capitalize(filterText)}
          </option>
        ))}
      </select>
    </div>
  );
}
