import React from 'react'

function LineItem(props) {

    return (
     
        <div>
            <table>
                <thead>
                    <th>Item Name</th>
                    <th>Item Cost</th>
                    <th>Item Quantity</th>
                </thead>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.cost}</td>
                    <td>{props.quantity}</td>
                </tr>
                <tfoot>
                </tfoot>
            </table>
        </div>
    )
}

export default LineItem;

