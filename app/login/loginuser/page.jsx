import { Roboto} from "next/font/google";
const roboto=Roboto({subsets:["latin"], weight:'900'})


const LoginUser = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Hello world</h1>
      <h1 className={roboto.className} >Hello world</h1>
    </div>
  )
}

export default LoginUser

export const generateMetadata = () => {return{ title:"LOGIN user"}}