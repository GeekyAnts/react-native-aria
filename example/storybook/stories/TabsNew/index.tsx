import React from "react";
import { Pressable, Text } from "react-native";
import { useTabsState } from "@react-stately/tabs";
import { useTabs, useTab } from "@react-native-aria/tabs";
import { SpectrumTabsProps } from "@react-types/tabs";
import { Orientation, DOMProps, Node } from "@react-types/shared";
import { SingleSelectListState } from "@react-stately/list";
import { View } from "react-native";
import { Item } from "@react-stately/collections";

const getTabsAndBars = (children: any) => {
  let bars: any = [];
  let views: any = [];
  let items = React.Children.toArray(children);
  let tabBarProps: any = { props: {}, ref: undefined };
  let tabViewsProps = { props: {}, ref: undefined };
  items.forEach((item: any) => {
    if (item.type) {
      if (item.type === ITabList) {
        bars = bars.concat(item.props.children);
        tabBarProps = { props: item.props, ref: item.ref };
      } else if (item.type === ITabViews) {
        views = views.concat(item.props.children);
        tabViewsProps = { props: item.props, ref: item.ref };
      }
    }
  });
  return { views, bars, tabViewsProps, tabBarProps };
};

const convertToCollectionItems = (children: any) => {
  const { views, bars } = getTabsAndBars(children);
  return bars.map((bar: any, index: number) => {
    let textValue;
    if (bar.props.accessibilityLabel) {
      textValue = bar.props.accessibilityLabel;
    } else if (typeof bar.props.children === "string") {
      textValue = bar.props.children;
    }
    return (
      <Item key={index} title={bar} textValue={textValue}>
        {views[index]}
      </Item>
    );
  });
};

export function TabsExample(props: SpectrumTabsProps<any>) {
  const collectionChildren = convertToCollectionItems(props.children);
  let state = useTabsState({ children: collectionChildren });
  let tablistRef = React.useRef<HTMLDivElement>();
  let { tabListProps, tabPanelProps } = useTabs(
    { children: collectionChildren },
    state,
    tablistRef
  );
  return (
    <>
      <TabList
        {...tabListProps}
        ref={tablistRef}
        state={state}
        selectedTab={state.selectedKey}
      />
      <View {...tabPanelProps} style={{ paddingLeft: 20 }}>
        {/* Body1 */}
        <Text>{state.selectedItem && state.selectedItem.props.children}</Text>
      </View>
    </>
  );
}

interface TabListProps<T> {
  isQuiet?: boolean;
  density?: "compact" | "regular";
  isDisabled?: boolean;
  orientation?: Orientation;
  state: SingleSelectListState<T>;
  selectedTab: HTMLElement;
  className?: string;
}

export const TabList = React.forwardRef(function <T>(
  props: TabListProps<T>,
  ref: any
) {
  let {
    isQuiet,
    density,
    state,
    isDisabled,
    orientation,
    selectedTab,
    className,
    ...otherProps
  } = props;

  return (
    <View
      {...otherProps}
      ref={ref}
      style={{
        flexDirection: props.orientation === "vertical" ? "column" : "row",
        padding: 10,
      }}
    >
      {/* Tabs1 */}
      {[...state.collection].map((item) => (
        <Tab
          key={item.key}
          item={item}
          state={state}
          isDisabled={isDisabled}
          orientation={orientation}
        />
      ))}
    </View>
  );
});

interface TabProps<T> extends DOMProps {
  item: Node<T>;
  state: SingleSelectListState<T>;
  isDisabled?: boolean;
  orientation?: Orientation;
}

export function Tab(props: TabProps<any>) {
  let { item, state, isDisabled: propsDisabled } = props;
  let { key, rendered } = item;
  let isDisabled = propsDisabled || state.disabledKeys.has(key);
  let ref = React.useRef<HTMLDivElement>(null);
  let { tabProps } = useTab({ item, isDisabled }, state, ref);
  let isSelected = state.selectedKey === key;
  console.log(ref);
  return (
    <Pressable
      {...tabProps}
      ref={ref}
      style={{
        marginLeft: 10,
      }}
    >
      {/* Tab1 */}
      <Text
        style={{
          color: isSelected ? "#5902EC" : "#1F2937",
          borderBottomColor: "#5902EC",
          borderBottomWidth: isSelected ? 2 : 0,
          padding: 10,
        }}
      >
        {rendered}
      </Text>
    </Pressable>
  );
}

// DUMMY COMPONENTS

interface ITabListProps<T> {
  children?: JSX.Element | JSX.Element[] | string | any;
}

export function ITabList(props: ITabListProps<any>) {
  return <View>{props.children}</View>;
}

interface ITabProps<T> {
  children?: JSX.Element | JSX.Element[] | string | any;
}

export function ITab(props: ITabProps<any>) {
  return <>{props.children}</>;
}

interface ITabViewsProps<T> {
  children?: JSX.Element | JSX.Element[] | string | any;
}

export function ITabViews(props: ITabViewsProps<any>) {
  return <>{props.children}</>;
}

interface ITabViewProps<T> {
  children?: JSX.Element | JSX.Element[] | string | any;
}

export function ITabView(props: ITabViewProps<any>) {
  return <>{props.children}</>;
}
