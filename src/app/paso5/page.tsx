import { TracingContent } from '@/components/tracing-content'
import React from 'react'



export default function Paso5() {
  return (
    <TracingContent dummyContent={dummyContent} next="smart"/>
  )
}


const dummyContent = [
    {
      title: "Nuevo Inicio",
      description: (
        <>
          <p>
            Terminando el semestre, el proyecto de Xavio AI me
            hizo sentir tan alegre con lo que habíamos construido
            en equipo, que ni siquiera me importaba ya la calificación
            o los requisitos, le hechaba ganas solo por el gusto de que
            estuviera cada vez mejor.
          </p>
          <p>
            Aprendí que no siempre se debe de buscar la calificación o el
            dinero, sino también la satisfacción al hacer lo que a uno le 
            gusta y sabe hacer.
          </p>
        </>
      ),
      badge: "Cierre",
      image:
        "",
    }
  ];
  