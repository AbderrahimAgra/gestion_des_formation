import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../components/Header";


const Dashboard = () => {

    return (
        <div className="min-h-full">
            <Header title={"Dashboard"} />
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

                    <div className="px-4 py-6 sm:px-0">
                        <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
                            <Outlet />
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default Dashboard