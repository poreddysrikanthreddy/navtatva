import React, { useState } from "react";
import { Address } from "../../../network/gateway/Address";
import AddressList from "../common/AddressList";

const RenderAddressList = (props: any) => {
    let [showAddress, setShowAddress] = useState<boolean>(false);
    const [allAddress, setAllAddress] = useState<any>([]);
    let [fields, setField] = useState<any>({
        company_name: "",
        county: "Sunnyville",
        country: "INDIA",
    });

    let [addressFields, AddressFieldsetField] = useState<any>({
        type: "address",
        county: "Sunnyville",
        country: "IN",
    });
    const [address,] = useState<any>([
        {
            id: "2786812a-0bc9-4aaf-a73d-6799d5699876",
            type: "address",
            name: "",
            first_name: "chap",
            last_name: "Swanson",
            company_name: "",
            phone_number: "",
            line_1: "1 Sunny Street",
            line_2: "2342342",
            city: "Sunny Town",
            postcode: "SU33 1YY",
            county: "Sunnyville",
            region: "",
            country: "GB",
            instructions: "",
            links: {
                self: "https://api.moltin.com/v2/addresses/2786812a-0bc9-4aaf-a73d-6799d5699876",
            },
            meta: {
                timestamps: {
                    created_at: "2022-08-18T07:42:55.966Z",
                    updated_at: "2022-08-18T07:42:55.966Z",
                },
            },
        },
        {
            id: "2786812a-0bc9-4aaf-a73d-6799d5699876",
            type: "address",
            name: "",
            first_name: "chap",
            last_name: "Swanson",
            company_name: "",
            phone_number: "",
            line_1: "1 Sunny Street",
            line_2: "2342342",
            city: "Sunny Town",
            postcode: "SU33 1YY",
            county: "Sunnyville",
            region: "",
            country: "GB",
            instructions: "",
            links: {
                self: "https://api.moltin.com/v2/addresses/2786812a-0bc9-4aaf-a73d-6799d5699876",
            },
            meta: {
                timestamps: {
                    created_at: "2022-08-18T07:42:55.966Z",
                    updated_at: "2022-08-18T07:42:55.966Z",
                },
            },
        },
        {
            id: "2786812a-0bc9-4aaf-a73d-6799d5699876",
            type: "address",
            name: "",
            first_name: "chap",
            last_name: "Swanson",
            company_name: "",
            phone_number: "",
            line_1: "1 Sunny Street",
            line_2: "2342342",
            city: "Sunny Town",
            postcode: "SU33 1YY",
            county: "Sunnyville",
            region: "",
            country: "GB",
            instructions: "",
            links: {
                self: "https://api.moltin.com/v2/addresses/2786812a-0bc9-4aaf-a73d-6799d5699876",
            },
            meta: {
                timestamps: {
                    created_at: "2022-08-18T07:42:55.966Z",
                    updated_at: "2022-08-18T07:42:55.966Z",
                },
            },
        },
    ]);

    function deleteAddress(id: any, index: any) {
        //console.log("this is delete address",id,index)
        Address.getInstance()
            .deleteAddress(id)
            .then((response: any) => {
                if (response.statusText === "OK") {
                    // setStoreFiles([...prevFiles.slice(0, index), ...prevFiles.slice(index +
                    //   1)])
                    let newAllAddress = allAddress.data;
                    newAllAddress.splice(index, 1);
                    setAllAddress([...newAllAddress]);

                }
            });
        return (
            <AddressList
                isVisible={showAddress}
                data={allAddress.data}
                onClose={() => {
                    setShowAddress(false);
                }}
                onSelect={(id:any) => {
                    setShowAddress(false);
                    //console.log("this is index",id)
                    setField(allAddress.data[id])
                    console.log("this is array list ", fields)

                }}
                deleteAddress={deleteAddress}
            />
        )
    }
}
    export default RenderAddressList;