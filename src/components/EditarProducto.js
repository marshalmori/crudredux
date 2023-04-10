import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarProductoAction } from "../actions/productoActions";

const EditarProducto = () => {
  // nuevo state de producto
  const [producto, guardarProducto] = useState({ nombre: "", precio: "" });

  // producto a editar
  const productoeditar = useSelector((state) => state.productos.productoeditar);

  useEffect(() => {
    guardarProducto(productoeditar);
  }, [productoeditar]);

  //Leer los datos del formulario
  const onChangeFormulario = (e) => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const { id, nombre, precio } = producto;

  const submitEditarProducto = (e) => {
    e.preventDefault();

    editarProductoAction();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label>Editar Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeFormulario}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={onChangeFormulario}
                />
              </div>

              <buton
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar Cambios
              </buton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
