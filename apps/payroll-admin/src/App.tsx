import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeSalaryList } from "./employeeSalary/EmployeeSalaryList";
import { EmployeeSalaryCreate } from "./employeeSalary/EmployeeSalaryCreate";
import { EmployeeSalaryEdit } from "./employeeSalary/EmployeeSalaryEdit";
import { EmployeeSalaryShow } from "./employeeSalary/EmployeeSalaryShow";
import { PayrollRecordList } from "./payrollRecord/PayrollRecordList";
import { PayrollRecordCreate } from "./payrollRecord/PayrollRecordCreate";
import { PayrollRecordEdit } from "./payrollRecord/PayrollRecordEdit";
import { PayrollRecordShow } from "./payrollRecord/PayrollRecordShow";
import { PaySlipList } from "./paySlip/PaySlipList";
import { PaySlipCreate } from "./paySlip/PaySlipCreate";
import { PaySlipEdit } from "./paySlip/PaySlipEdit";
import { PaySlipShow } from "./paySlip/PaySlipShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Payroll"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="EmployeeSalary"
          list={EmployeeSalaryList}
          edit={EmployeeSalaryEdit}
          create={EmployeeSalaryCreate}
          show={EmployeeSalaryShow}
        />
        <Resource
          name="PayrollRecord"
          list={PayrollRecordList}
          edit={PayrollRecordEdit}
          create={PayrollRecordCreate}
          show={PayrollRecordShow}
        />
        <Resource
          name="PaySlip"
          list={PaySlipList}
          edit={PaySlipEdit}
          create={PaySlipCreate}
          show={PaySlipShow}
        />
      </Admin>
    </div>
  );
};

export default App;
