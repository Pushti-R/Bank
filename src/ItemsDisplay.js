function ItemsDisplay(props){
    return <div className="container">
     <div className="row display"><h2>Items</h2>
        <button className= "button">text</button>
        <button className= "button">text</button>
        <button className= "button">text</button>
        <button className= "button">text</button>
        <div className= "date">
            From<input type="date"/>
            To<input type="date"/> 
        </div>
     </div>
     <div className="row">
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">Text</th>
                    <th scope="col">Text</th>
                    <th scope="col">Text</th>
                    <th scope="col">Text</th>
                    <th scope="col">Text</th>
                    <th scope="col">Text</th>
                    <th scope="col">Text</th>
                    <th scope="col">Text</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>123</td>
                        <td>123</td>
                        <td>TEXT</td>
                        <td></td>
                        <td>TEXT</td>
                        <td>TEXT</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>123</td>
                        <td>TEXT</td>
                        <td>TEXT</td>
                        <td>TEXT</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>123</td>
                        <td>123</td>
                        <td>TEXT</td>
                        <td>TEXT</td>
                        <td>TEXT</td>
                        <td>TEXT</td>
                        <td>TEXT</td>
                    </tr>
                    <tr>
                        <td>123</td>
                        <td></td>
                        <td>123</td>
                        <td>TEXT</td>
                        <td>TEXT</td>
                        <td>TEXT</td>
                        <td></td>
                        <td>TEXT</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr> 
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>300.00</td>
                        <td>45,50,000</td>
                        <td colSpan = "4">Total</td>
                        <td>1520.60</td>
                        <td>12,38,000</td>
                    </tr>
                </tbody>
        </table>
     </div>
     
    </div>;
}

export default ItemsDisplay;