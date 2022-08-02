import { CreateContainer, Header, MainContainer, NotFound } from "./components";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-gray-200">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
