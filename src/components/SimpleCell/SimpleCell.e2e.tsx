import {
  Icon16MoreVertical,
  Icon16MoreHorizontal,
  Icon16MessageHeart,
  Icon24MessageOutline,
  Icon28MessageOutline,
} from "@vkontakte/icons";
import { SimpleCell, SimpleCellProps } from "./SimpleCell";
import { Avatar } from "../Avatar/Avatar";
import { IconButton } from "../IconButton/IconButton";
import { Switch } from "../Switch/Switch";
import { describeScreenshotFuzz } from "../../testing/e2e";

describe("SimpleCell", () => {
  describeScreenshotFuzz(
    (props: SimpleCellProps) => <SimpleCell {...props} />,
    [
      {
        before: [<Avatar key="avatar" size={40} />],
        children: ["Artur Stambultsian"],
        after: [
          <IconButton key="icon-w28">
            <Icon28MessageOutline />
          </IconButton>,
          <IconButton key="icon-w24">
            <Icon24MessageOutline />
          </IconButton>,
          <IconButton key="icon-w16">
            <Icon16MessageHeart />
          </IconButton>,
          <IconButton key="icon-w08">
            <Icon16MoreVertical />
          </IconButton>,
          <IconButton key="icon-w08">
            <Icon16MoreHorizontal />
          </IconButton>,
        ],
      },
      {
        $adaptivity: "y",
        before: [<Avatar key="avatar" size={40} />],
        children: [
          "Very long children Very long children Very long children Very long children Very long children Very long children Very long children Very long children",
        ],
        description: [
          "Very long description Very long description Very long description Very long description Very long " +
            "description Very long description Very long description Very long description Very long description Very long description Very long description Very long description",
        ],
        after: [
          <IconButton key="icon-w28">
            <Icon28MessageOutline />
          </IconButton>,
        ],
      },
      {
        before: [<Switch key="switch" />],
        children: ["Title"],
      },
      {
        after: [<Switch key="switch" />],
        children: ["Title"],
      },
    ]
  );
});
