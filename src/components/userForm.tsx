import React, { useState, ChangeEvent, FormEvent } from "react";
import "./userForm.css";
import { Button, Select, Input, Space, Typography , Result} from "antd";
const { Title } = Typography;

export const createUser = async (user: Usuario) => {
  const response = await fetch("http://localhost:3001/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return await response.json();
}

// Definición de la interfaz para el estado del usuario
interface Usuario {
  genero: string;
  nombre: string;
  apellido: string;
  correoElectronico: string;
  nacimiento: string;
  horas: string;
  coordenadas: string;
}

const UserForm: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    genero: "",
    nombre: "",
    apellido: "",
    correoElectronico: "",
    nacimiento: "",
    horas: "",
    coordenadas: "",
  });

  const handleChange = (name: string, value: string) => {
    setUsuario({ ...usuario, [name]: value });
  };

  const [showResult, setShowResult] = useState(false);
  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(usuario);

    try {
      const response = await createUser(usuario);
      console.log(response);
      // Si la creación del usuario es exitosa, muestra el componente Result
      setShowResult(true);
    } catch (error) {
      console.error(error);
      alert("Error al crear el usuario");
    }
  };

  
  const handleGeneroChange = (value: string) => {
    setUsuario({ ...usuario, genero: value });
  };

  const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, nombre: e.target.value });
  };

  const handleApellidoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, apellido: e.target.value });
  };

  const handleCorreoElectronicoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsuario({ ...usuario, correoElectronico: e.target.value });
  };

  const handleNacimientoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, nacimiento: e.target.value });
  };

  const handleHoraNacimientoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, horas: e.target.value });
  };

  const handleCoordenadasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, coordenadas: e.target.value });
  };

  return (
    <div className="userForm">
      <form onSubmit={handleSubmit} className="formStyle">



        <Title level={2}>Formulario de Registro</Title>
        <br></br>
        <Space direction="vertical">
          <Select
           
            onChange={(value) => handleChange('genero', value)} 
            placeholder="Selecciona un género"
            style={{ width: 350 }}
          >
            <Select.Option value="">Selecciona un género</Select.Option>
            <Select.Option value="femenino">Femenino</Select.Option>
            <Select.Option value="masculino">Masculino</Select.Option>
          </Select>

          <Input
  placeholder="Nombre"
  type="text"
  name="nombre"
  value={usuario.nombre}
  onChange={handleNombreChange}
  required={true}
/>

<Input
  placeholder="Apellido"
  type="text"
  name="apellido"
  value={usuario.apellido}
  onChange={handleApellidoChange}
  required={true}
/>

<Input
  placeholder="Correo Electrónico"
  type="email"
  name="correoElectronico"
  value={usuario.correoElectronico}
  onChange={handleCorreoElectronicoChange}
  required={true}

/>

<Input
  placeholder="Fecha de Nacimiento"
  type="text"
  name="nacimiento"
  value={usuario.nacimiento}
  onChange={handleNacimientoChange}
  required={true}
/>

<Input
  placeholder="Hora de Nacimiento"
  type="text"
  name="hora"
  value={usuario.horas}
  onChange={handleHoraNacimientoChange}
  required={true}
/>

<Input
  placeholder="Coordenadas"
  type="text"
  name="coordenadas"
  value={usuario.coordenadas}
  onChange={handleCoordenadasChange}
  required={true}
/>
          <br></br>
          <Button type="primary" htmlType="submit">Enviar</Button>
        </Space>
      </form>

      {showResult && (
        <Result
          className="resultStyle"
          status="success"
          title="Successfully add!"
          subTitle="Order number: 2017182818828182881 ."
          extra={[
            
            <Button key="buy">See you soon </Button>,
          ]}
        />
      )}

    </div>
  );
};

export default UserForm;