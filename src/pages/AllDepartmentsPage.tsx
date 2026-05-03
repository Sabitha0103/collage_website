import React from 'react';
import Navbar from '../components/Navbar';
import Departments from '../components/Departments';
import Footer from '../components/Footer';

const AllDepartmentsPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col pt-[72px] bg-warm-50">
            <Navbar />
            <main className="flex-1 py-12">
                <Departments />
            </main>
            <Footer />
        </div>
    );
};

export default AllDepartmentsPage;
