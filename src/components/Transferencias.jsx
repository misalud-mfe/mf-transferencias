import React, { useEffect, useState } from 'react'

import "common-resources/css/table.css";

const Transferencias = () => {
  const [transferidos, setTransferidos] = useState([]);

  useEffect(() => {
    if (window.transferidos) {
      setTransferidos(window.transferidos);
    }
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Historia</th>
            <th>Prioridad</th>
            <th>Destino</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {transferidos.map((a) => (
            <tr key={a.atencionId}>
              <td>{a.nombreCompleto}</td>
              <td>{a.historiaClinica}</td>
              <td style={{ backgroundColor: a.prioridadBgColor, color: a.prioridadFgColor }}>
                {a.prioridad}
              </td>
              <td>{a.destinoAtencion}</td>
              <td>{new Date(a.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transferencias