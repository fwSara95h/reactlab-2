import React from "react";
//import { useState } from "react";

export default function RegisterForm() {
    const [form, setForm] = React.useState({ // useState({ 
        firstName: "Luke",
        lastName: "Jones",
        email: "lukeJones@sculpture.com"
    });

    return (
        <div>
            <label>
                First Name:
                <input
                    value={form.firstName}
                    onChange={e => { setForm({ ...form, firstName: e.target.value }); }}
                />
            </label>
            <label>
                Last Name:
                <input
                    value={form.lastName}
                    onChange={e => { setForm({ ...form, lastName: e.target.value }); }}
                />
            </label>
            <label>
                Email:
                <input
                    value={form.email}
                    onChange={e => { setForm({ ...form, email: e.target.value }); }}
                />
            </label>
            <p>{form.firstName}{' '}{form.lastName}{' '}({form.email})</p>
        </div>
    );
}