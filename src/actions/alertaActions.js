import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

//Muestra alerta
export function mostrarAlerta(alerta) {
  return (dispatch) => {
    dispatch(crearAlertaError(alerta));
  };
}

const crearAlertaError = (alerta) => ({
  type: MOSTRAR_ALERTA,
  payload: alerta,
});
