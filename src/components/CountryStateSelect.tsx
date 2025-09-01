"use client";

import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { Country, State } from "country-state-city";

export type OptionType = {
  value: string;
  label: string;
};

export type CountryStateValue = {
  country: OptionType | null;
  state: OptionType | null;
};

interface CountryStateSelectProps {
  onChange: (value: CountryStateValue) => void;
  defaultCountry?: string;
  defaultState?: string;
}

export default function CountryStateSelect({
  onChange,
  defaultCountry,
  defaultState,
}: CountryStateSelectProps) {
  const [selectedCountry, setSelectedCountry] = useState<OptionType | null>(
    defaultCountry ? { value: defaultCountry, label: defaultCountry } : null
  );
  const [selectedState, setSelectedState] = useState<OptionType | null>(
    defaultState ? { value: defaultState, label: defaultState } : null
  );

  const countries: OptionType[] = Country.getAllCountries().map((c) => ({
    value: c.isoCode,
    label: c.name,
  }));

  const states: OptionType[] = selectedCountry
    ? State.getStatesOfCountry(selectedCountry.value).map((s) => ({
        value: s.isoCode,
        label: s.name,
      }))
    : [];

  const handleCountryChange = (val: SingleValue<OptionType>) => {
    setSelectedCountry(val ?? null);
    setSelectedState(null);
    onChange({ country: val ?? null, state: null });
  };

  const handleStateChange = (val: SingleValue<OptionType>) => {
    setSelectedState(val ?? null);
    onChange({ country: selectedCountry, state: val ?? null });
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <label className="block text-sm font-medium mb-1">Country</label>
        <Select<OptionType, false>
          name="country"
          options={countries}
          value={selectedCountry}
          onChange={handleCountryChange}
          placeholder="Select a country"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">State</label>
        <Select<OptionType, false>
          name="state"
          options={states}
          value={selectedState}
          onChange={handleStateChange}
          placeholder="Select a state"
          isDisabled={!selectedCountry}
        />
      </div>
    </div>
  );
}
