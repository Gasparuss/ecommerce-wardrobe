import { memo, useEffect } from "react";
import { wardrobeColors } from "../../../utils/consts";
import { useProduct } from "../../../context/ProductContext";
import {
  StyledColorPlaceholder,
  StyledColorSelectWrapper,
  StyledInput,
  StyledInputLabel,
} from "./ColorSelect.styles";

type ColorSelectProps = {
  readonly name?: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ColorSelect = memo<ColorSelectProps>(({ name, onChange }) => {
  const { activeWardrobeColor, setActiveWardrobeColor } = useProduct();

  useEffect(() => {
    return () => {
      setActiveWardrobeColor("brown");
    };
  }, []);
  return (
    <StyledColorSelectWrapper>
      {wardrobeColors.map((color) => {
        return (
          <StyledInputLabel
            key={color.label}
            isActive={activeWardrobeColor === color.label}
          >
            <StyledInput
              type="checkbox"
              value={color.label}
              name={name}
              onChange={onChange}
              checked={activeWardrobeColor === color.label}
            />
            <StyledColorPlaceholder
              color={"#" + color.palette.main}
            ></StyledColorPlaceholder>
          </StyledInputLabel>
        );
      })}
    </StyledColorSelectWrapper>
  );
});

ColorSelect.displayName = "ColorSelect";
