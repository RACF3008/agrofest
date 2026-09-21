import axios from "axios";
import { useRef, useState } from "react";

type ErrorResponse = {
  message: string;
  field?: string;
};

type UseRequestProps<T> = {
  url: string;
  method: "get" | "post" | "put" | "delete";
  body?: T;
  onSuccess?: (data: any) => void;
};

export default function useRequest<T = any>({
  url,
  method,
  body,
  onSuccess,
}: UseRequestProps<T>) {
  const [errors, setErrors] = useState<string[]>([]);

  const errorTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors([]);

      const response = await axios[method](url, {
        ...body,
        ...props,
      });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err: any) {
      let messages: string[];

      if (err.response?.data?.errors) {
        messages = err.response.data.errors.map(
          (error: ErrorResponse) => error.message,
        );
      } else {
        messages = ["Something went wrong"];
      }

      // Cancelar timer anterior
      if (errorTimer.current) {
        clearTimeout(errorTimer.current);
      }

      // Mostrar nuevos errores
      setErrors(messages);

      // Ocultarlos después de 4 segundos
      errorTimer.current = setTimeout(() => {
        setErrors([]);
      }, 4000);
    }
  };

  return {
    doRequest,
    errors,
  };
}
