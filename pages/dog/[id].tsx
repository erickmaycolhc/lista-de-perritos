import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { functions } from "../../utils";
import MenuRealPlazaLayout from "../../components/layout/MenuRealPlazaLayout";
import { LineDescription } from "../../components/ui/line-description/LineDescription";

interface IMascota {
  name: string;
  description: string;
  stock: string;
  imagen: string;
  precio: number;
  descuento: number;
  detalles: {
    peso: string;
    estatura_promedio: string;
    vida: string;
    actividad_fisica: string;
    clima_recomendado: string;
    caracter: string;
  };
}

const inititalStateMascota: IMascota = {
  name: "",
  description: "",
  stock: "",
  imagen: "",
  precio: 0,
  descuento: 0,
  detalles: {
    peso: "",
    estatura_promedio: "",
    vida: "",
    actividad_fisica: "",
    clima_recomendado: "",
    caracter: "",
  },
};

export default function DetailsDog() {
  const route = useRouter();
  const [mascota, setMascota] = useState<IMascota>();

  useEffect(() => {
    if (route.query.id) {
      loadDog(route.query.id);
    }
  }, [route.query]);

  const loadDog = async (id: string) => {
    console.log("cargando datos => ", id);

    try {
      const urlApi =
        process.env.API_URL || "http://localhost:3000/api/mascota/" + id;
      const { data } = await axios.get(urlApi);

      setMascota(data);
      console.log("data ==> ", data);
    } catch (error) {
      console.log(error);
    }
  };

  // export default function Home() {
  //   // const router = useRouter();
  //   const [id, setId] = useState([]);
  //   useEffect(() => {
  //     loadDog();
  //   }, []);

  // const loadDog = async () => {
  // try {
  //   const urlApi = process.env.API_URL || 'http://localhost:3000/api/mascota';
  //   const { data } = await axios.get(urlApi);

  //   console.log("data ==> ", data)

  //   setId(data);
  // } catch (error) {
  //   console.log(error);
  // }
  // };

  return (
    <>
      <MenuRealPlazaLayout>
        <div className="wrapper">
          <div className="wrapper-center">
            <section className="product">
              <div className="product-img">
                <img src={functions.pathImg(mascota?.imagen)} alt="" />
                <div className="controls-slider">
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                  <div className="active"></div>
                  <div className=""></div>
                </div>
              </div>
              <div className="product-description">
                <div className="line-1">
                  <Link href={"/"} className="link-title">
                    {mascota?.name}
                  </Link>
                </div>
                <div className="line-2">{mascota?.description}</div>
                <div className="line-3">{mascota?.stock}</div>
                <div className="line-4">
                  <h3>Vendido por:</h3>
                  <Link href={"/"} className="plaza-vea">
                    Plaza Vea
                  </Link>
                  <Link href={"/"} className="click">
                    Términos y Condiciones
                  </Link>
                </div>

                <div className="line-5">
                  <h2>Online</h2>
                  <div className="line-precio">
                    <sup>S/</sup>
                    {mascota?.precio}
                    <sup>.90</sup>
                  </div>
                  <div className="descont-offer">{mascota?.descuento}</div>
                </div>

                <div className="line-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 48 48"
                    xmlSpace="preserve"
                    height="34"
                    width="34"
                  >
                    <path d="M6.292 24.542q-1.917 0-3.271-1.354-1.354-1.355-1.354-3.271 0-1.917 1.354-3.271 1.354-1.354 3.271-1.354V10.75q0-1.125.833-1.958.833-.834 1.958-.834h6.292q0-1.916 1.354-3.27Q18.083 3.333 20 3.333q1.917 0 3.271 1.355 1.354 1.354 1.354 3.27h6.292q1.125 0 1.958.834.833.833.833 1.958v4.542q1.917 0 3.271 1.354 1.354 1.354 1.354 3.271 0 1.916-1.354 3.271-1.354 1.354-3.271 1.354v7.666q0 1.125-.833 1.959-.833.833-1.958.833H9.083q-1.125 0-1.958-.833-.833-.834-.833-1.959Zm8.25-3.875q.791 0 1.354-.563.562-.562.562-1.396 0-.791-.562-1.354-.563-.562-1.354-.562-.834 0-1.396.562-.563.563-.563 1.354 0 .834.563 1.396.562.563 1.396.563Zm10.916 0q.834 0 1.396-.563.563-.562.563-1.396 0-.791-.563-1.354-.562-.562-1.396-.562-.791 0-1.354.562-.562.563-.562 1.354 0 .834.562 1.396.563.563 1.354.563Zm-12.333 7.541h13.75v-2.791h-13.75Zm-4.042 4h21.834V10.75H9.083Zm0 0V10.75v21.458Z" />
                  </svg>
                  <Link href={"/"} className="elegir">
                    ¿Cómo elegir el juguete ideal para tu niño o niña?
                  </Link>
                </div>
                <div className="line-7">
                  <h2>Canales en venta</h2>
                </div>

                <div className="line-8">
                  <div className="padre-whapp-numero">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 48 48"
                      xmlSpace="preserve"
                      height="34"
                      width="34"
                    >
                      <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z" />
                    </svg>
                    <Link href={"/"} className="elegir">
                      <div className="elegir-1">WhatsApp</div>
                      <div className="elegir-2 text-decoration-underline margin-top">
                        993192658
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="line-9">
                  <div className="padre-telefono-numero">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 48 48"
                      xmlSpace="preserve"
                      height="32"
                      width="32"
                    >
                      <path d="M38.8 23.65q-.25-6.05-4.45-10.25T24.1 8.95v-3q3.6.1 6.775 1.525Q34.05 8.9 36.45 11.3q2.4 2.4 3.825 5.575Q41.7 20.05 41.8 23.65Zm-8.45 0q-.25-2.5-2-4.225Q26.6 17.7 24.1 17.45v-3q3.75.25 6.375 2.85t2.875 6.35ZM39.75 42q-6.1 0-12.125-3T16.8 31.2Q12 26.4 9 20.375 6 14.35 6 8.25q0-.95.65-1.6Q7.3 6 8.25 6h7q.7 0 1.225.475.525.475.675 1.275l1.35 6.3q.1.7-.025 1.275t-.525.975l-5 5.05q2.8 4.65 6.275 8.1Q22.7 32.9 27.1 35.3l4.75-4.9q.5-.55 1.15-.775.65-.225 1.3-.075l5.95 1.3q.75.15 1.25.75T42 33v6.75q0 .95-.65 1.6-.65.65-1.6.65Zm-28.3-23.4 4.05-4.1L14.35 9H9q0 1.95.6 4.275t1.85 5.325ZM29.9 36.75q2.05.95 4.45 1.55 2.4.6 4.65.7v-5.35l-5.15-1.05ZM11.45 18.6ZM29.9 36.75Z" />
                    </svg>
                    <Link href={"/"} className="elegir">
                      <div className="elegir-3">Teléfono</div>
                      <div className="elegir-4 text-decoration-underline margin-top">
                        (01) 601 4000 upc 4
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            <section className="details">
              <div className="caracteristicas">
                <div className="color-caract">
                  <h2>Características</h2>
                </div>
              </div>
              <LineDescription
                name={"Peso"}
                value={mascota?.detalles?.peso}
                classColor={"color-peso-2"}
              ></LineDescription>
              <LineDescription
                name={"Estatura promedio"}
                value={mascota?.detalles?.estatura_promedio}
                classColor={"Estatura-promedio-2"}
              ></LineDescription>
              <LineDescription
                name={"Vida"}
                value={mascota?.detalles?.vida}
                classColor={"estatura-promedio-2"}
              ></LineDescription>
              <LineDescription
                name={"Actividad Fisica"}
                value={mascota?.detalles?.actividad_fisica}
                classColor={"estatura-promedio-2"}
              ></LineDescription>
              <LineDescription
                name={"Clima Recomendado"}
                value={mascota?.detalles?.clima_recomendado}
                classColor={"estatura-promedio-2"}
              ></LineDescription>
              <LineDescription
                name={"Caracter"}
                value={mascota?.detalles?.caracter}
                classColor={"estatura-promedio-2"}
              ></LineDescription>
              {/* <div className="peso">
                                                        <div className="color-peso">
                                                          <h2>Peso</h2>
                                                        </div>
                                                        <div className="color-peso-2">
                                                        {mascota?.detalles?.peso}
                                                        </div>  
                                                      </div>
                                                      <div className="estatura-promedio">
                                                        <div className="estatura-promedio-1">
                                                          <h2>Estatura promedio</h2>
                                                        </div>
                                                        <div className="estatura-promedio-2">
                                                        {mascota?.detalles?.estatura_promedio}
                                                        </div>
                                                      </div>
                                                      <div className="vida">
                                                        <div className="vida-1">
                                                          <h2>Vida</h2>
                                                        </div>
                                                        <div className="vida-2">
                                                        {mascota?.detalles?.vida}
                                                        </div>
                                                      </div>
                                                      <div className="actividad-fisica">
                                                        <div className="actividad-fisica-1">
                                                          <h2>Actividad Fisica</h2>
                                                        </div>
                                                        <div className="actividad-fisica-2">
                                                        {mascota?.detalles?.actividad_fisica}
                                                        </div>
                                                      </div>

                                                      <div className="clima-recomendado">
                                                        <div className="actividad-fisica-1">
                                                          <h2>Clima Recomendado</h2>
                                                        </div>
                                                        <div className="clima-2">
                                                        {mascota?.detalles?.clima_recomendado}
                                                        </div>
                                                      </div>

                                                      <div className="caracter">
                                                        <div className="actividad-fisica-1">
                                                          <h2>Caracter</h2>
                                                        </div>
                                                        <div className="caracter-2">
                                                        {mascota?.detalles?.caracter}
                                                        </div>
                                                      </div> */}
            </section>
          </div>
        </div>
      </MenuRealPlazaLayout>
    </>
  );
}
