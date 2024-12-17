
interface VoucherData {

}

export const Voucher: React.FC<VoucherData> = ({ }) => {
    return <>
        <div className="rounded-xl shadow-md flex flex-col justify-center items-center bg-p-white transform hover:scale-105 hover:shadow-yellow-100 hover:shadow-[0_0_10px_rgba(255,255,0)]  transition duration-300 ease-in-out">
            <div className="w-full h-36 rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover" src="https://media.licdn.com/dms/image/v2/D5622AQH2RCK5XRFBJw/feedshare-shrink_800/feedshare-shrink_800/0/1722368599874?e=2147483647&v=beta&t=VXbump7AAu7g_bEytHyI_Unw9Xun09keYX9tVNBa3Hw" alt="Almonds Logo" />
            </div>
            <div className="py-4 px-4 w-full">
                {[
                    { key: "Counpon Code", value: "ABCDEFGH", isActivated: 0 },
                    { key: "Coupon PIN", value: "1234", isActivated: 1 },
                ].map((e) => {
                    return <div className="py-2 flex justify-between w-full">
                        <div className="text-black p-2 text-center font-poppins rounded-md">{e.key}:</div>
                        <div className="text-black bg-[#f0f0f0] p-2 text-center font-poppins rounded-md min-w-[120px]">{e.value}</div>
                    </div>
                })
                }
                <div className="grid place-items-center w-full">

                    {Math.floor(Math.random()) % 2 && <button className="text-green bg-[#f78f1e] p-2 text-center font-poppins rounded-md w-full border border-green hover:shadow-md">Redeem Now</button>}

                    {Math.floor(Math.random()) % 2 && <button className="text-[gray] bg-[#f0f0f0] p-2 text-center font-poppins rounded-md w-full border border-green hover:shadow-md">Activated</button>}

                </div>
            </div>

        </div>
    </>
}