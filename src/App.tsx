import Form from "./formComponent";
import NotificationTab from "./toastNotification";
import { NotificationProvider } from "./context/NotificationContext";

const App = () => {
  return (
      <NotificationProvider>
        <Form />
        <NotificationTab />
      </NotificationProvider>
  )
};

export default App;
