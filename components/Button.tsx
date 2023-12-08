import Image from "next/image";

type ButtonProps ={
    type: 'button' | 'submit';
    title:string;
    icon?:string;
    variant:string;
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
return(
    <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}`} >
      {icon && <Image src={icon} alt="" width={24} height={24} />}
      
      <label htmlFor="">{title}</label>
                  
    </button>
)
}

export default Button