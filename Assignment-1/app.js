const app = Vue.createApp({
    data() {
        return {
            name : 'Dhara Patel',
            age : 23,
            imageUrl : 'https://www.w3schools.com/images/w3schools_green.jpg'
        };
    },
    methods : {
        myAge() {
            return this.age + 5;
        }, 
        myNumber() {
            return Math.random();
        }

    }
});

app.mount('#assignment');

//https://www.w3schools.com/images/w3schools_green.jpg