import { Oval } from 'react-loader-spinner';


const OvalLoader = () => {

    return (
        <div className="col-span-4 flex items-center justify-center h-screen">
            <Oval
                height={50}
                width={50}
                color="#cccc"
                secondaryColor="#6c63ff"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    )
}
export default OvalLoader;