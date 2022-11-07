import { Select } from 'antd';
import React, { useState } from 'react';

const OPTIONS = ['Hà Nội', 'Hồ Chí Minh', 'Bắc Giang', 'Bắc Ninh'];

const Filter: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

  return (
    <Select
      mode="multiple"
      placeholder="Tỉnh/Thành Phố"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{ width: '100%' }}
      options={filteredOptions.map(item => ({
        value: item,
        label: item,
      }))}
    />
  );
};

export default Filter;
