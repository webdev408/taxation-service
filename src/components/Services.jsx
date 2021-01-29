import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

const Services = () => {
    
    const [state, setState] = useState([
        {id: uuid(), title: 'tax planning', description: 'Careful tax planning is critical for business success in an unpredictable global economy. Tax planning is also necessary for individuals who face their own challenges of owning, managing and preserving wealth and earnings in a complex regulatory environment.'},
        {id: uuid(), title: 'tax accounting', description: 'In today\'s increasingly complex business and tax environment, there are more demands for transparency. Tax departments are also under pressure to be more effective and highly qualified professionals can be hard to obtain. We help you improve operating strategy and tax process with real time data and system effectiveness.'},
        {id: uuid(), title: 'tax compliance', description: 'For individuals as well as businesses, accurate tax compliance is an instrumental piece of the puzzle. Getting the piece right is increasingly complicated because of the rapid pace of legislative and regulatory change, and the increasing digitalization of revenue authorities in a complex regulatory environment. Staying current on tax development while meeting the demands for more transparency and financial information is unavoidable.'},
    ])
    const handleClick = () => {
        setState([...state, {id: uuid(), title:'tax return', description: 'We provide your tax return money same day you filed with us.You will not have to wait until CRA deposit arrives to your bank account.'}])
    }

    return (
        <div className="container my-4">
            <h1 className='text-center my-3'>Explore Tax Services</h1>
            <p>Our services comprise of tax planning, tax accounting and tax compliance. These are big issues for individuals as tax payers and organizations for making strategic decisions on the direction and scope of growth.We cater to both individuals and corporations in all areas of taxation.</p><br/>
            <h2 className='text-center my-4'>Our Tax Services</h2>
            <ul className='container bg-light text-dark'>
            <table className='table'>
            <thead>
                <tr>
                    <th className='text-center text-bold'>ID</th>
                    <th className='text-center text-bold'>Title</th>
                    <th className='text-center text-bold'>Description</th>
                </tr>
            </thead>
            <tbody>
                {state.map((item) => {
                return (
                        <tr key={item.id}>
                            <td className="bg-info text-light">{item.id}</td>
                            <td className='bg-info text-light'>{item.title}</td>
                            <td className="bg-info text-light">{item.description}</td>
                        </tr>
                     )
                    })}
                    <br/>
                    <button onClick={handleClick} className='btn btn-primary'>Click Me</button>
            </tbody>
            </table>
            </ul>
       </div>
    )
}

export default Services;
