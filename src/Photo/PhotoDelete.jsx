import React from "react";
import style from "./PhotoDelete.module.css";
import useFetch from "../Hooks/useFetch";
import { PHOTO_DELETE } from "../Api";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);

      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className={style.delete}>
          Deletando...
        </button>
      ) : (
        <button className={style.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
