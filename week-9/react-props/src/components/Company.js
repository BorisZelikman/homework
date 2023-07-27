import SubCompany from "./components/SubCompany.js";

function Company(props) {
  let explodedRevenue = props.revenue * 100;

  return (
    <div>
      <p>
        {props.name} earns {explodedRevenue}
      </p>
      <SubCompany name={props.name} />
    </div>
  );
}
export default Company;
