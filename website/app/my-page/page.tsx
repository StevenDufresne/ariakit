"use client";

import * as Ariakit from "@ariakit/react";

const MyMenu = () => {
  return (
    <Ariakit.MenuProvider>
      <Ariakit.MenuButton className="button">
        Actions
        <Ariakit.MenuButtonArrow />
      </Ariakit.MenuButton>
      <Ariakit.Menu gutter={8} className="menu">
        <Ariakit.MenuItem className="menu-item" onClick={() => alert("Edit")}>
          Edit
        </Ariakit.MenuItem>
        <Ariakit.MenuItem className="menu-item">Share</Ariakit.MenuItem>
        <Ariakit.MenuItem className="menu-item" disabled>
          Delete
        </Ariakit.MenuItem>
        <Ariakit.MenuSeparator className="separator" />
        <Ariakit.MenuItem className="menu-item">Report</Ariakit.MenuItem>
      </Ariakit.Menu>
    </Ariakit.MenuProvider>
  );
};

export default function Page() {
  // Access context

  const menus = Array.from({ length: 20 })
    .fill(0)
    .map((_, i) => (
      <div key={i}>
        <MyMenu />
      </div>
    ));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {menus}
    </div>
  );
}
