# 5. Projekt iz kolegija Napredni razvoj programske potpore za web - Single Page App u Vue.js

URL: [ToDoDo aplikacija](https://tododo-6p0v.onrender.com/)

## Pokretanje:
```bash
cd tododo
npm i
npm run dev
```

## Svojstva

1. Interpolation/one-way binding  
    - da, src/App.vue, :11  
    - NavBar (src/components/NavBar.vue) prima property title koji prikazuje  

2. Two-way binding  
    - da, src/components/AddTask.vue, :30  
    - v-model="newTask", newTask je tekst koji se unosi u textbox  

3. Methods  
    - da, src/views/HomeView.vue, :14  
    - koristeći Composition API definirane su određene funkcije  
    - u danom primjeru definirana je funkcija za dodavanje novog zadatka addPendingTask  
      koja se potom prosljeđuje AddTask komponenti (:74)  

4. Computed properties  
    - da, src/components/TaskList.vue, :9  
    - izračunava se potpun naslov komponente tako što se dodaju emojiji ovisno o naslovu  
    - computed property computedTitle potom se koristi na :20  

5. Scoped style  
    - da, src/components/TaskList.vue, :54  

6. Lifecycle hook  
    - da, src/views/HomeView.vue, :58  
    - onMounted() učitava podatke iz localstorage  
    - :68, onUnMounted() šalje podatke u localstorage  
    - slanje podataka implementirano je pomoću asinkronih funkcija koje glume učitavanje  
      podataka s backenda  

7. Routing  
    - da, podržane stranice su / i /about  
    - na ostale url-ove otvara se 404 stranica  
    - src/views/NotFoundView.vue  
    - src/router/index.js --> definirane router  

8. Komponenta bez stanja
    - da, src/components/NavBar.vue  
    - NavBar ima prop title koji prikazuje naslov aplikacije  
   Komponenta sa stanjem  
    - da, src/components/TaskCounter.vue  
    - stanje se učitava koristeći pinia store  
    - bilježi se koliko je zadataka završeno u trenutnoj sesiji  
    - sesija će se obrisati ako se stranica ponovno učita,  
      ali će stanje biti održano ako se kreće po linkovima dostupnim unutar stranice  
    - TaskCounter poziva se u HomeView.vue i AboutView.vue  

9. Event emit  
    - da, src/components/TaskList.vue  
    - događaji su definirani na :13  
    - događaj za "chekiranje" zadatka emitira se na :28  
    - događaj za uklanjanje zadatka emitira se na :34  
    - u roditeljskoj komponenti koja poziva TaskList, a to je src/view/HomeView.vue,  
      definirani su listeneri za te događaje @check-task i @remove-task  

10. Store (Pinia)  
    - da, src/components/TaskCounter.vue :11 --> prikaz stanja  
    - src/views/HomeView.vue :24 --> inkrementiranje brojača  
    - pogledati 8.2 Komponenta sa stanjem  
    - store je definran u src/stores/store.js  

11. Asinkroni dohvat podataka  
    - da, src/views/HomeView.vue, :36  
    - pogledati 6. Lifecycle hook  
    - dohvat podataka je "mockiran" tako što se podaci  
      preko asinkrone funkcije dohvaćaju s localstorage --> funkcija mockDataFetch()  
    - slanje podataka je također "mockirano" --> funkcija sendData()  
