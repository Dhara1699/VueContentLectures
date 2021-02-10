<template>
  <div>
    <the-header></the-header>
    <button v-on:click="setSelectedComponent('active-goals')">Active Goals</button>
    <button v-on:click="setSelectedComponent('manage-goals')">Manage Goals</button>
   <!-- <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>
    <active-goals v-if="selectedComponent === 'active-goals'"></active-goals> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>    
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue'

export default {
  components: {
     TheHeader,
     ManageGoals,
     ActiveGoals,
  },
  data() {
    return {
      selectedComponent : 'active-goals' ,
      //selectedComponent2 : 'manage-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods : {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>