const addItems = document.querySelector(".add-items");
      const itemsList = document.querySelector(".plates");
      const items = JSON.parse(localStorage.getItem("items")) || [];
      // Will try getting data from local storage, else fall back on []

      function addItem(e) {
        e.preventDefault(); // Prevents from sending to servers
        const text = this.querySelector("[name=item]"); // Aka 'whole submitted form'
        const inputValue = text.value; // Gettig value out of user input
        const item = {
          text: inputValue,
          done: false
        };
        console.log(item);
        items.push(item);
        populateList(items, itemsList);
        localStorage.setItem("items", JSON.stringify(items)); // Only strings as values
        // JSON.parse would return that string into an object
      }

      function populateList(items = [], platesList) {
        //= [] in case nothing is passed
        platesList.innerHTML = items
          .map((item, i) => {
            // Map return array, for innerHTML need a string
            return `
              <li>
                <input type="checkbox" data-index=${i} id="item${i}" 
                  ${item.done ? "checked" : ""}/>
                <label for="item${i}">${item.text}</label>
              </li>
            `; // `` for HTML use
          })
          .join("");
      }

      function toggleDone(e) {
        if (!e.target.matches("input")) return; // Skip unless input
        console.log("HI");
        const index = e.target.dataset.index; // Tells the index of item in the array
        items[index].done = !items[index].done; // Set it to the opposite of itself
        localStorage.setItem("items", JSON.stringify(items));
        populateList(items, itemsList);
      }

      addItems.addEventListener("submit", addItem);
      itemsList.addEventListener("click", toggleDone);
      populateList(items, itemsList);

      //Select All for box color change
      const select = document.querySelectorAll(".selectJS");
      select.forEach(box => {
        box.addEventListener("mousedown", selectAll, toggleDone);
      });

      //Clear All for box color change
      const clear = document.querySelectorAll(".clearJS");
      clear.forEach(box => {
        box.addEventListener("mousedown", clearAll, toggleDone);
      });

      //Selects all checkboxes
      function selectAll(e) {
        for (var i = 0; i < items.length; i++) {
          items[i].done = true;
        }
        localStorage.setItem("items", JSON.stringify(items));
        populateList(items, itemsList);
      }

      //Clear all checkboxes
      function clearAll(e) {
        for (var i = 0; i < items.length; i++) {
          items[i].done = false;
        }
        localStorage.setItem("items", JSON.stringify(items));
        populateList(items, itemsList);
      }
