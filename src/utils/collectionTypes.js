export const typeData = {
  normal: { icon: 'normal', color: '#A8A878' },
  fire: { icon: 'fire', color: '#F08030' },
  water: { icon: 'water', color: '#6890F0' },
  electric: { icon: 'electric', color: '#F8D030' },
  grass: { icon: 'grass', color: '#78C850' },
  ice: { icon: 'ice', color: '#98D8D8' },
  fighting: { icon: 'fighting', color: '#C03028' },
  poison: { icon: 'poison', color: '#A040A0' },
  ground: { icon: 'ground', color: '#E0C068' },
  flying: { icon: 'flying', color: '#A890F0' },
  psychic: { icon: 'psychic', color: '#F85888' },
  bug: { icon: 'bug', color: '#A8B820' },
  rock: { icon: 'rock', color: '#B8A038' },
  ghost: { icon: 'ghost', color: '#705898' },
  dark: { icon: 'dark', color: '#705848' },
  steel: { icon: 'steel', color: '#B8B8D0' },
  dragon: { icon: 'dragon', color: '#EE99AC' },
  fairy: { icon: 'fairy', color: '#D685AD' }
};

export function getRandomType() {
  const types = Object.keys(typeData);
  const randomIndex = Math.floor(Math.random() * types.length);
  return types[randomIndex];
}