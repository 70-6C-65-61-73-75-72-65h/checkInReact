import React, { ReactElement } from "react";

interface Props {}

export default function Tabs({}: Props): ReactElement {
  return (
    <div className="tabs">
      <input type="radio" id="tab1" name="tab-control" checked />
      <input type="radio" id="tab2" name="tab-control" />
      <input type="radio" id="tab3" name="tab-control" />
      <input type="radio" id="tab4" name="tab-control" />

      <ul>
        <li title="Start">
          <label htmlFor="tab1" role="button"></label>
        </li>
        <li title="01">
          <label htmlFor="tab2" role="button"></label>
        </li>
        <li title="02">
          <label htmlFor="tab3" role="button"></label>
        </li>
        <li title="03">
          <label htmlFor="tab4" role="button"></label>
        </li>
      </ul>

      <div className="slider">
        <div className="indicator"></div>
      </div>
      <div className="content">
        <section className="content__page-0"></section>
        <section className="content__page-1"></section>
        <section className="content__page-2"></section>
        <section className="content__page-3"></section>
      </div>
    </div>
  );
}
