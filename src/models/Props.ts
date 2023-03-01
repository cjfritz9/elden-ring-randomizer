import { RGB } from "./Results";

export interface SwitchOptionProps {
  // name of the option
  option: string;
  // text that will go into the information pop-out on hover
  info: string;
  // function that sets the toggle state and passes it back to the App
  setOption: (prev: any) => void;
  defaultIsChecked: boolean;
}

export interface ResultItemProps {
  fieldName: string;
  result: string | number | RGB | null | undefined;
  colorResult?: boolean;
}
