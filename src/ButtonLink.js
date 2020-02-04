import { Icon } from "@blueprintjs/core";
import React from 'react';
import { Link } from "react-router-dom";

function ButtonLink(props) {
  return (
    <Link to={props.href} className="bp3-button bp3-minimal">
      {props.icon && <Icon icon={props.icon} />}
      <span className="bp3-button-text">{props.text}</span>
      </Link>
  );
}

export default ButtonLink;