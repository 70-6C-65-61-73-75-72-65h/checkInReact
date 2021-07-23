import React, { ReactElement, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import Table from "./components/Table";
import { actionField } from "./constatnts";
import {
  userListSelector,
  useTypedSelector,
  fetchAll,
  updateUser,
  deleteUserById,
} from "./redux/userList";
import "./styles/index.scss";

interface Props {}

export default function UsersCatalog({}: Props): ReactElement {
  const dispatch = useDispatch();
  const { users, loading, error } = useTypedSelector(userListSelector);
  useEffect(() => {
    if (users.length === 0 && loading === "idle") dispatch(fetchAll());
  }, [users.length, loading]);

  if (error)
    return (
      <div className="error">
        {typeof error === "string" ? error : error.message}
      </div>
    );

  if (users.length === 0) return <div className="no-users"></div>;
  if (users === null) return <div className="loading"></div>;

  const rowActions = [
    {
      method: (id: number) => dispatch(updateUser(id)),
      [actionField]: "update",
    },
    {
      method: () => (id: number) => dispatch(deleteUserById(id)),
      [actionField]: "delete",
    },
  ];

  const usersWithActions = useMemo(() => [...users, ...rowActions], [users]);

  return (
    <Table columns={Object.keys(usersWithActions[0])} rows={usersWithActions} />
  );
}
