import React, { useEffect } from 'react';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Assignments, Members, Profile, ResourceLocator, 
  Snippets, UiComponents, Placeholder } from './pages';


import { useStateContext } from './contexts/ContextProvider';
import './App.css'


const App = () => {
  const  { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4  bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button type="button" 
              className=" text-3xl p-3 hover:drop-shadow-xl
              hover:bg-light-gray"
              style={{ background: '#1E428A',  borderRadius: '50%' }}>
              <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-[360px]  h-[1024px] fixed sidebar 
            dark:bg-secondary-dark-bg bg-[#0F274F] ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0  dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div className={
            `dark:bg-main-bg  bg-main-bg min-h-screen w-full 
            ${activeMenu ? ' md:ml-72' : 'flex-2'}`
          }>
             <div className="fixed  md:static
             bg-main-bg dark:bg-main-dark-bg
             navbar w-full">
                <Navbar />
             </div>
          <div>
            <Routes >
              {/* Dashboard */}
              <Route path="/" element={<Members />} />
              <Route path="/members" element={<Members />} />
              <Route path="/ui-components" element={<UiComponents  />} />
              <Route path="/snippets" element={<Snippets  />} />
              <Route path="/assignments" element={<Assignments  />} />
              <Route path="/resource-locator" element={<ResourceLocator  />} />
              <Route path="/profile" element={<Profile  />} />
              <Route path="/placeholder" element={<Placeholder />} />
            </Routes>
          </div>
          </div>

        </div>
      </BrowserRouter>
    </div>
    )
}

export default App
