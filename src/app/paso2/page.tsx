import { TracingContent } from '@/components/tracing-content'
import React from 'react'



export default function Paso2() {
  return (
    <TracingContent dummyContent={dummyContent} next="paso3"/>
  )
}


const dummyContent = [
    {
      title: "No fue fácil",
      description: (
        <>
          <p>
            Hubo un momento en mi semestre, durante mi materia de Métodos
            Computacionales, en la que sentí que no sabía nada. Fue cuando
            el profesor nos otorgó la gran oportunidad de hacer un sistema
            de autómatas de pila para resolver el ejercicio de fibonnaci,
            con la condición de que debíamos de utilizar backtracking.
          </p>
          <p>
            Hice muchos intentos para hacerlo, incluso me junté con otros 
            miembros del salón por las tardes a lograr desarrollarlo.
          </p>
        </>
      ),
      badge: "Backtracking",
      image:
        "",
    },
    {
      title: "Una date muy romántica",
      description: (
        <>
          <p>
            Como no logré resolverlo en la semana, me llevé el problema de 
            tarea, pero había otro asunto, había invitado a mi novia a salir.
          </p>
          <p>
            Como ella es tan comprensiva, salimos a cenar pero me puse a hacer
            el ejercicio en un cuaderno en la mesa del restaurante. Claro que
            no hubiera importado si no lo hubiera hecho, pues aquí no logré
            resolverlo tampoco.
          </p>
        </>
      ),
      badge: "Modo mandilón",
      image: ""
    },
    {
      title: "Si se pudo",
      description: (
        <>
          <p>
            Al final, un compañero pudo obtener un autómata que funcionara,
            entonces ya solo era cuestión de codearlo, y hacer que funcionara.
            Claro que se dice fácil, pero después de 3 días de pruebas y errores,
            logré tener el autómata funcionando en casi todos los casos.
          </p>
        </>
      ),
      badge: "Victory",
      image: ""
    },
  ];
  