import { TracingContent } from '@/components/tracing-content'
import React from 'react'



export default function Paso1() {
  return (
    <TracingContent dummyContent={dummyContent} next="paso2"/>
  )
}


const dummyContent = [
    {
      title: "Mis inicios",
      description: (
        <>
          <p>
            Al comiezo, yo me sentía con muchas ganas de aprender lo que venía
            aprendiendo de manera autodidacta, lo que es desarrollo web.
          </p>
          <p>
            Cuando vi que en lugar de web, mis primeras clases serían de redes,
            estaba un poco confundido y sin muchas ganas de comenzar las clases.
          </p>
          <p>
            Pero como vi que luego tendría 10 semanas de desarrollo web además
            de que tendría clases de violín, me volví a emocionar por el regreso
            a clases.
          </p>
        </>
      ),
      badge: "Previo a clases",
      image:
        "",
    },
    {
      title: "Los primeros días",
      description: (
        <>
          <p>
            Al comienzo tuve un equipo que no me agradaba del todo, pues no
            conocía a casi nadie. Pero como estuve con mi compañero Bryan 
            o "el Don Caiman", me sentí bien. Aunque sentí culpa por no haber
            terminado en el equipo de mi otro gran amigo Cuevas.
          </p>
          <p>
            Al comienzo pensé en que no me gustaba nada lo de redes pues nos 
            llevaron a cotizar, en lugar de mostrarnos código. Pero cuando vi
            lo que se requiere para que un solo edificio tenga red, descubrí
            que estaba equivocado en cuanto a lo complejo y necesario que es
            el saber de redes.
          </p>
        </>
      ),
      badge: "En el salón de redes",
      image: ""
    },
    {
      title: "Mi primera clase de violín",
      description: (
        <>
          <p>
            En mi primera clase, sentí que todos los demás eran muy avanzados
            a comparación mía, pero a las pocas clases le agarré la onda y 
            comencé a avanzar muy rápido.
          </p>
        </>
      ),
      badge: "Launch Week",
      image: ""
    },
  ];
  