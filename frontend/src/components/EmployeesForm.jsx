import { Link } from "react-router-dom";
import React, { useState } from "react";
import api from "../api";
function EmployeesForm({ data,callback }) {

    const [firstname, setFirstname] = useState(data?.firstname || "");
    const [lastname, setLastname] = useState(data?.lastname || "");
    const [email, setEmail] = useState(data?.email || "");
    const [password, setPassword] = useState(data?.password || "");
    const [passwordConf, setPasswordConf] = useState(data?.password || "");

    const update = () => {
        if (password !== passwordConf) {
            console.log("Password dosen't match!")
            return;
        }
        api.put(`user/${data._id}`, {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            role: ["admin"],
        }, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }).then((res) => {
            console.log('res', res);
            callback();
        }).catch((e) => {
            console.error(e);
        })
    }

    const add = () => {
        if (password !== passwordConf) {
            console.log("Password dosen't match!")
            return;
        }
        api.post(`user`, {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            role: ["admin"],
        }, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }).then((res) => {
            console.log('res', res);
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
                                <div className="grid grid-cols-6 gap-6 mb-5">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                                        <input value={firstname} onChange={(e) => { setFirstname(e.target.value) }} type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                                        <input value={lastname} onChange={(e) => { setLastname(e.target.value) }} type="text" name="last-name" id="last-name" autoComplete="family-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" name="role" id="role" autoComplete="family-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-6 gap-6 mb-5">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                        <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" name="password" id="password" autoComplete="family-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="passwordConf" className="block text-sm font-medium text-gray-700">Confirm password</label>
                                        <input value={passwordConf} onChange={(e) => { setPasswordConf(e.target.value) }} type="passwordConf" name="passwordConf" id="passwordConf" autoComplete="family-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
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

export default EmployeesForm;