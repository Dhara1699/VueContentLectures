const app = Vue.createApp({
  data() {
    return {
      counter: 1,
      name:'',
      confirmedName:'',
      othername:'',
      surName:'',
    };
  },
  watch: {
    name(value) {
      if(value === '') {
        this.othername = '';
      } else {
        this.othername = value + ' ' + this.surName;
      }
    },
    surName(value) {
      if(value === '') {
        this.othername = '';
      } else {
        this.othername = this.name + ' ' + value;
      }
    },
    counter(value) {
      if(value>200) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000)
      }
    },
  },
  computed: {
    fullname() {
      console.log('Running Again...!');
      if(this.name === '' && this.confirmedName === '') {
        return '';
      }
      return this.name + ' ' + this.surName + ' ' + 'Patel';
      //return this.confirmedName + ' ' + 'Patel';
    },
  },
  methods: {
    outputFullname() {
      console.log('Running Again...!');
      if(this.name === '' && this.confirmedName === '') {
        return '';
      }
      return this.name + ' ' + 'Patel';
     // return this.confirmedName + ' ' + 'Patel';
    },
    resetInput() {
      this.name = '';
      this.confirmedName = '';
    },
    confirmInput(lastName) {
      this.confirmedName =this.name + ' ' + this.surName + ' ' + lastName;
    },
    submitForm(){
     // event.preeventDefault();
      alert('submitted!');
    },
    setName(event, lastName) {
      this.name = event.target.value;
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
