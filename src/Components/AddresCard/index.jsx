import { AdCard } from "../../Styles/ComponentsStyle/AddresCard";

export const AddresCard = ({ address}) => {
  return (
    <AdCard>
      <p>{address.city}</p>
      <input type="checkbox" />
    </AdCard>
  );
};
