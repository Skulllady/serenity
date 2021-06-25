import React, { useState, useEffect } from "react";

function Search() {

  const [search, setSearch] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

useEffect(() => {
  setFilteredTransactions(transactions.filter(transaction => {
        return transaction.description.toLowerCase().includes(search.toLowerCase())
    })
    )
}, [search])

  return (
    <>
      <div>
        <input placeholder="Search transactions by description..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
    </>
  )
}

export default Search;
