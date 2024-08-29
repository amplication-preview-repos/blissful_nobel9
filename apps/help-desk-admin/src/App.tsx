import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ResourceList } from "./resource/ResourceList";
import { ResourceCreate } from "./resource/ResourceCreate";
import { ResourceEdit } from "./resource/ResourceEdit";
import { ResourceShow } from "./resource/ResourceShow";
import { FaqList } from "./faq/FaqList";
import { FaqCreate } from "./faq/FaqCreate";
import { FaqEdit } from "./faq/FaqEdit";
import { FaqShow } from "./faq/FaqShow";
import { SupportTicketList } from "./supportTicket/SupportTicketList";
import { SupportTicketCreate } from "./supportTicket/SupportTicketCreate";
import { SupportTicketEdit } from "./supportTicket/SupportTicketEdit";
import { SupportTicketShow } from "./supportTicket/SupportTicketShow";
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
        title={"HelpDesk"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Resource"
          list={ResourceList}
          edit={ResourceEdit}
          create={ResourceCreate}
          show={ResourceShow}
        />
        <Resource
          name="Faq"
          list={FaqList}
          edit={FaqEdit}
          create={FaqCreate}
          show={FaqShow}
        />
        <Resource
          name="SupportTicket"
          list={SupportTicketList}
          edit={SupportTicketEdit}
          create={SupportTicketCreate}
          show={SupportTicketShow}
        />
      </Admin>
    </div>
  );
};

export default App;
