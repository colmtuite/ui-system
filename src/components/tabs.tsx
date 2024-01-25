import * as React from "react";
import {
  Tabs as RACTabs,
  TabList as RACTabList,
  Tab as RACTab,
  TabPanel as RACTabPanel,
} from "react-aria-components";
import type {
  TabsProps,
  TabListProps,
  TabProps,
  TabPanelProps,
} from "react-aria-components";

export const Tabs = (props: TabsProps) => {
  return <RACTabs {...props} className="Tabs" />;
};

export const TabList = (props: TabListProps) => {
  return <RACTabList {...props} className="TabList" />;
};

export const Tab = (props: TabProps) => {
  return <RACTab {...props} className="Tab" />;
};

export const TabPanel = (props: TabPanelProps) => {
  return <RACTabPanel {...props} className="TabPanel" />;
};
