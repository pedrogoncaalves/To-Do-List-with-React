// Importando o useState pra usar variaveis dinamicas
import { useState } from "react";
// Importando os styled components do arquivo styles
import * as C from "./App.Styles";
// Importanto types
import { Item } from "./types/item"
// Importando componentes
import { ListItem } from "./components/ListItem"


// Criando lista de tarefas através do useState do React Hooks
const App =  () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar o Pão na Padaria', done: false},
    {id: 2, name: 'Comprar o Bolo na Padaria', done: false}
  ]);



  return (
    <C.Container>
      <C.Area> 
        <C.Header>Lista de Tarefas</C.Header>





        {list.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}

      </C.Area>
    </C.Container>


  )

}



export default App;
