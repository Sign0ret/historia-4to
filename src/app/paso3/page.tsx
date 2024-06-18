import { TracingContent } from '@/components/tracing-content'
import React from 'react'



export default function Paso3() {
  return (
    <TracingContent dummyContent={dummyContent} next="paso4"/>
  )
}


const dummyContent = [
    {
      title: "No estuve solo",
      description: (
        <>
          <p>
            Conmigo siempre estuvieron mis compañeros de distintos equipos,
            y aunque no todos mis compañeros eran trabajadores, muchos si,
            y eso, además del buen diálogo con profesores, logramos hacer
            cosas muy grandes, no solo con este proyecto de backtracking
            mencionado en el paso 3 sino también con el proyecto del 
            videojuego y principalmente el reto de web.
          </p>
          <p>
            En este reto hicimos un proyecto llamado XAVIO AI.
          </p>
        </>
      ),
      badge: "Entre más llegas más lejos",
      image:
        "",
    }
  ];
  