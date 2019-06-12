<template>
    <div class="logout">
        <span @click="logoutFrom()">logout</span>
    </div>
</template>

<script>
import { removeCookies } from '@/utils/cookie'

export default {
  methods: {
    logoutFrom () {
      removeCookies('username')
      removeCookies('isNav')
      this.$router.push('/login')
    }
  }
}
</script>
