import { useEffect, useState } from "react";
import axios from "axios";
import MenuRealPlazaLayout from "../components/layout/MenuRealPlazaLayout";
import { CardMascota } from "../components/ui/cardMascota/CardMascota";
import { ResultadoVacio } from "../components/ui/ResultadoVacio/ResultadoVacio";

export default function Home() {
  // const router = useRouter();
  const [mascota, setTask] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const urlApi = process.env.API_URL || "http://localhost:3000/api/mascota";
      const { data } = await axios.get(urlApi);

      console.log("data ==> ", data);

      setTask(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MenuRealPlazaLayout>
        <div className="center">
          <h1>JURASSIC DOGE</h1>
          <div className="encapsulado">
            {mascota.length == 0 ? (
              <ResultadoVacio></ResultadoVacio>
            ) : (
              mascota.map((element) => {
                return <CardMascota dinosaurio={element}></CardMascota>;
              })
            )}
          </div>
        </div>
      </MenuRealPlazaLayout>
    </>
  );
}
