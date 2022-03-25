import React from "react";
import "./styles.css";

export default function LegislatorCard({requeriments, analysis, denied, done}) {

    return (
        <section className="legislators_cards">
            <div className="container_cards"> 
                <h1 className="title"> Requerimentos </h1>
                <h1 className="numberRequirements"> {requeriments}</h1>               
            </div>

            <div className="container_cards"> 
                <h1 className="title">  Em avaliação </h1>
                <h1 className="numberAnalysis"> {analysis}</h1>               
            </div>

            <div className="container_cards"> 
                <h1 className="title"> Não aceitos </h1>
                <h1 className="numberDenied"> {denied}</h1>             
            </div>

            <div className="container_cards"> 
                <h1 className="title"> Concluídos </h1>
                <h1 className="numberDone"> {done}</h1>
            </div>
        </section>
        
    )

}