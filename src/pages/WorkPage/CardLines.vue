<template>
    <div class="card">
        <div class="card__heading">
            <h2>Lines of code</h2> <i class="material-icons"  v-tooltip="'test'">
            info
        </i>
        </div>
        <div class="card__content">
            Amount: {{ $store.state.linesOfCode.amount.toFixed(0) }} <br>
            Maximum: {{ $store.state.linesOfCode.max.toFixed(0) }} <br>
            Value:{{ $store.state.linesOfCode.value }}
        </div>
        <div class="card__footer">
            <button @mousedown="addLines">Write</button>
            <button @click="sellLines" :disabled="$store.state.linesOfCode.amount < 1">Sell</button>
            <button @click="sellAllLines" :disabled="$store.state.linesOfCode.amount < 1">Sell all</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'addLines',
      'sellLines',
      'sellAllLines'
    ])
  }
}
</script>

<style scoped>

</style>
