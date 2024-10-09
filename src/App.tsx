import "./styles/global/global.css";
import theme from "./configs/chakraTheme.ts";

import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {IRoute} from "./interfaces/route.interface.ts";
import {useRoutesService} from "./services/route.service.ts";

function App() {
    const routes: IRoute[] = useRoutesService();

    return (
        <>
            <ChakraProvider theme={theme}>
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
