import React, { useEffect, useRef, useMemo } from "react";
import { useDispatch, Provider, useSelector } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import styled from "styled-components";

const initialState = {
  isRunning: false,
  startTime: 10,
  currentTime: 10,
  duration: 1000,
};

const palette = ["hotpink", "aquamarine", "coral", "cyan"];

// reducer를 정의하세요.
// action에 따른 state 변경 로직을 구현하세요.
// 주어진 initialState를 변경해 보세요.
const reducer = (state, action) => {
  switch (action.type) {
    case "timer/reset": {
      // currentTime을 초기화하고, 타이머를 중단합니다.
      return {
        ...state,
        currentTime: state.startTime,
        isRunning: false,
      };
    }

    case "timer/start": {
      // 타이머를 시작합니다.
      return {
        ...state,
        isRunning: true,
      };
    }

    case "timer/stop": {
      // 타이머를 중단합니다.
      return {
        ...state,
        isRunning: false,
      };
    }

    case "timer/tick": {
      // 시간을 1초 줄입니다.
      // 시간이 0이 되면 타이머를 멈춥니다.
      return {
        ...state,
        currentTime: state.currentTime - 1,
        //currentTime에서 한 타임 프레임을 줄이는 로직
        isRunning: state.currentTime - 1 > 0,
        //타이머를 멈추는건 isRunning, 지금 시간이 0보다 클때 isRunning을 체크함. 근데 currentTime을 -1 위에 했으니까 여기도 같이 -1해서 넣어줌.
      };
    }

    case "timer/setDuration": {
      // duration을 세팅합니다.
      return {
        ...state,
        duration: action.payload.duration,
      };
    }

    case "timer/setStartTime": {
      // startTime을 세팅합니다.
      return {
        ...state,
        duration: action.payload.startTime,
      };
    }

    default:
      return state;
  }
};

// action creator를 생성하세요.

const reset = () => ({ type: "timer/reset" });
const start = () => ({ type: "timer/start" });
const stop = () => ({ type: "timer/stop" });
const tickTimer = () => ({ type: "timer/tick" });
const setDuration = (duration) => ({
  type: "timer/setDuration",
  payload: { duration },
});
const setStartTime = (startTime) => ({
  type: "timer/setStartTime",
  payload: { startTime },
});

const store = createStore(reducer, initialState);

const durationSelector = (state) => state.duration;
const currentTimeSelector = (state) => state.currentTime;
const isRunningSelector = (state) => state.isRunning;
const startTimeSelector = (state) => state.startTime;

export default function Palette() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

function Counter() {
  const dispatch = useDispatch();
  // startTime을 조정하는 input에 대한 ref입니다.
  const startTimeInputRef = useRef();
  // duration을 조정하는 input에 대한 ref입니다.
  const durationInputRef = useRef();

  const duration = useSelector(durationSelector);
  const currentTime = useSelector(currentTimeSelector);
  const isRunning = useSelector(isRunningSelector);
  const startTime = useSelector(startTimeSelector);

  // 상황에 맞게 액션을 dispatch 하세요.
  const handleStop = () => dispatch(stop());
  const handleReset = () => dispatch(reset());
  const handleTimer = () => dispatch(start());

  const isResetted = useMemo(
    () => currentTime === startTime,
    [startTime, currentTime]
  );

  const isDone = useMemo(() => currentTime === 0, [currentTime]);

  useEffect(() => {
    // isRunning이 true일 경우, 타이머를 동작합니다.
    if (!isRunning) return;

    let timerId = null;

    const tick = () => {
      timerId = setTimeout(() => {
        if (!isRunning) return;
        // timer 상태 중 currentTime을 줄이세요.
        dispatch(tickTimer());
        tick();
      }, duration);
    };

    tick();

    return () => clearTimeout(timerId);
  }, [duration, isRunning]);

  return (
    <Container>
      <Time duration={duration} currentTime={currentTime} stopped={!isRunning}>
        {currentTime}
      </Time>

      <Button onClick={handleStop} disabled={!isRunning}>
        Stop
      </Button>

      <Button onClick={handleReset} disabled={isRunning || isResetted}>
        Reset
      </Button>

      <Button onClick={handleTimer} disabled={isRunning || isDone}>
        Start
      </Button>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const duration = Number(durationInputRef.current.value);
          // state의 duration 값을 변경하세요.
          console.log("Duration : ", duration);
          // duration을 변경한 경우, 타이머를 리셋하세요.
          dispatch(setDuration(duration));
        }}
      >
        <label htmlFor="duration">Duration(ms)</label>
        <input
          ref={durationInputRef}
          id="duration"
          type="text"
          name="duration"
          defaultValue={duration}
        />
        <input type="submit" value="Set" disabled={isRunning} />
      </Form>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          // state의 startTime 값을 변경하세요.
          const startTime = Number(startTimeInputRef.current.value);
          console.log("startTime : ", startTime);
          // startTime을 변경한 경우, 타이머를 리셋하세요.
          dispatch(setStartTime(startTime));
        }}
      >
        <label htmlFor="duration">Start Time(sec)</label>
        <input
          ref={startTimeInputRef}
          id="start-time"
          type="text"
          name="start-time"
          defaultValue={startTime}
        />
        <input type="submit" value="Set" disabled={isRunning} />
      </Form>
    </Container>
  );
}

const Button = styled.button`
  display: block;
  padding: 8px;
  margin: 4px 0;
`;

const Time = styled.div`
  box-sizing: border-box;

  margin: 12px 0;
  width: 400px;
  height: 400px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 100%;

  transition: background-color ${({ duration }) => duration}ms;
  background-color: ${({ currentTime }) =>
    palette[currentTime % palette.length]};

  font-size: 2rem;
  font-weight: bold;
  color: black;

  opacity: ${({ stopped }) => (stopped ? 0.4 : 1)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  margin-top: 8px;

  label {
    display: inline-block;
    min-width: 120px;
  }

  input[type="text"] {
    margin-right: 8px;
  }
`;
