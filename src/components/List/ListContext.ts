import * as React from "react";
import { noop } from "../../lib/utils";

export const ListContext = React.createContext({
  isDragging: false as boolean,
  toggleDrag: noop as (value: boolean) => void,
});
