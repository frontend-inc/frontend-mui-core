import React from 'react'
import { SearchInput } from '../../..'
import { Typography } from '../../../../tailwind'

type FilterKeywordProps = {
  label?: string
  handleSearch: () => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

const FilterKeywordsInput: React.FC<FilterKeywordProps> = ({
  label,
  value,
  handleChange,
  handleSearch
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <SearchInput
        name={label}
        value={value}
        placeholder="Keywords"
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
    </div>
  )
}

export default FilterKeywordsInput