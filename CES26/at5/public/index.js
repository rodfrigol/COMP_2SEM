class MyForm extends React.Component{
    avaliarIdade(event){
        event.preventDefault()
        var form = new FormData(event.target)
        if (!Number(form.get('idade'))){
            alert("A idade deve ser um número")
            return
        }
        if (form.get('idade')<18){
            alert("A idade deve ser maior que 18")
            return
        }
        fetch('/send_data', {
            method: 'POST',
            body: form
        })
    }

    render(){
        return (
            <form onSubmit = {this.avaliarIdade}>
                Nome: <input type="text" name="nome"/> <br/>

                Idade: <input type="text" name="idade"/> <br/>
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}

ReactDOM.render(
    <MyForm />,
    document.getElementById("root")
)

class MyTable extends React.Component{
    constructor(props){
        super(props)
        this.data = props.data
    }
    getRows(){
        return this.data["data"].map((key, index)=>{
            return (<tr>
                        <td>{key["nome"]}</td>
                        <td>{key["idade"]}</td>
                    </tr>)
        })
    }
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getRows()}
                </tbody>
            </table>
        )
    }
}

class MyButton extends React.Component{
    obterDados(){
        fetch('/get_data')
            .then(response => response.json())
            .then(data => {
                ReactDOM.unmountComponentAtNode(document.getElementById("myTable"))
                ReactDOM.render(
                    <MyTable data = {data}/>,
                    document.getElementById("myTable")
                )
            });
    }

    render(){
        return (
            <div>
                <button onClick = {this.obterDados}>Obter Dados!</button>
                <div id='myTable'></div>
            </div>
        )
    }
}

ReactDOM.render(
    <MyButton />,
    document.getElementById("tabela")
)
