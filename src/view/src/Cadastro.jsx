import { useState } from 'react'
import Axios from 'axios'

export default function Cadastro() {

  const [values, setValues] = useState()

  const handleChangeValues = (value) => {
      setValues((prevValue) => ({
          ...prevValue,
          [value.target.name]: value.target.value,
      }))
  }


  const clickButton = () => {
    console.log(values)
    Axios.post("http://localhost:5000/livros", {
        nome: values.nome,
        cpf: values.cpf,
        idade: values.idade,
        cidade: values.idade,
        estado: values.estado,
        familia: values.familia,  
        p1: values.p1,
        p2: values.p2,
        p3: values.p3,
        p4: values.p4,
        p5: values.p5,
        p6: values.p6,
        p7: values.p7,
        p8: values.p8,
        p9: values.p9,
        p10: values.p10,
        p11: values.p11,
        p12: values.p12,
        p13: values.p13,
        p14: values.p14
    }).then((response) => {
        console.log(response)
        alert("Cadastrado com sucesso!")
    })
}


  return (
    <div className="container">

    <div className="pessoa">
        <p>Nome</p>
        <input type="text" name='nome' onChange={handleChangeValues}  />

        <p>CPF</p>
        <input type="text" name='cpf' onChange={handleChangeValues}  />

        <p>Idade</p>
        <input type="text" name='idade' onChange={handleChangeValues}  />

        <p>Cidade</p>
        <input type="text" name='cidade' onChange={handleChangeValues}  />

        <p>Estado</p>
        <input type="text" name='estado' onChange={handleChangeValues}  />

        <p>Familia</p>
        <input type="text" name='familia' onChange={handleChangeValues}  placeholder='Adulta ou Mista' />

    </div>

      <p>1. Nos últimos três meses, os moradores deste domicílio tiveram preocupação de que os
alimentos acabassem antes de poderem comprar ou receber mais comida?</p>
      <input type="text" name="p1" onChange={handleChangeValues} placeholder='PARA SIM = 1 / PARA NÃO = 0' />

      <p>2 - Nos últimos três meses, os alimentos acabaram antes que os moradores deste domicílio
tivessem dinheiro para comprar mais comida?</p>
      <input type="text" name="p2" onChange={handleChangeValues} placeholder='PARA SIM = 1 / PARA NÃO = 0'  />

      <p>3 - Nos últimos três meses, os moradores deste domicílio ficaram sem dinheiro para ter uma
alimentação saudável e variada?
</p>
      <input type="text" name="p3" onChange={handleChangeValues} placeholder='PARA SIM = 1 / PARA NÃO = 0'  />

      <p>4 - Nos últimos três meses, os moradores deste domicílio comeram apenas alguns alimentos
que ainda tinham porque o dinheiro acabou?</p>
      <input type="text" name="p4" onChange={handleChangeValues} placeholder='PARA SIM = 1 / PARA NÃO = 0'  />

      <p>5 - Nos últimos três meses, algum morador de 18 anos ou mais de idade deixou de fazer uma
refeição porque não havia dinheiro para comprar comida?
</p>
      <input type="text" name="p5" onChange={handleChangeValues} placeholder='PARA SIM = 1 / PARA NÃO = 0'  />

      <p>6 - Nos últimos três meses, algum morador de 18 anos ou mais de idade, alguma vez comeu
menos do que devia porque não havia dinheiro para comprar comida?
</p>
      <input type="text" name="p6" onChange={handleChangeValues} placeholder='PARA SIM = 1 / PARA NÃO = 0'  />

      <p>7 - Nos últimos três meses, algum morador de 18 anos ou mais de idade, alguma vez sentiu
fome, mas não comeu, porque não havia dinheiro para comprar comida?
</p>
      <input type="text" name="p7" onChange={handleChangeValues} placeholder='PARA SIM = 1 / PARA NÃO = 0'  />

      <p>8 - Nos últimos três meses, Algum morador de 18 anos ou mais de idade, alguma vez, fez
apenas uma refeição ao dia ou ficou um dia inteiro sem comer porque não havia dinheiro
para comprar comida?
</p>
      <input type="text" name="p8" onChange={handleChangeValues} placeholder='PARA SIM = 1 / PARA NÃO = 0'  />

      <p>9 - Nos últimos três meses, algum morador com menos de 18 anos de idade, alguma vez,
deixou de ter uma alimentação saudável e variada porque não havia dinheiro para comprar
comida?
</p>
      <input type="text" name="p9" onChange={handleChangeValues} placeholder='PARA SIM = 1 / PARA NÃO = 0'  />

      <p>10 - Nos últimos três meses, algum morador com menos de 18 anos de idade, alguma vez, não
comeu quantidade suficiente de comida porque não havia dinheiro para comprar comida?</p>
      <input type="text" name="p10" onChange={handleChangeValues} placeholder='PARA SIM = 1 / PARA NÃO = 0'  />

      <p>11 - Nos últimos três meses, alguma vez, foi diminuída a quantidade de alimentos das
refeições de algum morador com menos de 18 anos de idade, porque não havia dinheiro para
comprar comida?
</p>
      <input type="text" name="p11" onChange={handleChangeValues} placeholder='PARA SIM = 1 / PARA NÃO = 0'  />

      <p>12 - Nos últimos três meses, alguma vez, algum morador com menos de 18 anos de idade
deixou de fazer alguma refeição, porque não havia dinheiro para comprar comida?
</p>
      <input type="text" name="p12" onChange={handleChangeValues} placeholder='PARA SIM = 1 / PARA NÃO = 0'  />

      <p>13 - Nos últimos três meses, alguma vez, algum morador com menos de 18 anos de idade,
sentiu fome, mas não comeu porque não havia dinheiro para comprar comida?
</p>
      <input type="text" name="p13" onChange={handleChangeValues} placeholder='PARA SIM = 1 / PARA NÃO = 0'  />

      <p>14 - Nos últimos três meses, alguma vez, algum morador com menos de 18 anos de idade, fez
apenas uma refeição ao dia ou ficou sem comer por um dia inteiro porque não havia dinheiro
para comprar comida?
</p>
      <input type="text" name="p14" onChange={handleChangeValues} placeholder='PARA SIM = 1 / PARA NÃO = 0'  />

      <button onClick={() => clickButton()}>CADASTRAR DADOS</button>
      
    </div>
  )
}
