import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <h1 className="text-[4em] font-semibold">Erro 404!</h1>
            <p className="text-[1.5em]">Página não encontrada.</p>
            <Link className="px-6 py-2 border mt-5" to="/">
                voltar
            </Link>
        </div>
    )
}

export default ErrorPage;