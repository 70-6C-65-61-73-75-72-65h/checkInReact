import React, { ReactElement } from "react";

interface Props {}

export default function PageContent({}: Props): ReactElement {
  return (
    <div className="page-content">
      <div className="page-content__text"></div>
      <div className="page-content__illustration"></div>
    </div>
  );
}
