import { useItemStore } from "./store/itemStore";
import { shallow } from "zustand/shallow";
import { useState } from "react";
import "./App.css";

function App() {
  const [addedItem, setAddedItem] = useState("");

  const { item, total } = useItemStore(
    (state) => ({
      item: state.item,
      total: state.total,
    }),
    shallow
  );
  const { updateItem } = useItemStore((state) => ({
    updateItem: state.updateItem,
  }));

  const { deleteItem } = useItemStore((state) => ({
    deleteItem: state.deleteItem,
  }));

  const { updateTotal } = useItemStore((state) => ({
    updateTotal: state.updateTotal,
  }));

  return (
    <main>
      <h1>Page Of Items</h1>
      <br />
      <div>
        <h2>Items:</h2>
        <>
          {item &&
            item.map((i, index) => {
              return (
                <>
                  <span key={index}>{i}</span>
                  <button onClick={() => deleteItem(addedItem)}>
                    Delete Item
                  </button>
                  <br />
                </>
              );
            })}
        </>
      </div>
      <div>
        <p>Total: {total}</p>
        <button onClick={() => updateTotal(item.length)}>
          Click To Update Total
        </button>
      </div>
      <input
        type="text"
        value={addedItem}
        onChange={(e) => setAddedItem(e.target.value)}
      />
      <p>Item: {addedItem}</p>
      <br />
      <button onClick={() => updateItem(addedItem)}>Add Item</button>
    </main>
  );
}

export default App;
