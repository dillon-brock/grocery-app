import React, { useState } from "react";
import { useCheckForLogOut } from "../../hooks/useCheckForLogOut";
import Header from "../../components/molecules/Header/Header";
import MyLists from "../../components/templates/MyLists/MyLists";
import ListTabs from "../../components/molecules/ListTabs/ListTabs";

export default function AllListsScreen() {

  const [activeTabId, setActiveTabId] = useState<number>(1);

  useCheckForLogOut();

  return (
    <>
      <Header showBackButton showMenuButton />
      <ListTabs setActiveId={setActiveTabId} />
      <MyLists activeTabId={activeTabId}/>
    </>
  );
}