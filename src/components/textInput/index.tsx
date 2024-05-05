
import React, { ChangeEventHandler } from 'react';

type TextInputProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  title: string;
  placeholder?: string;
  isImportant?: boolean;
  type?: string;
  styles?: string;
  name?: string;
  pattern?: string;
  inputMode?: any;
  tooltipText?: string;
  value?: any;
  disabled?: boolean;
};

const TextInput = (props: TextInputProps) => {
  return (
    <div className="">
      <div className="flex pl-1 text-[#C5C7CA] text-sm">
        {props.title} 
      </div>
      <div className="mt-1.5">
        <input
          className={`bg-base-400 border border-base-300 text-base text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${props.styles}`}
          type={'text'}
          placeholder={props.placeholder || ''}
          onChange={props.onChange}
          name={props.name}
          pattern={props.pattern || ''}
          inputMode={props.inputMode || 'text'}
          value={props.value}
          disabled={props.disabled}
        />
      </div>
    </div>
  );
};

export default TextInput;
