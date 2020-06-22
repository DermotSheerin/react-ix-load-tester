import React from "react";
import { storiesOf } from "@storybook/react";
import TenantList from "../components/tenantList";


const sampleTenant = {
  "totalSize": 5,
  "responseList": [
      {
          "tenantId": "TJXJXK",
          "displayName": "Reserved4Auto_Tenant3",
          "enabled": true,
          "accessTokenLifeSpan": 1800,
          "refreshTokenLifeSpan": 3600,
          "resourcePath": "/v1/tenants/TJXJXK"
      },
      {
          "tenantId": "QMBYHQ",
          "displayName": "Reserved4Auto_Tenant2",
          "enabled": true,
          "accessTokenLifeSpan": 1800,
          "refreshTokenLifeSpan": 3600,
          "resourcePath": "/v1/tenants/QMBYHQ"
      },
      {
          "tenantId": "KVHJCY",
          "displayName": "Default",
          "enabled": true,
          "accessTokenLifeSpan": 1800,
          "refreshTokenLifeSpan": 3600,
          "resourcePath": "/v1/tenants/KVHJCY"
      }
  ]
}

const name = "IX - Configuration Details";
const titles = ['Tenant Name', 'Tenant ID'];
const details = [
  {
    name: "Tenant 1"
  }
];


storiesOf("Home Page/TenantList", module)
.add("default", () => {
  return <TenantList tenantDetails={sampleTenant} header={name} titles={titles} />;
});
