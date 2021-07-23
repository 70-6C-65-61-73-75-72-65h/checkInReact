import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actionField } from "../constatnts";
import { sortUsers } from "../redux/userList";

// should indicate active row on which now sorting performed
import down from "../static/icons/down.svg";
import up from "../static/icons/up.svg";

interface Props {
  [indes: string]: any;
}

export default function Table({
  columns,
  rows, // array of rows where keys
}: //   rowActions
//   rowActions,
Props): ReactElement {
  const [isAsc, setIsAsc] = useState(true);
  const [colKey, setColKey] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof colKey === "string") {
      dispatch(sortUsers({ rows, column: colKey, isAsc }));
    }
  }, [colKey]);

  return (
    <div className="table">
      <div className="table__header">
        {columns.map((column, id) => (
          <div
            data-id={column}
            key={id}
            className={colKey === id ? `table__cell active` : `table__cell`}
            onClick={
              actionField in column
                ? void 0
                : () => {
                    setColKey(this.dataset.id);
                  }
            }
            onDoubleClick={
              actionField in column
                ? void 0
                : () => {
                    setIsAsc((prev) => !prev);
                  }
            }
          >
            {!(actionField in column) && (
              <>
                <img src={isAsc ? up : down} alt="" /> {column}
              </>
            )}
          </div>
        ))}
      </div>
      {rows.map((row, rowId) => (
        <div key={rowId} className="table__row">
          {Object.keys(row).map((cellId) => (
            <div key={cellId} className={`table__cell`}>
              {actionField in row[cellId] ? (
                <button onClick={row[cellId].method}>
                  {row[cellId][actionField]}
                </button>
              ) : (
                row[cellId]
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// const rows = [
//     {
//         key:
//     }
// ]
