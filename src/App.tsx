import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { items } from './data/items';
import { FilterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { Item } from './types/Item';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { categories } from './data/categories';
import { InputArea } from './components/inputArea';


function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(()=> {
    setFilteredList( FilterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  useEffect(()=> {
    let incomeCount = 0
    let expenseCount = 0

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value
      } else {
        incomeCount += filteredList[i].value
      }
    }

    setIncome(incomeCount)
    setExpense(expenseCount)

  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list]
    newList.push(item)
    setList(newList)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Controle Financeiro Pessoal</C.HeaderText>
      </C.Header>
      <C.Body>
        
      <InfoArea 
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
      />

      <InputArea onAdd={handleAddItem}/>

      <TableArea list={filteredList}/>

      </C.Body>
    </C.Container>
  );
}

export default App;
