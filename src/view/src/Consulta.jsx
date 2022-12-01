import { useState } from "react";
import Axios from 'axios'

export default function Consulta () {

    const [values, setValues] = useState()
    const [nome, setNome] = useState()
    const [idade, setIdade] = useState()
    const [cidade, setCidade] = useState()
    const [estado, setEstado] = useState()
    const [familia, setFamilia] = useState()
    const [pontos, setPontos] = useState()
    const [situacao, setSituacao] = useState()

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    const enviarCpf = () => {
        Axios.post("http://localhost:5000/consultar/pessoa", {
            cpf: values.cpf
        }).then((response) => {
            console.log(response)
        })
    }

    const pegarDados = () => {
        Axios.get("http://localhost:5000/consultar/pessoa").then((response) => {
            console.log(response.data.rows)
            setNome(response.data.rows[0].nome)
            setIdade(response.data.rows[0].idade)
            setCidade(response.data.rows[0].cidade)
            setEstado(response.data.rows[0].estado)
            setFamilia(response.data.rows[0].familia)
            setPontos(response.data.rows[0].pontos)
            setSituacao(response.data.rows[0].situacao)

            
        })
    }

    const Consultar = () => {
        enviarCpf()
        setTimeout(() => {
            pegarDados()
        }, 1000);
    } 

    return(
        <div className="container">
            <input type="text" name="cpf" placeholder="CPF"  onChange={handleChangeValues}   />
            <button  onClick={() => Consultar()}>CONSULTAR</button>

            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Cidade: {cidade}</p>
            <p>Estado: {estado}</p>
            <p>Familia: {familia}</p>
            <p>Pontuação: {pontos}</p>
            <p>Situação: {situacao}</p>
        </div>
    )
}