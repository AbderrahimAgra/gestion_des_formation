import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import FormationForm from "../components/FormationForm";
import api from "../api";

function Formations() {

    const [formations, setFormations] = useState([]);
    const [selectedFormation, setSelectedFormation] = useState(null);

    const getFormations = async () => {
        api.get("formation", { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }).then((res) => {
            if (res.status == 200) {
                setFormations(res.data);
            }
        }).catch((e) => {
            console.error(e);
        })
    }

    const updateFormation = (id) => {
        setSelectedFormation(formations.find((formation) => { return formation._id === id }))
    }

    const deleteFormation = (id) => {
        api.delete(`formation/${id}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }).then((res) => {
            if (res.status == 204) {
                getFormations(res.data);
            }
        }).catch((e) => {
            console.error(e);
        })
    }

    const [role, setRole] = useState(null);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setRole(user.role);
        getFormations();
    }, [])

    return (
        <div className="min-h-full">
            <Header title={"Formations"} />
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="sm:px-0">
                        <div>
                            {(role == 'admin') && <button onClick={() => { setSelectedFormation({}) }} className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">Add Formation</button>}
                            {selectedFormation && <FormationForm data={selectedFormation} callback={() => { getFormations(), setSelectedFormation(null) }} />}
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(formations.length > 0) &&
                                                formations.map((formation, key) => {
                                                    return (<tr key={key}>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">{formation.name}</p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                                            {(role == 'admin') && <button onClick={() => { updateFormation(formation._id) }} type="button" className="inline-block text-gray-500 hover:text-gray-700 mx-3">
                                                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_429_11139)"><path d="M5 16L4 20L8 19L19.5858 7.41421C20.3668 6.63316 20.3668 5.36683 19.5858 4.58579L19.4142 4.41421C18.6332 3.63316 17.3668 3.63317 16.5858 4.41421L5 16Z" stroke="#292929" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 6L18 9" stroke="#292929" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 20H21" stroke="#292929" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath id="clip0_429_11139"><rect width="24" height="24" fill="white" /></clipPath></defs></svg>
                                                            </button>}
                                                            {(role == 'admin') && <button onClick={() => { deleteFormation(formation._id) }} type="button" className="inline-block text-gray-500 hover:text-gray-700 mx-3">
                                                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                            </button>}
                                                        </td>
                                                    </tr>)
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Formations;