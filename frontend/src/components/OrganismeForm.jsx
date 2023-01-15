import { Link } from "react-router-dom";
import React, { useState } from "react";
import api from "../api";
function OrganismeForm({ data,callback }) {

    const [name, setName] = useState(data?.name || "");

    const update = () => {
        if(name.length == 0) return;
        api.put(`organisme/${data._id}`, {
            name: name
        }, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }).then((res) => {
            callback();
        }).catch((e) => {
            console.error(e);
        })
    }

    const add = () => {
        if(name.length == 0) return;
        api.post(`organisme`, {
            name:name
        }, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }).then((res) => {
            callback();
        }).catch((e) => {
            console.error(e);
        })
    }
    const submitData = () => {
        if (data._id) {
            update();
        } else {
            add();
        }
    }
    return (
        <>
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-1 md:gap-6">
                    <div className="mt-5 md:mt-0">
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-1 mb-5">
                                    <div className="col-span-1">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                        <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" name="name" id="name" placeholder="name..." autoComplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button onClick={() => { submitData() }} type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrganismeForm;