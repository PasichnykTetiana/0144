import {
  createContext,
  type FC,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useToggle } from "react-use";

import routes from "../../pages";


type AppProps = {
  burger: { opened: boolean; toggle: VoidFunction };
};

const defaultValue: AppProps = {
  burger: { opened: false, toggle: () => undefined },
};

const Context = createContext<AppProps>(defaultValue);

const ContextProvider: FC<PropsWithChildren<Partial<ReactNode>>> = ({
  children,
}) => {
  const [opened, toggle] = useToggle(false);

  return (
    <Context.Provider value={{ ...defaultValue, burger: { opened, toggle } }}>
      {children}
    </Context.Provider>
  );
};

const Pages = () => <RouterProvider router={createBrowserRouter(routes)} />;

const App: FC = () => (
  <ContextProvider>
    <Pages />
  </ContextProvider>
);

export { App };
