export interface IState {
  value: number;
  data: number[];
  text: string;
}

const defaultSate: IState = {
  value: 0,
  data: [],
  text: "",
};

export const counterReducer = (state = defaultSate, action: any) => {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1, data: [], text: "" };
    case "counter/reset":
      return { value: 0, data: [], text: "" };
    case "counter/setValue":
      return { value: action.value, data: [], text: "" };
    default:
      return state;
  }
};
