const dataVisit = document.querySelector('#test4');
const form = document.querySelector('#data-form');
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB1Kvoqn3MC9etQ7hk1ZWJnbisXfpSHxVw",
  authDomain: "youwork-01.firebaseapp.com",
  databaseURL: "https://youwork-01.firebaseio.com",
  projectId: "youwork-01",
  storageBucket: "youwork-01.appspot.com",
  messagingSenderId: "982859617948"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({
  timestampsInSnapshots :true
});
//const cf = firebase.storage();

//creo los elementos q se van a mostrar por cada doc
const infoVisit = (doc)=>{
  const box = document.createElement('div');
  const name = document.createElement('p');
  const date = document.createElement('p');
  const dni = document.createElement('p');
  const email = document.createElement('p');
  const hour = document.createElement('p');
  const cross = document.createElement('div');
  const img = new Image();


  box.setAttribute('id', doc.id);
  box.setAttribute('class', 'infoVisit');
  cross.setAttribute('class', 'center-align btn-delete');
  box.setAttribute('style', 'border: 1px solid black;');
  img.src = doc.data().image;
  console.log(doc.data().image);
  name.textContent = doc.data().name;
  date.textContent = doc.data().date;
  dni.textContent = doc.data().dni;
  email.textContent = doc.data().email;
  hour.textContent = doc.data().hour;
  cross.textContent = 'Eliminar';

  box.appendChild(name);
  box.appendChild(date);
  box.appendChild(dni);
  box.appendChild(email);
  box.appendChild(hour);
  box.appendChild(img);
  box.appendChild(cross);

  dataVisit.appendChild(box);

  //eliminar visita
  cross.addEventListener('click', (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('id');
    db.collection('visitors').doc(id).delete();
  })
}

//enlazamos con la db y obtenemos los datos cada uno un objeto
// db.collection('visitors').get()
//   .then((snapshot)=>{
//     snapshot.docs.forEach(doc => {
//       infoVisit(doc);
//     })
//   });
//guardando la data del formulario

form.addEventListener('submit', (e)=>{
  console.log("guardado");
  e.preventDefault();
  db.collection('visitors').add({
    name: form.name.value,
    date: form.date.value,
    dni: form.dni.value,
    email: form.email.value,
    hour: form.hour.value,
    image: form.image.value,
    host: form.host.value,
  });
  form.name.value="";
  form.date.value="";
  form.dni.value=null;
  form.email.value="";
  form.hour.value="";
  form.image.value="";
  form.host.value='';
  M.toast({html: 'Notificación enviada'})
})

//eventos en tiempo real
db.collection('visitors').orderBy('name').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change =>{
    if(change.type === 'added'){
      infoVisit(change.doc);
      let obj = change.doc.data();
      sendEmail(obj);
    } else if(change.type === 'removed'){
      let visit = dataVisit.querySelector(`#${change.doc.id}`);
      dataVisit.removeChild(visit);
    }
  })
})
