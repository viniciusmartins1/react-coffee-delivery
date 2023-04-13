import { FormGridStyle, InputForm, OptionalInput } from "./style";
import { useContext } from "react";
import { CoffeeContext } from "../../../contexts/CoffeeInfoContext";
import { useFormContext } from "react-hook-form";

export function AddressDeliveryForm() {
  const { selectedCoffees } = useContext(CoffeeContext);
  const { register, formState } = useFormContext();

  return (
    <FormGridStyle>
      <InputForm
        id="cep"
        widthInput={195}
        type="text"
        placeholder="CEP"
        disabled={selectedCoffees.length <= 0}
        {...register("cep")}
        invalidInput={!!formState.errors.cep?.message}
      />
      <InputForm
        id="street"
        type="text"
        placeholder="Rua"
        disabled={selectedCoffees.length <= 0}
        {...register("street")}
        invalidInput={!!formState.errors.street?.message}
      />
      <div>
        <InputForm
          id="numberHouse"
          type="number"
          placeholder="Numero"
          disabled={selectedCoffees.length <= 0}
          min={0}
          {...register("numberHouse", { valueAsNumber: true })}
          invalidInput={!!formState.errors.numberHouse?.message}
        />
        <div>
          <InputForm
            id="complement"
            flex1
            type="text"
            placeholder="Complemento"
            disabled={selectedCoffees.length <= 0}
            maxLength={40}
            {...register("complement")}
            invalidInput={!!formState.errors.complement?.message}
          />
          <OptionalInput>Opcional</OptionalInput>
        </div>
      </div>
      <div>
        <InputForm
          id="district"
          type="text"
          placeholder="Bairro"
          disabled={selectedCoffees.length <= 0}
          {...register("district")}
          invalidInput={!!formState.errors.district?.message}
        />
        <InputForm
          id="city"
          flex1
          type="text"
          placeholder="Cidade"
          disabled={selectedCoffees.length <= 0}
          {...register("city")}
          invalidInput={!!formState.errors.city?.message}
        />
        <InputForm
          id="uf"
          widthInput={60}
          type="text"
          placeholder="UF"
          disabled={selectedCoffees.length <= 0}
          {...register("uf")}
          invalidInput={!!formState.errors.uf?.message}
        />
      </div>
    </FormGridStyle>
  );
}
