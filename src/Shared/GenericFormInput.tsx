import React from "react";
import { UseFormReturn, Path, FieldValues} from "react-hook-form"; 
import { 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Textarea } from "@/Components/ui/textarea";

// Define the type for options used in select fields
type OptionType = {
  value: string;
  label: string;
};

// props type for GenericFormInput using a generic type
interface GenericFormInputProps<T extends FieldValues> {
  placeholder: string;
  form: UseFormReturn<T>;
  label: string;
  name: Path<T>; // Use Path type for name
  type: "text" | "password" | "email" | "number" | "textarea" | "select";
  required?: boolean;
  description?: string;
  options?: OptionType[];
}

 // component accept a generic type for form fields
const GenericFormInput = <T extends FieldValues>({
  placeholder,
  form,
  label,
  name,
  type,
  required,
  description,
  options,
}: GenericFormInputProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          {/* Handle Different Field Types */}
          {type === "textarea" ? (
            <Textarea 
              placeholder={placeholder} 
              className="resize-none" 
              {...field} 
              required={required} 
            />
          ) : type === "select" ? (
            <Select 
              onValueChange={field.onChange} 
              value={field.value || ""}
            >
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options?.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Input 
              placeholder={placeholder} 
              type={type} 
              {...field} 
              required={required} 
            />
          )}

          <FormMessage />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
};

export default GenericFormInput;
