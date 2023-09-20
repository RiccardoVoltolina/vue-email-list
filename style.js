/* Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
Consigli:
iniziamo a capire usando postman cosa ci restituisce una chiamata all'endpoint :puntare_su_2: qui sopra.
dove inserisco la chiamata ajax? uso una lifecycle hook? quale?
devo ottenere 10 email tramite la chiamata, come faccio a ripetere un operazione cosí tante volte senza riscrivere la stessa implementazione? conosco uno strumento che mi puó tornare utile?
dové la CDN di axios? https://cdnjs.com/libraries/axios */




const { createApp } = Vue

  createApp({
    data() {
      return {
        randomMail: [],
      }
    },

    mounted() {
      //creo un ciclo per generare le 10 mail
      for (let index = 0; index < 10; index++) {
        //genro la mail tremite axios
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

        //quando il server rispone eseguo la funzione
        .then(response => {

            console.log(response.data.response);

            //metto nell' array il valore generato con la mail
            this.randomMail.push(response.data.response)

            //trovo la lunghezza del mio proxy array
            console.log(Object.values(this.randomMail).length);
        })

        
      }
    }
  }).mount('#app')