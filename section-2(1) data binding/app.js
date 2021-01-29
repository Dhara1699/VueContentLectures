const app = Vue.createApp({
    data() {
        return {
            courseGoal : 'Finish the course and learn Vue!',
            learnHtml : 'https://www.w3schools.com/html/',
            learnCss : 'https://www.w3schools.com/css/',
            learnJavascript : 'https://www.w3schools.com/js/DEFAULT.asp'
        };
    },
    methods: {
        outputGoals() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return 'Learn Vue!';
            } else{
                return 'Master Vue!';
            }
        },
        learnConcept() {
            const randomNumber2 = Math.random();
            if(randomNumber2 < 0.5){
                return this.learnCss;
            }
            else{
                return this.learnJavascript
            }
        }
    }

});
app.mount('#user-goal')