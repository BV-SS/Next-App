import React from 'react';

// components
import Navbar from '../components/navbar';
import Footer from '../components/footer';



const MainContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full mx-auto min-h-screen bg-gray-100  flex flex-col '>
            {/* header */}
            <Navbar />

            <main className="flex-grow p-3 flex flex-col bg-gray-200">
                {children}
            </main>

            {/* footer  */}
            <Footer />

        </div>
    )
}

export default MainContainer