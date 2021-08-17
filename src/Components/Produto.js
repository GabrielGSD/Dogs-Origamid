import React from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';
import styles from './Produto.module.css';

function Produto() {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError('Um erro ocorreu!');
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading" />;
  if (error) return <h1>{error}</h1>;
  if (produto === null) return null;
  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head
        title={`Ranek | ${produto.nome}`}
        descricao={`Ranek | Esse é um produto: ${produto.nome}`}
      />
      <div className={styles.gridFotos}>
        {produto.fotos.map((foto) => (
          <img key={foto.id} src={foto.src} alt={foto.alt} style={foto.style} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <h1 className={styles.subTitulo}>Descrição:</h1>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
}

export default Produto;
