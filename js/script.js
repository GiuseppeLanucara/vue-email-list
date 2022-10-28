// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


const {createApp} = Vue;

createApp({
    data() {
      return {
        listaMail: [],
        scaricamento: ""
      }
    },
    methods: {

        getEmail() {

            if(this.listaMail.lenght !== 0) this.listaMail = [];
            this.scaricamento = "Caricamento in corso...";
            for(let i = 0; i < 10; i++) {
                axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
              this.listaMail.push(resp.data.response);
             
            });
            }
          
        },
      },
    }).mount("#app");
    