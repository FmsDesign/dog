import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { FOTO_GET } from "../Api";
import Error from "../components/Helpe/Error";
import Loading from "../components/Helpe/Loading";
import PhotoContent from "./PhotoContent";
import Head from "../components/Helpe/Head";

const Foto = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = FOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />;
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Foto;
