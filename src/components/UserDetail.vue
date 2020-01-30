<template>
    <v-col
            cols="5"
            md="5"
    >
        <h2>Selected user info:</h2>
        <v-card class="mx-auto" max-width="300" loading="true">
            <v-img
                    class="white--text align-end"
                    height="200px"
                    v-bind:src="item.picture"
            >
            </v-img>
            <v-card-subtitle class="pb-0">{{ item.lastName | capitalize }} {{ item.firstName | capitalize }}</v-card-subtitle>
            <v-card-text class="text--primary">
                <div>{{ item.address }}</div>
                <div>{{ item.email }}</div>
                <div>{{ item.gender | capitalize }}</div>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
    export default {
        name: 'UserList',
        props: {
            item: Object
        },
    }
</script>

<style scoped>
  .v-card {
    margin: 35px auto
  }
</style>
