import logo from "./logo.svg";
import "./App.css";

import Wardrobe from "./components/Wardrobe.js";
function Company(props) {
  return <SubCompany name={props.name} />;
}

function SubCompany(props) {
  return <h4>{props.name}</h4>;
}
const upperCase = (text) => text.toUpperCase();
function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];

  return [
    companies.map((c) => (
      <Company
        name={c.name}
        revenue={c.revenue}
        upperCase={upperCase}
        key={c.name}
      />
    )),
  ];
}

export default App;
