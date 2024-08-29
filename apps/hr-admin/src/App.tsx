import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TrainingList } from "./training/TrainingList";
import { TrainingCreate } from "./training/TrainingCreate";
import { TrainingEdit } from "./training/TrainingEdit";
import { TrainingShow } from "./training/TrainingShow";
import { RecruitmentList } from "./recruitment/RecruitmentList";
import { RecruitmentCreate } from "./recruitment/RecruitmentCreate";
import { RecruitmentEdit } from "./recruitment/RecruitmentEdit";
import { RecruitmentShow } from "./recruitment/RecruitmentShow";
import { EmployeeEngagementList } from "./employeeEngagement/EmployeeEngagementList";
import { EmployeeEngagementCreate } from "./employeeEngagement/EmployeeEngagementCreate";
import { EmployeeEngagementEdit } from "./employeeEngagement/EmployeeEngagementEdit";
import { EmployeeEngagementShow } from "./employeeEngagement/EmployeeEngagementShow";
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
        title={"HR"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Training"
          list={TrainingList}
          edit={TrainingEdit}
          create={TrainingCreate}
          show={TrainingShow}
        />
        <Resource
          name="Recruitment"
          list={RecruitmentList}
          edit={RecruitmentEdit}
          create={RecruitmentCreate}
          show={RecruitmentShow}
        />
        <Resource
          name="EmployeeEngagement"
          list={EmployeeEngagementList}
          edit={EmployeeEngagementEdit}
          create={EmployeeEngagementCreate}
          show={EmployeeEngagementShow}
        />
      </Admin>
    </div>
  );
};

export default App;
