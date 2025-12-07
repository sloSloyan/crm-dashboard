
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideMenu from './components/SideMenu/SideMenu';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Total from './components/Total/Total';
import CustomersTable from './components/CustomersTable/CustomersTable';
import EditCustomerPage from './pages/EditCustomerPage/EditCustomerPage';
import { CustomersProvider } from './context';
import HookForm from './components/HookForm/HookForm';


function App() {
  return (
     <CustomersProvider>
    <Router>
    <div className={styles.app}>
      <SideMenu />
      <main className={styles.appMain}>
        <Header />
        <Total />
        <div className={styles.appContent}>
          <h1>CRM Dashboard</h1>
             <Routes>
               <Route path="/" element={<CustomersTable />} />
               <Route path="/customer/:id/edit" element={<EditCustomerPage />} />
             </Routes>
        </div>
      </main>
    </div>
    </Router>
    </CustomersProvider>
  );
}

export default App;