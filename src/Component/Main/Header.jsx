import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <nav class="navbar navbar-expand-md shadow-lg">
            <div class="container-fluid">
                <div className='mx-auto'>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav justify-content-center">
                            <li class="nav-item mx-3">
                                <Link class="nav-link active text-dark text-center fw-semibold" to='/'>Home</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link text-dark text-center fw-semibold" to='/'>Services</Link>
                            </li>
                            <Link class="navbar-brand mx-3 fw-bold fs-2" to='/'>CLIQUES</Link>
                            <li class="nav-item mx-3">
                                <Link class="nav-link text-dark text-center fw-semibold" to='/'>About</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link disabled text-dark text-center fw-semibold" to='/'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header