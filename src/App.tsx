import {ChakraProvider} from "@chakra-ui/react";

import "./styles/global.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {IRoute} from "./interfaces/route.interface.ts";
import {useRoutesService} from "./services/routes.services.ts";

function App() {
    const routes: IRoute[] = useRoutesService();

    return (
        <>
            <ChakraProvider>
                <BrowserRouter>
                    <Routes>
                        {routes.map((route) => (
                            <Route
                                key={route.name}
                                path={route.path}
                                element={<route.element/>}
                            />
                        ))}
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
        </>
    )
}

export default App
