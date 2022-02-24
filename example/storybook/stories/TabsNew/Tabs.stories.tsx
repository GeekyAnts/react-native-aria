import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Wrapper } from "../Wrapper";
import { TabsExample, ITabList, ITab, ITabViews, ITabView } from "./index";
import { View } from "react-native";

export const Example = () => {
  return (
    <Wrapper>
      <View>
        <TabsExample>
          <ITabList>
            <ITab>Button1</ITab>
            <ITab>Button2</ITab>
            <ITab>Button3</ITab>
            <ITab>Button4</ITab>
          </ITabList>
          <ITabViews>
            <ITabView>Body 1</ITabView>
            <ITabView>Body 2</ITabView>
            <ITabView>Body 3</ITabView>
            <ITabView>Body 4</ITabView>
          </ITabViews>
        </TabsExample>
      </View>
    </Wrapper>
  );
};

storiesOf("TabsNew", module).add("Basic", Example);
