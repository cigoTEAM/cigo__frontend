import React from 'react';
import { Link } from 'react-router-dom';

const Discount = () => {
  return (
    <section className="section__discount">
      <p>
        <span>Descuento en Nosotras por 30%</span>
        <Link
            to="/"
        >
            <span className="discount__action">Obtener descuento</span>
        </Link>
      </p>
    </section>
  );
};

export default Discount;