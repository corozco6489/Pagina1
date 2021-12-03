import "./works.scss";
import { useState } from "react";
import { useEffect } from "react";
import { designPortfolio } from "../../data";

export default function Works() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(designPortfolio);
  }, [true]);
  return (
    <div className="contenedor" id="works">
      <h2 className="subtitle">Works</h2>
      <section className="experts">
          {data.map((d)=>(
          <div class="cont-expert">
              <img src={d.img} alt=""/>
                  <h3 class="n-expert">{d.title}</h3>
        </div>
            
            ))}
      
      </section>
    </div>
  );
}
