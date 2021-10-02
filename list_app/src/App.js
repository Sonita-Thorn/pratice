import { useState, Fragment } from 'react';
import './App.css';

const App = () => {
  let cate = '';
  const [lists] = useState([
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ]);

  return (
    <div className="App">
      <table style={{ textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {lists.map(({ category, price, stocked, name }) => {
            let html = '';
            if (cate !== category) {
              html += `<td colspan="2"><b>${category}</b></td>`;
              cate = category;
            }
            return (
              <Fragment>
                <tr dangerouslySetInnerHTML={{ __html: html }}></tr>
                <tr>
                  <td style={!stocked ? { color: '#ff0000' } : {}}>{name}</td>
                  <td>{price}</td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
