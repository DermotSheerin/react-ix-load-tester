import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";


const TenantList = (props) => {
  const list = props.tenantDetails.responseList.map((tenant, index) => {
    return (
      <tr key={index}>
        <td>{tenant.displayName}</td> 
        <td>{tenant.tenantId}</td> 
      </tr>
    );
  });

  const titleList = props.titles.map((title, index) => {
    return (
        <th>{title}</th>
    );
  });

  return (
    <>
    <h1>{`${props.header}`}</h1>
    <table className="table table-bordered">
      <thead>
        {titleList}
      </thead>
      <tbody >
        {list}
      </tbody >
    </table>
  </>
  );
};

export default TenantList;
