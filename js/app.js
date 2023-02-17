const app = {
  init() {
    // haal de boodschappen uit localStorage,
    // als er geen zijn dan is het een lege array --> || []
    this.groceries = JSON.parse(localStorage.getItem("groceries")) || [];

    this.cacheElements();
    this.registerListeners();
    this.createHTMLList();
  },
  cacheElements() {
    this.$inpGrocery = document.querySelector("#grocery");
    this.$btnAdd = document.querySelector("#add");
    this.$ulGroceries = document.querySelector("#groceries");
  },
  registerListeners() {
    this.$inpGrocery.addEventListener("keydown", (e) => {
      // als de gebruiker op enter drukt, voeg de boodschap toe
      if (e.key === "Enter") {
        e.preventDefault(); // voorkomt dat de pagina herlaadt
        const grocery = this.$inpGrocery.value;
        this.addGrocery(grocery);
        this.$inpGrocery.value = "";
      }
    });

    this.$btnAdd.addEventListener("click", () => {
      const grocery = this.$inpGrocery.value;
      this.addGrocery(grocery);
      this.$inpGrocery.value = "";
    });
  },
  addGrocery(grocery) {
    // add grocery to HTML list
    this.$ulGroceries.innerHTML += `<li>${grocery}</li>`;
    // add grocery to array
    this.groceries.push(grocery);
    // add groceries to localStorage
    localStorage.setItem("groceries", JSON.stringify(this.groceries));
  },
  createHTMLList() {
    // zet de array om naar een array met li's
    const liGroceries = this.groceries.map((grocery) => `<li>${grocery}</li>`);
    // steek de li's in de ul
    this.$ulGroceries.innerHTML = liGroceries.join("");
  },
};

app.init();
