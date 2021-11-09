import React from 'react';

function CheckOutProdInfo({ items, shippingCharge }) {
  const subTotalPrice = items.reduce((s, i) => s + i.product.discountPrice * i.quantity, 0);
  const total = subTotalPrice + shippingCharge;

  return (
    <div className="order-price-wrap my-3">
      <h3 className="heading">Order Details</h3>
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td>Subtotal Price</td>
            <td>:</td>
            <td className="text-right">{subTotalPrice}$</td>
          </tr>
          <tr>
            <td>Shipping Charge</td>
            <td>:</td>
            <td className="text-right">{shippingCharge}$</td>
          </tr>
          <tr>
            <td>
              <hr />
            </td>
            <td>
              <hr />
            </td>
            <td>
              <hr />
            </td>
          </tr>
          <tr>
            <td>Total Price</td>
            <td>:</td>
            <td className="text-right">{total}$</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CheckOutProdInfo;
