import React from "react"
import { Control, FieldValues, Path } from "react-hook-form"

import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface FieldWrapperProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder: string
  type?: string
}

const FieldWrapper = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FieldWrapperProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <Input {...field} type={type} placeholder={placeholder} />
        <FormMessage/>
      </FormItem>
    )}
  />
)

export default FieldWrapper