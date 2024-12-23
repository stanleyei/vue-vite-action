<script>
export default {
  data() {
    return {
      url: 'https://pokeapi.co/api/v2/pokemon/',
      keywords: '',
      pokemonId: '25',
      pokemonName: 'pikachu',
    };
  },
  methods: {
    getData() {
      if (!this.keywords) {
        alert('請輸入寶可夢編號或英文名稱');
        return;
      }

      fetch(`${this.url}${this.keywords.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => {
          this.pokemonName = data.name;
          this.pokemonId = data.id;
        })
        .catch((error) => {
          alert('寶可夢不存在');
        });
    },
  },
};
</script>

<template>
  <section>
    <h1>Pokemon Search</h1>

    <form class="form">
      <label class="search-label">
        <span class="search-title">寶可夢編號/英文名稱</span>
        <input class="search-input" type="search" v-model="keywords">
      </label>
      <button type="button" id="search-btn" @click="getData">搜尋</button>
    </form>

    <div>
      <figure class="pokemon">
        <img id="pokemon-img" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`" alt="寶可夢圖片">
        <figcaption id="pokemon-name">#{{ pokemonId }} {{ pokemonName }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.form {
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-label {
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-title {
  font-size: 24px;
}

.search-input {
  width: 200px;
  font-size: 24px;
}

#search-btn {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 20px;
  cursor: pointer;
}

.pokemon {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#pokemon-name {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
</style>
