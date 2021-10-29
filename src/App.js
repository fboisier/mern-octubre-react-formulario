import { useState } from "react";
import { Contador } from "./components/Contador";
import FilteredList from "./components/FilteredList";
import { Input } from "./components/Input";
import { UseForm } from "./UseForm";


const App = () => {

  const [filter, setFilter] = useState('');
  const items=['pancho', 'pancito','luffy', 'nami','zoro','ussop','sanji','robin','brook','chopper','franky','jinbe'];

  return (
    <div className="container mt-5">
      <h1>Contador</h1>
      <Contador valorInicial={10} />

      <hr />

      <h1 className="mt-5">Listado Elevación de STATE</h1>

      <Input
        filter={filter}
        setFilter={setFilter}
      />
      <FilteredList
        filter={filter}
        items={items.filter(item => item.indexOf(filter) > -1)}//filtra alguna concidencia
      />

      <h1 className="mt-5">FORMULARIO</h1>

      <hr />

      <UseForm />

    </div>
  );
}

export default App;
