import React from "react";
import { Platform } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { TooltipExample } from "./index";

export const Example = () => {
  if (Platform.OS === "web") {
    return <TooltipExample />;
  }

  return null;
};

storiesOf("Tooltip", module).add("Tooltip", Example);
