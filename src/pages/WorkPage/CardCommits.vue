<template>
    <div class="card">
        <div class="card__heading">
            <h2>Commit</h2> <i class="material-icons"  v-tooltip="'test'">
            info
        </i>
        </div>
        <div class="card__content">
            Amount: {{ $store.state.commits.amount.toFixed(0) }} <br>
            Maximum: {{ $store.state.commits.max.toFixed(0) }} <br>
            Value: {{ $store.state.commits.value }}
        </div>
        <div class="card__footer">
            <button @mousedown="addCommit"
                    :disabled="$store.state.commits.cost > $store.state.linesOfCode.amount">Commit
            </button>
            <button @click="sellCommit" :disabled="$store.state.commits.amount < 1">Sell</button>
            <button @click="sellAllCommit" :disabled="$store.state.commits.amount < 1">Sell all</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'addCommit',
      'sellCommit',
      'sellAllCommit'
    ])
  }
}
</script>
