import React from "react";
import "./indexProducts.scss";

export const IndexProducts = () => {
    return (
        <div className="productsContainer">
            <div className="indexProducts">

                <a href="">

                    <div>
                        <img src="./img/limpia radiador.jpg" alt="limpia radiador" />
                        <h3>Limpia Radiador</h3>
                        <h2>Limpia Radiador </h2>
                        <button> VER PRODUCTO</button>
                    </div>
                </a>

                <a href="">
                    <div>
                        <img src="./img/sella grietas camiones.jpg" alt="sella grietas camiones" />
                        <h3> Sella Grietas </h3>
                        <h2>Sella Grietas FK20</h2>
                        <button> VER PRODUCTO</button>
                    </div>

                </a>

                <a href="">
                    <div>
                        <img src="./img/sella grietas super.jpg" alt="sella grietas super plus" />
                        <h3>Sella Grietas</h3>
                        <h2>Sella Grietas Súper</h2>
                        <button> VER PRODUCTO</button>
                    </div>

                </a>

                <a href="">
                    <div>
                        <img src="./img/sella grietas.jpg" alt="sella grietas" />
                        <h3> Sella Grietas</h3>
                        <h2> Sella Grietas</h2>
                        <button> VER PRODUCTO</button>
                    </div>

                </a>
            </div>
        </div>
    )
}