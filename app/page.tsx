'use client';

import { useState } from 'react';
import animes from '../data/animes.json';

export default function Home() {
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [acessoLiberado, setAcessoLiberado] = useState(false);
  const senhaCorreta = 'AnimesUDK2025';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha === senhaCorreta) {
      setAcessoLiberado(true);
    } else {
      alert('Senha incorreta.');
    }
  };

  if (!acessoLiberado) {
    return (
      <main style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
        <h1>Acervo AniKing</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="senha">Digite a senha:</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              id="senha"
              type={mostrarSenha ? 'text' : 'password'}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={{ flex: 1, marginTop: 8, marginBottom: 12 }}
            />
            <button
              type="button"
              onClick={() => setMostrarSenha((v) => !v)}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: 16,
                cursor: 'pointer'
              }}
            >
              {mostrarSenha ? '🙈' : '👁️'}
            </button>
          </div>
          <button type="submit">Entrar</button>
        </form>
      </main>
    );
  }

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