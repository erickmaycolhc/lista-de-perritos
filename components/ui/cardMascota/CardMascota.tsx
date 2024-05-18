import Link from 'next/link';
import { functions } from '../../../utils';
import { Idinosaurio } from '../../../interfaz/IDinosaurio';
type Prop= {
dinosaurio: Idinosaurio ;
};
export const CardMascota = ({dinosaurio}:Prop) => {
const{id, imagen, name, description, precio, descuento} = dinosaurio;

return(
    <>
              <div className="succes-dino" key={id}>
                    <Link href={"/dog/" + id} className="click">
                      <div className="img-do1">
                        <img src={functions.pathImg(imagen)} alt="" className="dino-1" />

                        <div className="text-dino">
                          <h1>{name}</h1>
                          <p>{description}</p>
                        </div>

                        <div className="precio">
                            <div className="precio-1">
                              <sup>S/</sup>
                              <span>{precio}</span>
                              <sup>.90</sup>
                            </div>
                        <div className="discount-offer">{descuento}</div>
                        </div>
                      </div>
                    </Link>
              </div>
    </>
);
};
