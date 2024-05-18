import Link from "next/link";
import AdminLayout from "../../../components/layout/AdminLayout";
import { useRouter } from "next/router";
import { useState } from "react";

type Vmascotas = {
  idraza: number;
  name: string;
  description: string;
  stock: string;
  imagen: string;
  precio: number;
  descuento: number;
  status: string;
  // idmascotas: number;
  peso: string;
  estatura_promedio: string;
  vida: string;
  actividad_fisica: string;
  clima_recomendado: string;
  caracter?: string;
};

export default function New() {
  const router = useRouter();
  const [mascota, setMascota] = useState<Vmascotas>({
    idraza: 0,
    name: "",
    description: "",
    stock: "",
    imagen: "",
    precio: 0,
    descuento: 0,
    status: "",
    peso: "",
    estatura_promedio: "",
    vida: "",
    actividad_fisica: "",
    clima_recomendado: "",
    caracter: "",
  });

  const handlerIdraza = (e: any) => {
    setMascota({
      ...mascota,
      idraza: e.target.value,
    });
  };
  const handlerName = (e: any) => {
    setMascota({
      ...mascota,
      name: e.target.value,
    });
  };
  const handlerDescription = (e: any) => {
    setMascota({
      ...mascota,
      description: e.target.value,
    });
  };
  const handlerStock = (e: any) => {
    setMascota({
      ...mascota,
      stock: e.target.value,
    });
  };
  const handlerImagen = (e: any) => {
    setMascota({
      ...mascota,
      imagen: e.target.value,
    });
  };
  const handlerPrecio = (e: any) => {
    setMascota({
      ...mascota,
      precio: e.target.value,
    });
  };
  const handlerDescuento = (e: any) => {
    setMascota({
      ...mascota,
      descuento: e.target.value,
    });
  };
  const handlersStatus = (e: any) => {
    setMascota({
      ...mascota,
      status: e.target.value,
    });
  };
  const handlerPeso = (e: any) => {
    setMascota({
      ...mascota,
      peso: e.target.value,
    });
  };
  const handlerEstatura_promedio = (e: any) => {
    setMascota({
      ...mascota,
      estatura_promedio: e.target.value,
    });
  };
  const handlerVida = (e: any) => {
    setMascota({
      ...mascota,
      vida: e.target.value,
    });
  };
  const handlerActividad_fisica = (e: any) => {
    setMascota({
      ...mascota,
      actividad_fisica: e.target.value,
    });
  };
  const handlerClima_recomendado = (e: any) => {
    setMascota({
      ...mascota,
      clima_recomendado: e.target.value,
    });
  };
  const handlerCaracter = (e: any) => {
    setMascota({
      ...mascota,
      caracter: e.target.value,
    });
  };

  const submitRegistrar = (e: any) => {
    // evita el refrescado de la pagina
    e.preventDefault();

    // guardar la mascota
    saveMascota();
  };

  const saveMascota = () => {
    // datos de la mascota
    const objApi = {
      idraza: mascota.idraza,
      name: mascota.name,
      description: mascota.description,
      stock: mascota.stock,
      imagen: mascota.imagen,
      precio: mascota.precio,
      descuento: mascota.descuento,
      status: mascota.status,
      // idmascotas: number;
      peso: mascota.peso,
      estatura_promedio: mascota.estatura_promedio,
      vida: mascota.vida,
      actividad_fisica: mascota.actividad_fisica,
      clima_recomendado: mascota.clima_recomendado,
      caracter: mascota.caracter,
    };

    // la configuracion del fetch
    const config: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objApi),
    };

    // el consumo del api
    const urlApi = "http://localhost:3000/api/agregarmascotaId";
    fetch(urlApi, config)
      .then((responsesText: any) => {
        return responsesText.json();
      })
      .then((reponse: any) => {
        router.push("/");
      })
      .catch((error) => {
        console.log("error ==> ", error);
      });
  };
  return (
    <>
      <AdminLayout>
        <form onSubmit={(e) => submitRegistrar(e)}>
          <div className="cuerpo-new-mascota">
            <div className="titulo">
              <h3>Mascotas</h3>
            </div>
            <div className="cuerpo-nombre-stock">
              <div className="input-name">
                <div>Nombre: </div>
                <input
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    handlerName(e);
                  }}
                />
              </div>

              <div className="input-raza">
                <div>Raza: </div>
                <input
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    handlerIdraza(e);
                  }}
                />
              </div>
              <div className="input-description">
                <div>Description: </div>
                <textarea
                  placeholder=""
                  onChange={(e) => {
                    handlerDescription(e);
                  }}
                />
              </div>
            </div>

            <div className="input-imagen">
              <input type="file" />
            </div>

            <div className="cuerpo-precio-descont-stock">
              <div className="input-precio">
                <div>Precio: </div>
                <input
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    handlerPrecio(e);
                  }}
                />
              </div>
              <div className="input-descuento">
                <div>Descuento: </div>
                <input
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    handlerDescuento(e);
                  }}
                />
              </div>
              <div className="input-stock">
                <div>Stock: </div>
                <input
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    handlerStock(e);
                  }}
                />
              </div>
            </div>
            <div className="cuerpo-peso-estatura-vida">
              <div className="input-peso">
                <div>Peso: </div>
                <input
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    handlerPeso(e);
                  }}
                />
              </div>
              <div className="input-estatura-promedio">
                <div>Estatura Promedio: </div>
                <input
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    handlerEstatura_promedio(e);
                  }}
                />
              </div>
              <div className="input-vida">
                <div>Vida: </div>
                <input
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    handlerVida(e);
                  }}
                />
              </div>
            </div>

            <div className="cuerpo-actividad-clima-caracter">
              <div className="input-actividad-fisica">
                <div>Actividad Física: </div>
                <input
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    handlerActividad_fisica(e);
                  }}
                />
              </div>
              <div className="input-clima-recomendado">
                <div>Clima Recomendado: </div>
                <input
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    handlerClima_recomendado(e);
                  }}
                />
              </div>
              <div className="input-caracter">
                <div>Caracter: </div>
                <input
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    handlerCaracter(e);
                  }}
                />
              </div>
            </div>
            <div className="enviarr">
              <button className="button-enviar" type="submit">
                Agregar
              </button>
            </div>
          </div>
        </form>
      </AdminLayout>
    </>
  );
}
