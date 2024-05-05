import { AiOutlineLoading3Quarters as Loading } from "react-icons/ai";

interface ButtonProps {
  text: string;
  size: string;
  onClick: (event: any) => void;
  styles?: string;
  type?: string;
  isDisabled?: boolean;
  loading?: boolean;
  icon?: any;
}

export default function Button(props: ButtonProps) {
  const getSize = (size: string) => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-xs rounded active:scale-95';
      case 'md':
        return 'px-3 py-1.5 text-sm rounded-md active:scale-95';
      case 'lg':
        return 'px-4 py-2 text-base rounded-md active:scale-95';
      case 'xl':
        return 'px-4 py-2 text-lg rounded-md active:scale-95';
      default:
        return 'px-3 py-1.5 text-sm rounded-md active:scale-95';
    }
  };

  const getType = (type: string) => {
    switch (type) {
      case 'primary':
        return 'bg-blue-600 text-white font-semibold cursor-pointer';
      default:
        return 'bg-white text-slate-600 font-medium cursor-pointer';
    }
  };

  return (
    <button
      className={`flex text-center justify-center items-center align-middle 
      ${getSize(props.size)} 
      ${props.styles} 
      ${props.isDisabled ? getType('disabled') : getType(props.type || '')}`}
      onClick={props.onClick}
      disabled={props.isDisabled}>
      {props.loading ? (
        <>
          <Loading className="inline w-4 h-4 mr-3 text-white animate-spin" /> Loading...
        </>
      ) : (
        <div className="flex flex-row justify-around items-center gap-2 w-max">
          <span>{props.text}</span>
        </div>
      )}
    </button>
  );
}