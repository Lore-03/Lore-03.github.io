import React from 'react';

function RegisterPage() {
  return (
    <div className="register-page">
      <h1>Registro</h1>
      <form>
        <div>
          <label>Nombre</label>
          <input type="text" placeholder="Ingrese su nombre" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Ingrese su correo" required />
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" placeholder="Ingrese su contraseña" required />
        </div>
        <div>
          <label>Compañía</label>
          <select required>
            <option value="">Seleccione su compañía</option>
            <option value="1">Compañía 1</option>
            <option value="2">Compañía 2</option>
            <option value="3">Compañía 3</option>
          </select>
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default RegisterPage;
