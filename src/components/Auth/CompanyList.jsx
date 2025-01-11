import React from 'react';

const CompanyList = ({ companies }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Compañías</h2>
      <ul>
        {companies.map(company => (
          <li key={company.id} className="border p-2 mb-2">
            <h3 className="font-bold">{company.name}</h3>
            <p>{company.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;