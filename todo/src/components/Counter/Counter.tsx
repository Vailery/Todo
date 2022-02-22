import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { IState } from "../../redux/reducers/counterReducer";

export const Counter = () => {
  const state = useSelector((state: IState) => state);

  const dispatch = useDispatch();

  return (
    <>
      <h4>Value from redux {state.value}</h4>
      <div style={{ display: "flex" }}>
        <Button
          text="+"
          onClick={() => {
            dispatch({ type: "counter/incremented" });
          }}
        />

        <Button
          text="-"
          onClick={() => {
            dispatch({ type: "counter/decremented" });
          }}
        />

        <Button
          text="reset"
          onClick={() => {
            dispatch({ type: "counter/reset" });
          }}
        />

        <Button
          text="set to 10"
          onClick={() => {
            dispatch({ type: "counter/setValue", value: 10 });
          }}
        />
      </div>
    </>
  );
};
