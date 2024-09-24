import { useEffect, useState } from 'react';
import styles from './Formulario.module.css';

function Formulario(){


    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(null);


    function calculaImc(){
        const AlturaEmMetros = parseFloat(altura);
        const pesoEmKg = parseFloat(peso);
        const alturaAoQuadrado = AlturaEmMetros * AlturaEmMetros;
        const resultadoImc = pesoEmKg / alturaAoQuadrado;

        setImc(resultadoImc.toFixed(2));        
    }


    useEffect(() =>{
        calculaImc();
    },[altura,peso,imc])
    





    return(
        <>
        <form className={styles.form_container}>
            <input onChange={(e) => {setAltura(e.target.value)}} className={styles.inputs} placeholder="Coloque sua altura em metros" type="number" />
            <input onChange={(e) => {setPeso(e.target.value)}} className={styles.inputs} placeholder="Coloque seu peso em kg" type="number"/>
        </form>

        <ul>
        {imc !== null && altura > 0 && peso > 0 &&(
                    <>
                        {imc < 16 && <li className={styles.list}>
                            Você está com Magreza Grave <br/>
                            <span className={styles.imc_text }>Seu IMC: {imc}</span>
                            </li>}
                        {imc >= 16 && imc < 18.5 && <li className={styles.list}>
                            Você está com Magreza Moderada <br/>
                            <span className={styles.imc_text }>Seu IMC: {imc}</span>
                            </li>}
                        {imc >= 18.5 && imc < 25 && <li className={styles.list}>
                            Você está com Peso Normal <br/>
                            <span className={styles.imc_text }>Seu IMC: {imc}</span>
                            </li>}
                        {imc >= 25 && imc < 30 && <li className={styles.list}>
                            Você está com Sobrepeso <br/>
                            <span className={styles.imc_text }>Seu IMC: {imc}</span>
                            </li>}
                        {imc >= 30 && imc < 35 && <li className={styles.list}>
                            Você está com Obesidade Grau I <br/>
                            <span className={styles.imc_text }>Seu IMC: {imc}</span>
                            </li>}
                        {imc >= 35 && imc < 40 && <li className={styles.list}>
                            Você está com Obesidade Grau II <br/>
                            <span className={styles.imc_text }>Seu IMC: {imc}</span> 
                            </li>}
                        {imc >= 40 && <li className={styles.list}>
                            Você está com Obesidade Grau III <br/>
                            <span className={styles.imc_text }>Seu IMC: {imc}</span>
                            </li>}
                    </>
                )}
        </ul>
        </>
        
    )
}

export default Formulario;