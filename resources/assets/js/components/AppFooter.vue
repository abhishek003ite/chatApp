<template>
  <v-footer height="auto" class="grey darken-3">
    <v-layout row wrap justify-center>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
      >
        {{ link }}
      </v-btn>
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy; {{ new Date().getFullYear() }} — <strong>Bezaleel Solutions</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
    data: () => ({
      links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us']
    })
}
</script>

<style>

</style>
