import React, { useContext } from 'react';
import Navbar from './Navbar';

import { UserContext } from '../../context/UserContext';
import { StatsContext } from '../../context/StatsContext';
import SideMenu from './SideMenu';
import Alert from '../Alert';
import { LuTriangleAlert } from 'react-icons/lu';

const DashboardLayout = ({ children, activeMenu }) => {
    const { user } = useContext(UserContext);
    const { isExpenseExceeded } = useContext(StatsContext);

    return (
        <div className=''>
            <Navbar activeMenu={activeMenu} />

            {user && (
                <div className='flex'>
                    <div className='max-[1080px]:hidden'>
                        <SideMenu activeMenu={activeMenu} />
                    </div>
                    <div className='grow mx-5'>
                        {isExpenseExceeded && (
                            <div className="mt-5">
                                <Alert
                                    message="Your expense amount has exceeded your income amount"
                                    type="error"
                                    icon={LuTriangleAlert}
                                />
                            </div>
                        )}
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardLayout