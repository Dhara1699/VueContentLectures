const app = Vue.createApp({
  data() {
    return {
      counter: 1,
      name:'',
      confirmedName:'',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName =this.name;
    },
    submitForm(){
     // event.preeventDefault();
      alert('submitted!');
    },
    setName(event, lastName) {
      this.name = event.target.value+ ' ' +lastName;
      //.value Properties is use as default input Properties
    },
    add(num) {
      this.counter = this.counter + num;
    },
    minus(num) {
      this.counter = this.counter - num;
    },
    remove() {
      this.counter = this.counter * 0;
    }
  }
});

app.mount('#events');
