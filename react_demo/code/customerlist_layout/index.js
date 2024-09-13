import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

function CustomerForm (){

    const [customerid, setCustomerid] = React.useState(1);
    const [customername, setCustomername] = React.useState('');

    
    const customeridChange = (event) => {
        setCustomerid(event.target.value);
    }

    const customernameChange = (event) => {
        setCustomername(event.target.value.trim());
    }

    const  addCustomer = (event) => {
        if (customername !== "") {
            let text =
                `Default id should be larger that max value used in the list. How to achieve?
Must add customer ${customername} with unique id ${customerid} to list. How to achieve?`
            window.alert(text);
        }
    }

    return (
        <form>
            <fieldset>
                <table>
                    <tbody>
                        <tr><th><label htmlFor="customerid">Unique customer id:</label></th><td><input id="customerid" name="customerid" type="number" width="3" min="1" value={customerid} onChange={customeridChange}/></td></tr>
                        <tr><th><label htmlFor="customername">Customer name:</label></th><td><input id="customername" name="customername" type="text" value={customername} onChange={customernameChange}/></td></tr>
                    </tbody>
                </table>
                <p><button type="button" onClick={addCustomer}>Add customer</button></p>
            </fieldset>
        </form>
    )
}

function CustomerList() {
    const customers = [
        {"customerid": 1, "customername":"Ole Olsen"},
        {"customerid": 2, "customername":"Anne Annesen"},
        {"customerid": 3, "customername":"Per Persen"}
    ]
    
    let customerHTML = null
    
    if (customers.length > 0) {
        const customerHTMLRows = customers.map(customer => <tr key={customer.customerid} data-identity={customer.customerid}><td>{customer.customerid}</td><td>{customer.customername}</td></tr>);
        customerHTML = 
            <table>
                <thead>
                    <tr><th>Customer id</th><th>Customer name</th></tr>
                </thead>
                <tbody>
                    {customerHTMLRows}
                </tbody>
            </table>
    }
    return (customerHTML)
}

function CustomerView() {
        return (
            <>
                <CustomerForm/>

                <CustomerList/>
            </>
        );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CustomerView />);
