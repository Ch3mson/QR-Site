import QRCode from 'qrcode';
import { useState } from 'react';

function Generator () {
    const [url, seturl] = useState('');
    const [qrcode, setQrcode] = useState('');

    const GenerateQRCode = () => {
        QRCode.toDataURL(url, {
            width: 800,
            margin: 1.5,
        }, (err, url) => {
            if (err) return console.error(err)

            console.log(url)
            setQrcode(url)
        })
    }
    return (
        <div className="flex flex-col items-center p-3">
            <div className="flex justify-center w-full mb-4">
                <input 
                    type="text" 
                    className="mr-3 py-1 px-2 rounded bg-[#25234a] w-[20rem] text-white focus:outline-none focus:ring-2 focus:ring-[#444087]" 
                    placeholder="Enter URL here"
                    value={url}
                    onChange={(evt) => seturl(evt.target.value)}
                />
                <button 
                    onClick={GenerateQRCode}
                    className="py-1 px-2 rounded outline outline-offset-2 outline-[#2c2958] hover:outline-[#2c2958] bg-[#25234a] hover:bg-[#444087] "
                >
                    Generate
                </button>
            </div>

            {/* Render QR code only if it has a value */}
            {qrcode && (
                <a href={qrcode} download="qrcode.png">
                    <img 
                        className="object-contain w-[300px] h-[300px] outline outline-indigo-500 hover:outline-indigo-400 outline-7 mt-5"
                        src={qrcode}
                        alt="Generated QR Code"
                    />
                </a>
            )}
            
        </div>
    )
}

export default Generator;