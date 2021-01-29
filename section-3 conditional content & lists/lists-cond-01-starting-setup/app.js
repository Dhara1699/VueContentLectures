const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: [] 
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx) {
      this.goals.splice(idx,1);
    },
    submitGoal() {
      alert('Submitted Goal!');
    }
  }
});

app.mount('#user-goals');
