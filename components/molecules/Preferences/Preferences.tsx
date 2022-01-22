import { useProduct } from "../../../context/ProductContext";
import { SearchInput } from "../../atoms/SearchInput/SearchInput";
import { SelectInput } from "../../atoms/SelectInput/SelectInput";
import { StyledPreferencesWrapper } from "./Preferences.styles";

export const Preferences = () => {
  const {
    price,
    minPrice,
    maxPrice,
    handleChangePrice,
    searchQuery,
    handleChangeSearchQuery,
    handleSelectProductTypes,
    productsTypes,
  } = useProduct();

  return (
    <StyledPreferencesWrapper>
      <SearchInput
        value={searchQuery}
        onChange={handleChangeSearchQuery}
        placeholder="e. g. Kivik"
      />
      <SelectInput
        options={productsTypes.map((type) => ({ value: type, label: type }))}
        onChange={handleSelectProductTypes}
      />
    </StyledPreferencesWrapper>
  );
};
