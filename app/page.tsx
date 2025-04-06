import animes from '../data/animes.json';

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Acervo AniKing</h1>
      <div style={{ display: 'grid', gap: 20 }}>
        {animes.map((anime, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: 8,
              padding: 12,
              maxWidth: 320,
            }}
          >
            <img
              src={anime.imagem}
              alt={anime.nome}
              style={{ width: '100%', borderRadius: 4 }}
            />
            <h2 style={{ fontSize: 18, marginTop: 10 }}>{anime.nome}</h2>
            <p>{anime.generos.join(', ')}</p>
            <p>Status: {anime.status}</p>
            <p>Dublagem: {anime.dublagem ? 'Sim' : 'Não'}</p>
            <a
              href={anime.link}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'blue', textDecoration: 'underline' }}
            >
              Ver no Telegram
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}