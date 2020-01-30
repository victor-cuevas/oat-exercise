<template>
  <div>
    <ul class="col-md-6">
      <li v-for="(item, index) in data" :key="index">
        <span>{{item.lastName}} {{item.firstName}}</span>
      </li>
    </ul>
    <user-detail></user-detail>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    data: Array
  },
}
</script>
