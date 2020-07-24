import React from 'react';

function Categorias(){

    let categorias = ['01','02','03','04','05','06'];
    let name = 'Catgory';

    return (

		<div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>

                        <div class="card-body">
                        <div class="row">
                        {categorias.map (categoria =>
                                    <div class="col-lg-6 mb-4">
                                        <div class="card bg-info text-white shadow">
                                            <div class="card-body">
                                            <li> {name} {categoria} </li>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

)
}

export default Categorias;