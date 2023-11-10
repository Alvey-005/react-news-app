import React, { useState } from "react"
import { hero } from "../../dummy";
import "../../styles/hero.css";
import Card from "./Card";

const Hero = () => {
  const [items, setIems] = useState(hero)
  console.log("hero", hero)

  return (
    <>
      <section className='hero'>
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
      Hero
    </>
  )
}

export default Hero