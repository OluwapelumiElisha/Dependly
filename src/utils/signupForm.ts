import { useEffect, useState } from "react";
import { Path } from "react-hook-form";

// Define the expected keys of the form
export type SignUpFormFields = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  password: string;
  referral?: string;
  selectCountry: string;
};

// Define only valid HTML input types
type InputTypes = "text" | "email" | "password" | "number" | "select";

type SelectOption = { label: string; value: string };

export const SignUpForm = () => {
  const [countryOptions, setCountryOptions] = useState<SelectOption[]>([]);

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=cca2,idd");
        const data = await response.json();

        const countryMap = new Map(); // Use a Map to track unique country codes

        data.forEach((country: { cca2: string; idd?: { root: string; suffixes?: string[] } }) => {
          if (country.idd?.root) {
            const countryCode = `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ""}`;
            if (!countryMap.has(countryCode)) {
              countryMap.set(countryCode, {
                label: `(${country.cca2}) ${countryCode}`,
                value: countryCode,
              });
            }
          }
        });

        setCountryOptions(Array.from(countryMap.values())); // Convert Map values to array
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    };

    fetchCountryCodes();
  }, []);

  const signUpForm: {
    name: Path<SignUpFormFields>;
    type: InputTypes;
    placeholder?: string;
    label: string;
    options?: SelectOption[];
  }[] = [
    { name: "firstname", type: "text", placeholder: "Enter first name", label: "First Name" },
    { name: "lastname", type: "text", placeholder: "Enter last name", label: "Last Name" },
    { name: "email", type: "email", placeholder: "Enter email", label: "Email" },
    {
      name: "selectCountry",
      type: "select",
      label: "Phone Number",
      placeholder: "(NG) +234",
      options: countryOptions.length > 0 ? countryOptions : [
        { label: "(NG) +234", value: "+234" },
        { label: "(GH) +233", value: "+233" },
        { label: "(KE) +254", value: "+254" },
        { label: "(UG) +256", value: "+256" },
      ],
    },
    { name: "phoneNumber", type: "number", placeholder: "Enter mobile number", label: "" },
    { name: "password", type: "password", placeholder: "Input Password", label: "Password" },
    { name: "referral", type: "text", placeholder: "Referral code (optional)", label: "" },
  ];

  return { signUpForm, countryOptions };
};
