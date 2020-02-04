import { Alignment, Button, Navbar } from "@blueprintjs/core";
import React from 'react';
import ButtonLink from "./ButtonLink";

function Nav(props) {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading><span role="img" aria-label="icon">👀</span> Real Estate</Navbar.Heading>
          <Navbar.Divider />
          <ButtonLink href="/" text="Home" icon="home"/>
          <ButtonLink href="/app" icon="application" text="App"/>
      </Navbar.Group>

      <Navbar.Group align={Alignment.RIGHT}>
        <Button className="bp3-minimal" icon="moon" onClick={props.switchDarkMode} />
      </Navbar.Group>
    </Navbar>
  );
}

export default Nav;