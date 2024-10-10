import "./styles/global/global.css";
import theme from "./configs/chakraTheme.ts";

import {ChakraProvider, useMediaQuery} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {IRoute} from "./interfaces/route.interface.ts";
import {useRoutesService} from "./services/route.service.ts";
import ScreenSize from "./components/site/ScreenSize.tsx";

function App() {
    const routes: IRoute[] = useRoutesService();
    const [is320wide] = useMediaQuery("(max-width: 320px)");

    return (
        <>
            {!is320wide ? (
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
            ) : (
                <ScreenSize/>
            )}
        </>
    )
}

export default App
