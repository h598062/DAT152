import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

function CustomerForm ({customerform,updateForm,addCustomer}){
    const onFormupdate = (event) => {
        const target = event.target;
        updateForm({[target.name]: target.value});
    }

    const  onAddcustomer = (event) => {
        if (customerform.customername !== "") {
            addCustomer();
        }
    }

    return (
        <form>
            <fieldset>
                <table>
                    <tbody>
                        <tr><th><label htmlFor="customerid">Unique customer id:</label></th><td><input id="customerid" name="customerid" type="number" width="3" min={customerform.initialid} value={customerform.customerid} onChange={onFormupdate}/></td></tr>
                        <tr><th><label htmlFor="customername">Customer name:</label></th><td><input id="customername" name="customername" type="text" value={customerform.customername} onChange={onFormupdate}/></td></tr>
                    </tbody>
                </table>
                <p><button type="button" onClick={onAddcustomer}>Add customer</button></p>
            </fieldset>
        </form>
    )
}

function CustomerList({customerlist}) {
    let customerHTML = null

    if (customerlist.length > 0) {
        const customerHTMLRows = customerlist.map(customer => <tr key={customer.customerid} data-identity={customer.customerid}><td>{customer.customerid}</td><td>{customer.customername}</td></tr>);
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
//    const [customerid, setCustomerid] = React.useState(1);
//    const [customername, setCustomername] = React.useState('');

    const [customerform,setCustomerform] = React.useState(
        {
            customername: '',
            customerid: 1,
            initialid: 1
        }
    );

    const [customerlist,setCustomelist] = React.useState([]);


    const updateForm = (change) => {
        // Deep copy
        // const newCustomerForm = structuredClone(customerform);

        // Sahllow copy
        const newCustomerForm = Object.assign({},customerform);
        Object.assign(newCustomerForm,change);
        
        setCustomerform(newCustomerForm);
    };

    const addCustomer = () => {
        const customerList = Array.from(customerlist);
        customerList.push({
            customerid: customerform.customerid,
            customername: customerform.customername
        });
        setCustomelist(customerList);

        const nextId = Number(customerform.customerid)+1;
        setCustomerform({
            customername:'',
            customerid: nextId,
            initialid: nextId
        });
    };

    return (
        <>
            <CustomerForm customerform={customerform} updateForm={updateForm} addCustomer={addCustomer}  />
            <CustomerList customerlist={customerlist}/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CustomerView />);
