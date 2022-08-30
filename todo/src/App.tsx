// Importando o useState pra usar variaveis dinamicas
import { useState } from "react";
// Importando os styled components do arquivo styles
import * as C from "./App.Styles";
// Importanto types
import { Item } from "./types/item"
// Importando componentes
import { ListItem } from "./components/ListItem"
import { AddArea } from "./components/AddArea";

// Criando lista de tarefas através do useState do React Hooks
const App =  () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar produtos de limpeza', done: false},
    {id: 2, name: 'Comprar pão na padaria', done: false}
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,

    })
    setList(newList);

  }

  return (
    <C.Container>
      <C.Area> 
        <C.Header>Lista de Tarefas</C.Header>
        <AddArea onEnter={handleAddTask}/>
        {list.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}

      </C.Area>
    </C.Container>

  )
}

export default App;
