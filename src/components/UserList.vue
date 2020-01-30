<template>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
                  cols="7"
                  md="7"
          >
          <h2>User list:</h2>
          <v-simple-table>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">Last name</th>
                        <th class="text-left">First name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in data" :key="index" v-on:click="getUserById(item.userId)">
                        <td>{{ item.lastName }}</td>
                        <td>{{ item.firstName }}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
          </v-col>
          <user-detail v-bind:item="selectedItem" v-if="selectedItem"></user-detail>
        </v-row>
    </v-container>
</template>

<script>
    import UserDetail from "./UserDetail";

    export default {
        name: 'UserList',
        props: {
            data: Array
        },
        data: function () {
            return {
                selectedItem: this.selectedItem
            }
        },
        methods: {
            getUserById(userId) {
                const axios = require('axios');
                if (!this.selectedItem || userId !== +this.selectedItem.userId) {
                    axios.get(`${this.endpoint}/user/${userId}`).then(response => (this.selectedItem = response.data));
                }
            }
        },
        components: {
            UserDetail
        }
    }
</script>

<style scoped>
  .v-data-table {
    margin: 15px auto
  }
</style>

