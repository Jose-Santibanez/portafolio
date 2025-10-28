import { useCallback, useEffect, useState } from "react";
import { API } from "../services/api.js";


/**
 * Hook personalizado para obtener datos desde una API usando axios
 *  @param {string} endpoint - Ruta relativa del endpoint ejm: '/proyectos' o '/usuario/id'
 *  @param {object} [option] - configuración adicional de Axios (headers, params,etc)
 *  @returns {object} { data, loading, error, refetch}
 */

export const useAxios = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para cargar datos
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await API.get(endpoint, options);
      setData(response.data);
      setError(null);
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Error desconocido";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [endpoint, options]);

  useEffect(() => {
    if (!endpoint) return;
    fetchData();
  }, [endpoint]);

  return { data, loading, error, refetch: fetchData };
};