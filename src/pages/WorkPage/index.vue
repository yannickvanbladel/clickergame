<template>
    <div id="app">
        <CardLines/>
        <CardCommits v-if="$store.state.commits.active"/>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import CardLines from './CardLines'
import CardCommits from './CardCommits'

export default {
  components: { CardCommits, CardLines },
  methods: {
    ...mapActions([
      'addPush',
      'sellPush'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
