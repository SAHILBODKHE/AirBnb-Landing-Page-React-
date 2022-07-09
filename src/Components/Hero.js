import React from 'react'
import { ReactDOM } from 'react'

import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jpg'
import p4 from '../images/p4.jpg'
import p5 from '../images/p5.jpg'
import p6 from '../images/p6.jpg'
import p7 from '../images/p7.jpg'
import p8 from '../images/p8.jpg'
import p9 from '../images/taj.jpg'
export default function Hero() {
  return (
    <hero className="Hero">
      <div className="imagef">
        <img className="p1" src={p1} />
        <div className="grp1">
          <img src={p2} />
          <img src={p3} />
        </div>
        <div className="grp2">
          <img className="p3" src={p4} />
          <img className="p3" src={p5} />
        </div>
        <div className="grp3">
          <img className="p4" src={p6} />
          <img
            class="p4"
            src="/static/media/p7.71918c7f8cc69f681921.jpg"
            width={100}
            height={100}
          />
        </div>
        <div className="grp4">
          <img className="p5" src={p8} />
          <img className="p5" src={p9} />
        </div>
      </div>

      <header>Online Experiences</header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eveniet
        totam vero necessitatibus labore incidunt! Amet, quia saepe distinctio
        hic commodi reprehenderit, ipsa fugiat autem natus recusandae quidem
        possimus dicta soluta? Vel provident culpa assumenda minus, reiciendis
        fugiat animi necessitatibus, iure doloremque architecto, repellendus
        ducimus.
      </p>
    </hero>
  )
}
