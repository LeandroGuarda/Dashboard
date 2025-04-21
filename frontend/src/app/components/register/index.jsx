"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('¡Registro exitoso! Ahora puedes iniciar sesión.');
      } else {
        toast.error('Error al registrar el usuario.');
      }

      console.log('Response:', data);

    } catch (error) {
      console.log('Error en la solicitud:', error.message);
    }
  };

  return (
    <StyledWrapper>
      <div className='flex justify-center pt-8 '>
        <div className="form-container">
          <p className="title">Registro</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="firstName">Nombre</label>
              <input type="text" name="firstName" id="firstName" placeholder='Ingresa tu nombre' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Apellido</label>
              <input type="text" name="lastName" id="lastName" placeholder='Ingresa tu apellido' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='Ingresa tu email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" id="password" placeholder='*********' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="sign">Registrar</button>
          </form>
          <ToastContainer />
          <div className="social-message">
            <div className="line" />
            <p className="message">Regístrate con una cuenta social</p>
            <div className="line" />
          </div>
          <div className="social-icons">
            {/* Aquí puedes añadir botones para redes sociales */}
          </div>
          <p className="signup">¿Ya tienes una cuenta?
            <a href="#" className>Iniciar sesión</a>
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Agregar tus estilos aquí */
`;

export default RegisterForm;
