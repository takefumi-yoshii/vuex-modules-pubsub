<template>
  <div>
    <h3>{{name}}</h3>
    count: {{mappedCount}}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from '../stores/modules/subscriber1'

const computed = {
  ...mapState(['name', 'mappedCount'])
}

export default Vue.extend({ computed });
</script>
