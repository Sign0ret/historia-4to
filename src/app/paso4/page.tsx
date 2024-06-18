import { TracingContent } from '@/components/tracing-content'
import React from 'react'



export default function Paso4() {
  return (
    <TracingContent dummyContent={dummyContent} next="paso5"/>
  )
}


const dummyContent = [
    {
      title: "Adaptándome al Cambio",
      description: (
        <>
          <p>
            Cuando logré aprender autómatas, logré dominar el reto de web,
            y ya me sentía agusto tocando violín, me di cuenta de que aunque
            quizá no estaba logrando todo lo que hubiera querido lograr en
            el ámbito laboral, estaba logrando mucho en el ámbito escolar y 
            personal
          </p>
        </>
      ),
      badge: "Aprendiendo",
      image:
        "",
    },
  ];
  