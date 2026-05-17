// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

// Configuración Firebase
const firebaseConfig = {
  apiKey: 
  authDomain: "latam-fire-league.firebaseapp.com",
  projectId: "latam-fire-league",
  storageBucket: "latam-fire-league.firebasestorage.app",
  messagingSenderId: "558715632387",
  appId: "1:558715632387:web:4bdd1d216d3c08efb9c736"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Seleccionar formulario
const formulario = document.querySelector("form");

// Evento al enviar formulario
formulario.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Capturar datos
  const nombre = document.querySelector('input[type="text"]').value;
  const correo = document.querySelector('input[type="email"]').value;
  const juego = document.querySelector("select").value;

  try {
    // Guardar datos en Firestore
    await addDoc(collection(db, "inscripciones"), {
      nombre: nombre,
      correo: correo,
      juego: juego,
      fechaRegistro: new Date()
    });

    alert("✅ " + nombre + ", te registraste exitosamente al torneo");

    // Limpiar formulario
    formulario.reset();

  } catch (error) {
    console.error("Error al guardar:", error);
    alert("❌ Error al registrar en Firebase");
  }
});