/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
// import QrReader from 'react-qr-scanner'
// import {QrReader} from 'react-qr-reader';
import { Html5QrcodeScanner } from 'html5-qrcode';

import { useRouter } from 'next/navigation'
const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props) => {
    let config = {};
    if (props.fps) {
        config.fps = props.fps;
    }
    if (props.qrbox) {
        config.qrbox = props.qrbox;
    }
    if (props.aspectRatio) {
        config.aspectRatio = props.aspectRatio;
    }
    if (props.disableFlip !== undefined) {
        config.disableFlip = props.disableFlip;
    }
    return config;
};



const Html5QrcodePlugin = (props) => {

    useEffect(() => {
        // when component mounts
        const config = createConfig(props);
        const verbose = props.verbose === true;
        // Suceess callback is required.
        if (!(props.qrCodeSuccessCallback)) {
            throw "qrCodeSuccessCallback is required callback.";
        }
        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
        html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);

        // cleanup function when component will unmount
        return () => {
            html5QrcodeScanner.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
        };
    }, []);

    return (
        <div id={qrcodeRegionId} />
    );
};

const Page = () => {
    const router = useRouter()


    const [state, setState] = useState({
        delay: 1000,
        result: '',
    });

    const handleScan = (data) => {
        console.log(data);
        if (data) {
            setState({
                result: data,
            });
        }
    }
    const handleError = (err) => {
        console.error(err)
    }

    useEffect(() => {

        if (state.result) {
            localStorage.setItem('current_scanned', JSON.stringify(state.result));
            router.push('/signin')
        }

    }, [state])

    const onNewScanResult = (decodedText, decodedResult) => {
        // handle decoded results here
        console.log(decodedText, decodedResult);

        if (decodedText) {
            setState({
                result: data,
            });
        }
    };


    return (
        <div className="h-full flex flex-col">
            <div className="sm:mt-8">
                <Button onClick={() => router.push('/home')} variant="ghost" size="icon" className="hover:bg-gray-500 hover:text-gray-100 h-9">
                    <ChevronRight className="h-4 w-4 rotate-180" />
                </Button>
            </div>


            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />




            {/* <QrReader
            constraints={{ facingMode: 'user' } }
            onResult={(result, error) => {
            if (!!result) {
                console.log(result);
                // handleScan(result);
            }
    
            if (!!error) {
                console.info(error);
            }
            }}
           scanDelay={500}
          style={{ width: '100%', height: '100%' }}
          /> */}
            {" "}
        </div>
    );
};

export default Page;
