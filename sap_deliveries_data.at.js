// {Name: SAP_Deliveries_Data}
// {Description: SAP deliveries application, Data}

project.cats = [
    {
    "Category": "3262651d-36e6-452c-a0b4-41d15043db9d",
    "CategoryName": "Flat Screen Monitors",
    "MainCategory": "Computer components",
    "MainCategoryName": "Computer components",
    "NumberOfProducts": "9",
    "UpdatedTimestamp": null,
    "__metadata": {
        "id": "ProductCategories('3262651d-36e6-452c-a0b4-41d15043db9d')",
        "uri": "ProductCategories('3262651d-36e6-452c-a0b4-41d15043db9d')"
    }
}, {
    "Category": "8e631918-fd01-48f0-b61f-d1ba7cab0710",
    "CategoryName": "Speakers",
    "MainCategory": "Computer components",
    "MainCategoryName": "Computer components",
    "NumberOfProducts": "3",
    "UpdatedTimestamp": null,
    "__metadata": {
        "id": "ProductCategories('8e631918-fd01-48f0-b61f-d1ba7cab0710')",
        "uri": "ProductCategories('8e631918-fd01-48f0-b61f-d1ba7cab0710')"
    }
},
    {
        "Category": "99b282a8-fbca-412d-b32d-5ed66c94e039",
        "CategoryName": "Telecommunications",
        "MainCategory": "Computer components",
        "MainCategoryName": "Computer components",
        "NumberOfProducts": "3",
        "UpdatedTimestamp": null,
        "__metadata": {
            "id": "ProductCategories('99b282a8-fbca-412d-b32d-5ed66c94e039')",
            "uri": "ProductCategories('99b282a8-fbca-412d-b32d-5ed66c94e039')"
        }
    }, {
        "Category": "4b1c8466-e5fd-4721-a94d-1d750c3878b9",
        "CategoryName": "Chairs & Seating",
        "MainCategory": "Office Furniture",
        "MainCategoryName": "Office Furniture",
        "NumberOfProducts": "4",
        "UpdatedTimestamp": null,
        "__metadata": {
            "id": "ProductCategories('4b1c8466-e5fd-4721-a94d-1d750c3878b9')",
            "uri": "ProductCategories('4b1c8466-e5fd-4721-a94d-1d750c3878b9')"
        }
    }, {
        "Category": "c5f7a51c-c3a7-41ae-b228-220343a0ee08",
        "CategoryName": "Flat Screen TVs",
        "MainCategory": "TV, Video & HiFi",
        "MainCategoryName": "TV, Video & HiFi",
        "NumberOfProducts": "3",
        "UpdatedTimestamp": null,
        "__metadata": {
            "id": "ProductCategories('c5f7a51c-c3a7-41ae-b228-220343a0ee08')",
            "uri": "ProductCategories('c5f7a51c-c3a7-41ae-b228-220343a0ee08')"
        }
    }];

project.sups = [
    {
    "Street": "Piazza Adriana",
    "SupplierName": "ITelO",
    "PostalCode": "00164",
    "EmailAddress": "sally.spring@itelo.info",
    "PhoneNumber": "1029384758",
    "City": "Rome",
    "@entityType": "ESPM.Supplier",
    "Address": {
        "Street": "Piazza Adriana",
        "@complexType": "ESPM.Address",
        "@data": {
            "@isReference": "false"
        },
        "PostalCode": "00164",
        "HouseNumber": "53",
        "Country": "IT",
        "City": "Rome"
    },
    "@readLink": "Suppliers('f0852775-275e-4026-b243-5d708a316c57')",
    "@data": {
        "@isReference": "false"
    },
    "SupplierId": "f0852775-275e-4026-b243-5d708a316c57",
    "PurchaseOrders": {
        "@isReference": true,
        "@changedLinksPart2": [],
        "@readLink": "Suppliers('f0852775-275e-4026-b243-5d708a316c57')\/PurchaseOrders",
        "@innerEntityType": "ESPM.PurchaseOrderHeader",
        "@values": [],
        "@changedLinksPart1": []
    },
    "@key": 0,
    "Country": "IT",
    "@oldEntity": {
        "@entityType": "ESPM.Supplier",
        "Street": "Piazza Adriana",
        "EmailAddress": "sally.spring@itelo.info",
        "HouseNumber": "53",
        "@key": 0,
        "@set": "ESPM.ESPMContainer\/Suppliers",
        "SupplierName": "ITelO",
        "@systemFlags": 0,
        "@data": {
            "@isReference": "false"
        },
        "SupplierId": "f0852775-275e-4026-b243-5d708a316c57",
        "Address": {
            "Street": "Piazza Adriana",
            "@complexType": "ESPM.Address",
            "@data": {
                "@isReference": "false"
            },
            "PostalCode": "00164",
            "HouseNumber": "53",
            "Country": "IT",
            "City": "Rome"
        },
        "PhoneNumber": "1029384758",
        "PostalCode": "00164",
        "Country": "IT",
        "City": "Rome"
    },
    "@entityID": "Suppliers('f0852775-275e-4026-b243-5d708a316c57')",
    "@systemFlags": 0,
    "@set": "ESPM.ESPMContainer\/Suppliers",
    "Products": {
        "@isReference": true,
        "@changedLinksPart2": [],
        "@readLink": "Suppliers('f0852775-275e-4026-b243-5d708a316c57')\/Products",
        "@innerEntityType": "ESPM.Product",
        "@values": [],
        "@changedLinksPart1": []
    },
    "@editLink": "Suppliers('f0852775-275e-4026-b243-5d708a316c57')",
    "HouseNumber": "53"
},
    {
        "Street": "Spring Garden Street",
        "SupplierName": "ITelO",
        "PostalCode": "60002",
        "EmailAddress": "viola.gains@itelo.info",
        "PhoneNumber": "1029384756",
        "City": "Antioch, Illinois",
        "@entityType": "ESPM.Supplier",
        "Address": {
            "Street": "Spring Garden Street",
            "@complexType": "ESPM.Address",
            "@data": {
                "@isReference": "false"
            },
            "PostalCode": "60002",
            "HouseNumber": "143",
            "Country": "US",
            "City": "Antioch, Illinois"
        },
        "@readLink": "Suppliers('0b8357de-0b27-477f-b2f8-e3d05ba766b3')",
        "@data": {
            "@isReference": "false"
        },
        "SupplierId": "0b8357de-0b27-477f-b2f8-e3d05ba766b3",
        "PurchaseOrders": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('0b8357de-0b27-477f-b2f8-e3d05ba766b3')\/PurchaseOrders",
            "@innerEntityType": "ESPM.PurchaseOrderHeader",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@key": 0,
        "Country": "US",
        "@oldEntity": {
            "@entityType": "ESPM.Supplier",
            "Street": "Spring Garden Street",
            "EmailAddress": "viola.gains@itelo.info",
            "HouseNumber": "143",
            "@key": 0,
            "@set": "ESPM.ESPMContainer\/Suppliers",
            "SupplierName": "ITelO",
            "@systemFlags": 0,
            "@data": {
                "@isReference": "false"
            },
            "SupplierId": "0b8357de-0b27-477f-b2f8-e3d05ba766b3",
            "Address": {
                "Street": "Spring Garden Street",
                "@complexType": "ESPM.Address",
                "@data": {
                    "@isReference": "false"
                },
                "PostalCode": "60002",
                "HouseNumber": "143",
                "Country": "US",
                "City": "Antioch, Illinois"
            },
            "PhoneNumber": "1029384756",
            "PostalCode": "60002",
            "Country": "US",
            "City": "Antioch, Illinois"
        },
        "@entityID": "Suppliers('0b8357de-0b27-477f-b2f8-e3d05ba766b3')",
        "@systemFlags": 0,
        "@set": "ESPM.ESPMContainer\/Suppliers",
        "Products": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('0b8357de-0b27-477f-b2f8-e3d05ba766b3')\/Products",
            "@innerEntityType": "ESPM.Product",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@editLink": "Suppliers('0b8357de-0b27-477f-b2f8-e3d05ba766b3')",
        "HouseNumber": "143"
    },
    {
        "Street": "Main Street",
        "SupplierName": "ITelO",
        "PostalCode": "90067",
        "EmailAddress": "paul.burke@itelo.info",
        "PhoneNumber": "1029384757",
        "City": "Los Angeles, California",
        "@entityType": "ESPM.Supplier",
        "Address": {
            "Street": "Main Street",
            "@complexType": "ESPM.Address",
            "@data": {
                "@isReference": "false"
            },
            "PostalCode": "90067",
            "HouseNumber": "100",
            "Country": "US",
            "City": "Los Angeles, California"
        },
        "@readLink": "Suppliers('4aa01199-5e1d-4f6a-93d0-bbe4a2021cbd')",
        "@data": {
            "@isReference": "false"
        },
        "SupplierId": "4aa01199-5e1d-4f6a-93d0-bbe4a2021cbd",
        "PurchaseOrders": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('4aa01199-5e1d-4f6a-93d0-bbe4a2021cbd')\/PurchaseOrders",
            "@innerEntityType": "ESPM.PurchaseOrderHeader",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@key": 0,
        "Country": "US",
        "@oldEntity": {
            "@entityType": "ESPM.Supplier",
            "Street": "Main Street",
            "EmailAddress": "paul.burke@itelo.info",
            "HouseNumber": "100",
            "@key": 0,
            "@set": "ESPM.ESPMContainer\/Suppliers",
            "SupplierName": "ITelO",
            "@systemFlags": 0,
            "@data": {
                "@isReference": "false"
            },
            "SupplierId": "4aa01199-5e1d-4f6a-93d0-bbe4a2021cbd",
            "Address": {
                "Street": "Main Street",
                "@complexType": "ESPM.Address",
                "@data": {
                    "@isReference": "false"
                },
                "PostalCode": "90067",
                "HouseNumber": "100",
                "Country": "US",
                "City": "Los Angeles, California"
            },
            "PhoneNumber": "1029384757",
            "PostalCode": "90067",
            "Country": "US",
            "City": "Los Angeles, California"
        },
        "@entityID": "Suppliers('4aa01199-5e1d-4f6a-93d0-bbe4a2021cbd')",
        "@systemFlags": 0,
        "@set": "ESPM.ESPMContainer\/Suppliers",
        "Products": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('4aa01199-5e1d-4f6a-93d0-bbe4a2021cbd')\/Products",
            "@innerEntityType": "ESPM.Product",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@editLink": "Suppliers('4aa01199-5e1d-4f6a-93d0-bbe4a2021cbd')",
        "HouseNumber": "100"
    },
    {
        "Street": "Zabel-Krüger-Damm",
        "SupplierName": "Becker Berlin",
        "PostalCode": "13467",
        "EmailAddress": "dagmar.schulze@beckerberlin.de",
        "PhoneNumber": "3088530",
        "City": "Berlin",
        "@entityType": "ESPM.Supplier",
        "Address": {
            "Street": "Zabel-Krüger-Damm",
            "@complexType": "ESPM.Address",
            "@data": {
                "@isReference": "false"
            },
            "PostalCode": "13467",
            "HouseNumber": "127",
            "Country": "DE",
            "City": "Berlin"
        },
        "@readLink": "Suppliers('81f2a7dd-9ed7-4b0e-9f17-3b70c3e553fb')",
        "@data": {
            "@isReference": "false"
        },
        "SupplierId": "81f2a7dd-9ed7-4b0e-9f17-3b70c3e553fb",
        "PurchaseOrders": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('81f2a7dd-9ed7-4b0e-9f17-3b70c3e553fb')\/PurchaseOrders",
            "@innerEntityType": "ESPM.PurchaseOrderHeader",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@key": 0,
        "Country": "DE",
        "@oldEntity": {
            "@entityType": "ESPM.Supplier",
            "Street": "Zabel-Krüger-Damm",
            "EmailAddress": "dagmar.schulze@beckerberlin.de",
            "HouseNumber": "127",
            "@key": 0,
            "@set": "ESPM.ESPMContainer\/Suppliers",
            "SupplierName": "Becker Berlin",
            "@systemFlags": 0,
            "@data": {
                "@isReference": "false"
            },
            "SupplierId": "81f2a7dd-9ed7-4b0e-9f17-3b70c3e553fb",
            "Address": {
                "Street": "Zabel-Krüger-Damm",
                "@complexType": "ESPM.Address",
                "@data": {
                    "@isReference": "false"
                },
                "PostalCode": "13467",
                "HouseNumber": "127",
                "Country": "DE",
                "City": "Berlin"
            },
            "PhoneNumber": "3088530",
            "PostalCode": "13467",
            "Country": "DE",
            "City": "Berlin"
        },
        "@entityID": "Suppliers('81f2a7dd-9ed7-4b0e-9f17-3b70c3e553fb')",
        "@systemFlags": 0,
        "@set": "ESPM.ESPMContainer\/Suppliers",
        "Products": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('81f2a7dd-9ed7-4b0e-9f17-3b70c3e553fb')\/Products",
            "@innerEntityType": "ESPM.Product",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@editLink": "Suppliers('81f2a7dd-9ed7-4b0e-9f17-3b70c3e553fb')",
        "HouseNumber": "127"
    },
    {
        "Street": "Jett Ferry Rd",
        "SupplierName": "Pear Computing Services",
        "PostalCode": "30350",
        "EmailAddress": "franklin.jones@pear-computing.com",
        "PhoneNumber": "6789012345",
        "City": "Atlanta, Georgia",
        "@entityType": "ESPM.Supplier",
        "Address": {
            "Street": "Jett Ferry Rd",
            "@complexType": "ESPM.Address",
            "@data": {
                "@isReference": "false"
            },
            "PostalCode": "30350",
            "HouseNumber": "8315",
            "Country": "US",
            "City": "Atlanta, Georgia"
        },
        "@readLink": "Suppliers('8f02dd8c-3f53-4497-ab50-56685a95d576')",
        "@data": {
            "@isReference": "false"
        },
        "SupplierId": "8f02dd8c-3f53-4497-ab50-56685a95d576",
        "PurchaseOrders": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('8f02dd8c-3f53-4497-ab50-56685a95d576')\/PurchaseOrders",
            "@innerEntityType": "ESPM.PurchaseOrderHeader",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@key": 0,
        "Country": "US",
        "@oldEntity": {
            "@entityType": "ESPM.Supplier",
            "Street": "Jett Ferry Rd",
            "EmailAddress": "franklin.jones@pear-computing.com",
            "HouseNumber": "8315",
            "@key": 0,
            "@set": "ESPM.ESPMContainer\/Suppliers",
            "SupplierName": "Pear Computing Services",
            "@systemFlags": 0,
            "@data": {
                "@isReference": "false"
            },
            "SupplierId": "8f02dd8c-3f53-4497-ab50-56685a95d576",
            "Address": {
                "Street": "Jett Ferry Rd",
                "@complexType": "ESPM.Address",
                "@data": {
                    "@isReference": "false"
                },
                "PostalCode": "30350",
                "HouseNumber": "8315",
                "Country": "US",
                "City": "Atlanta, Georgia"
            },
            "PhoneNumber": "6789012345",
            "PostalCode": "30350",
            "Country": "US",
            "City": "Atlanta, Georgia"
        },
        "@entityID": "Suppliers('8f02dd8c-3f53-4497-ab50-56685a95d576')",
        "@systemFlags": 0,
        "@set": "ESPM.ESPMContainer\/Suppliers",
        "Products": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('8f02dd8c-3f53-4497-ab50-56685a95d576')\/Products",
            "@innerEntityType": "ESPM.Product",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@editLink": "Suppliers('8f02dd8c-3f53-4497-ab50-56685a95d576')",
        "HouseNumber": "8315"
    },
    {
        "Street": "Elektrozavodskaya ulitsa",
        "SupplierName": "Russian Electronic Trading Company",
        "PostalCode": "190008",
        "EmailAddress": "igor.tarassow@retc.ru",
        "PhoneNumber": "4050378468",
        "City": "Sankt-Peterburg",
        "@entityType": "ESPM.Supplier",
        "Address": {
            "Street": "Elektrozavodskaya ulitsa",
            "@complexType": "ESPM.Address",
            "@data": {
                "@isReference": "false"
            },
            "PostalCode": "190008",
            "HouseNumber": "38",
            "Country": "RU",
            "City": "Sankt-Peterburg"
        },
        "@readLink": "Suppliers('83903818-f461-4435-95ec-6f05e0adec78')",
        "@data": {
            "@isReference": "false"
        },
        "SupplierId": "83903818-f461-4435-95ec-6f05e0adec78",
        "PurchaseOrders": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('83903818-f461-4435-95ec-6f05e0adec78')\/PurchaseOrders",
            "@innerEntityType": "ESPM.PurchaseOrderHeader",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@key": 0,
        "Country": "RU",
        "@oldEntity": {
            "@entityType": "ESPM.Supplier",
            "Street": "Elektrozavodskaya ulitsa",
            "EmailAddress": "igor.tarassow@retc.ru",
            "HouseNumber": "38",
            "@key": 0,
            "@set": "ESPM.ESPMContainer\/Suppliers",
            "SupplierName": "Russian Electronic Trading Company",
            "@systemFlags": 0,
            "@data": {
                "@isReference": "false"
            },
            "SupplierId": "83903818-f461-4435-95ec-6f05e0adec78",
            "Address": {
                "Street": "Elektrozavodskaya ulitsa",
                "@complexType": "ESPM.Address",
                "@data": {
                    "@isReference": "false"
                },
                "PostalCode": "190008",
                "HouseNumber": "38",
                "Country": "RU",
                "City": "Sankt-Peterburg"
            },
            "PhoneNumber": "4050378468",
            "PostalCode": "190008",
            "Country": "RU",
            "City": "Sankt-Peterburg"
        },
        "@entityID": "Suppliers('83903818-f461-4435-95ec-6f05e0adec78')",
        "@systemFlags": 0,
        "@set": "ESPM.ESPMContainer\/Suppliers",
        "Products": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('83903818-f461-4435-95ec-6f05e0adec78')\/Products",
            "@innerEntityType": "ESPM.Product",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@editLink": "Suppliers('83903818-f461-4435-95ec-6f05e0adec78')",
        "HouseNumber": "38"
    },
    {
        "Street": "Rue McGill",
        "SupplierName": "C.R.T.U.",
        "PostalCode": "QCH2Y3Z7",
        "EmailAddress": "anthony.lebouef@crtu.ca",
        "PhoneNumber": "6839542781",
        "City": "Montreal",
        "@entityType": "ESPM.Supplier",
        "Address": {
            "Street": "Rue McGill",
            "@complexType": "ESPM.Address",
            "@data": {
                "@isReference": "false"
            },
            "PostalCode": "QCH2Y3Z7",
            "HouseNumber": "32",
            "Country": "CA",
            "City": "Montreal"
        },
        "@readLink": "Suppliers('df144c46-ef38-48a9-bccf-7278ee4ea5ff')",
        "@data": {
            "@isReference": "false"
        },
        "SupplierId": "df144c46-ef38-48a9-bccf-7278ee4ea5ff",
        "PurchaseOrders": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('df144c46-ef38-48a9-bccf-7278ee4ea5ff')\/PurchaseOrders",
            "@innerEntityType": "ESPM.PurchaseOrderHeader",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@key": 0,
        "Country": "CA",
        "@oldEntity": {
            "@entityType": "ESPM.Supplier",
            "Street": "Rue McGill",
            "EmailAddress": "anthony.lebouef@crtu.ca",
            "HouseNumber": "32",
            "@key": 0,
            "@set": "ESPM.ESPMContainer\/Suppliers",
            "SupplierName": "C.R.T.U.",
            "@systemFlags": 0,
            "@data": {
                "@isReference": "false"
            },
            "SupplierId": "df144c46-ef38-48a9-bccf-7278ee4ea5ff",
            "Address": {
                "Street": "Rue McGill",
                "@complexType": "ESPM.Address",
                "@data": {
                    "@isReference": "false"
                },
                "PostalCode": "QCH2Y3Z7",
                "HouseNumber": "32",
                "Country": "CA",
                "City": "Montreal"
            },
            "PhoneNumber": "6839542781",
            "PostalCode": "QCH2Y3Z7",
            "Country": "CA",
            "City": "Montreal"
        },
        "@entityID": "Suppliers('df144c46-ef38-48a9-bccf-7278ee4ea5ff')",
        "@systemFlags": 0,
        "@set": "ESPM.ESPMContainer\/Suppliers",
        "Products": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('df144c46-ef38-48a9-bccf-7278ee4ea5ff')\/Products",
            "@innerEntityType": "ESPM.Product",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@editLink": "Suppliers('df144c46-ef38-48a9-bccf-7278ee4ea5ff')",
        "HouseNumber": "32"
    },
    {
        "Street": "Mission Rd",
        "SupplierName": "Indian IT Trading Company",
        "PostalCode": "560027",
        "EmailAddress": "sunita-kapoor@it-trade.in",
        "PhoneNumber": "4203876954",
        "City": "Bangalore",
        "@entityType": "ESPM.Supplier",
        "Address": {
            "Street": "Mission Rd",
            "@complexType": "ESPM.Address",
            "@data": {
                "@isReference": "false"
            },
            "PostalCode": "560027",
            "HouseNumber": "70",
            "Country": "IN",
            "City": "Bangalore"
        },
        "@readLink": "Suppliers('5969471d-449f-4951-bdee-b963f9c6e589')",
        "@data": {
            "@isReference": "false"
        },
        "SupplierId": "5969471d-449f-4951-bdee-b963f9c6e589",
        "PurchaseOrders": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('5969471d-449f-4951-bdee-b963f9c6e589')\/PurchaseOrders",
            "@innerEntityType": "ESPM.PurchaseOrderHeader",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@key": 0,
        "Country": "IN",
        "@oldEntity": {
            "@entityType": "ESPM.Supplier",
            "Street": "Mission Rd",
            "EmailAddress": "sunita-kapoor@it-trade.in",
            "HouseNumber": "70",
            "@key": 0,
            "@set": "ESPM.ESPMContainer\/Suppliers",
            "SupplierName": "Indian IT Trading Company",
            "@systemFlags": 0,
            "@data": {
                "@isReference": "false"
            },
            "SupplierId": "5969471d-449f-4951-bdee-b963f9c6e589",
            "Address": {
                "Street": "Mission Rd",
                "@complexType": "ESPM.Address",
                "@data": {
                    "@isReference": "false"
                },
                "PostalCode": "560027",
                "HouseNumber": "70",
                "Country": "IN",
                "City": "Bangalore"
            },
            "PhoneNumber": "4203876954",
            "PostalCode": "560027",
            "Country": "IN",
            "City": "Bangalore"
        },
        "@entityID": "Suppliers('5969471d-449f-4951-bdee-b963f9c6e589')",
        "@systemFlags": 0,
        "@set": "ESPM.ESPMContainer\/Suppliers",
        "Products": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('5969471d-449f-4951-bdee-b963f9c6e589')\/Products",
            "@innerEntityType": "ESPM.Product",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@editLink": "Suppliers('5969471d-449f-4951-bdee-b963f9c6e589')",
        "HouseNumber": "70"
    },
    {
        "Street": "Zwycięstwa",
        "SupplierName": "Chemia A Technicznie Fabryka",
        "PostalCode": "44-100",
        "EmailAddress": "pawel-lewandoski@catf.pl",
        "PhoneNumber": "8367920106",
        "City": "Gliwice",
        "@entityType": "ESPM.Supplier",
        "Address": {
            "Street": "Zwycięstwa",
            "@complexType": "ESPM.Address",
            "@data": {
                "@isReference": "false"
            },
            "PostalCode": "44-100",
            "HouseNumber": "48B",
            "Country": "PL",
            "City": "Gliwice"
        },
        "@readLink": "Suppliers('265162e3-cb05-4e8d-b03d-209eb2c71dc0')",
        "@data": {
            "@isReference": "false"
        },
        "SupplierId": "265162e3-cb05-4e8d-b03d-209eb2c71dc0",
        "PurchaseOrders": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('265162e3-cb05-4e8d-b03d-209eb2c71dc0')\/PurchaseOrders",
            "@innerEntityType": "ESPM.PurchaseOrderHeader",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@key": 0,
        "Country": "PL",
        "@oldEntity": {
            "@entityType": "ESPM.Supplier",
            "Street": "Zwycięstwa",
            "EmailAddress": "pawel-lewandoski@catf.pl",
            "HouseNumber": "48B",
            "@key": 0,
            "@set": "ESPM.ESPMContainer\/Suppliers",
            "SupplierName": "Chemia A Technicznie Fabryka",
            "@systemFlags": 0,
            "@data": {
                "@isReference": "false"
            },
            "SupplierId": "265162e3-cb05-4e8d-b03d-209eb2c71dc0",
            "Address": {
                "Street": "Zwycięstwa",
                "@complexType": "ESPM.Address",
                "@data": {
                    "@isReference": "false"
                },
                "PostalCode": "44-100",
                "HouseNumber": "48B",
                "Country": "PL",
                "City": "Gliwice"
            },
            "PhoneNumber": "8367920106",
            "PostalCode": "44-100",
            "Country": "PL",
            "City": "Gliwice"
        },
        "@entityID": "Suppliers('265162e3-cb05-4e8d-b03d-209eb2c71dc0')",
        "@systemFlags": 0,
        "@set": "ESPM.ESPMContainer\/Suppliers",
        "Products": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('265162e3-cb05-4e8d-b03d-209eb2c71dc0')\/Products",
            "@innerEntityType": "ESPM.Product",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@editLink": "Suppliers('265162e3-cb05-4e8d-b03d-209eb2c71dc0')",
        "HouseNumber": "48B"
    },
    {
        "Street": "Gründelbachstraße",
        "SupplierName": "Hauptbüro",
        "PostalCode": "71691",
        "PhoneNumber": "13602463585",
        "City": "Freiberg a. N.",
        "@entityType": "ESPM.Supplier",
        "Address": {
            "Street": "Gründelbachstraße",
            "@complexType": "ESPM.Address",
            "@data": {
                "@isReference": "false"
            },
            "PostalCode": "71691",
            "HouseNumber": "10",
            "Country": "DE",
            "City": "Freiberg a. N."
        },
        "@readLink": "Suppliers('691725f0-4b4b-468f-8126-4db3a4e72203')",
        "@data": {
            "@isReference": "false"
        },
        "SupplierId": "691725f0-4b4b-468f-8126-4db3a4e72203",
        "PurchaseOrders": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('691725f0-4b4b-468f-8126-4db3a4e72203')\/PurchaseOrders",
            "@innerEntityType": "ESPM.PurchaseOrderHeader",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@key": 0,
        "Country": "DE",
        "@oldEntity": {
            "@entityType": "ESPM.Supplier",
            "Street": "Gründelbachstraße",
            "HouseNumber": "10",
            "@set": "ESPM.ESPMContainer\/Suppliers",
            "@key": 0,
            "SupplierName": "Hauptbüro",
            "@systemFlags": 0,
            "@data": {
                "@isReference": "false"
            },
            "SupplierId": "691725f0-4b4b-468f-8126-4db3a4e72203",
            "Address": {
                "Street": "Gründelbachstraße",
                "@complexType": "ESPM.Address",
                "@data": {
                    "@isReference": "false"
                },
                "PostalCode": "71691",
                "HouseNumber": "10",
                "Country": "DE",
                "City": "Freiberg a. N."
            },
            "PhoneNumber": "13602463585",
            "PostalCode": "71691",
            "Country": "DE",
            "City": "Freiberg a. N."
        },
        "@entityID": "Suppliers('691725f0-4b4b-468f-8126-4db3a4e72203')",
        "@systemFlags": 0,
        "@set": "ESPM.ESPMContainer\/Suppliers",
        "Products": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('691725f0-4b4b-468f-8126-4db3a4e72203')\/Products",
            "@innerEntityType": "ESPM.Product",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@editLink": "Suppliers('691725f0-4b4b-468f-8126-4db3a4e72203')",
        "HouseNumber": "10"
    },
    {
        "Street": "Ul. Woloska",
        "SupplierName": "POLirado",
        "PostalCode": "02-675",
        "PhoneNumber": "58837752208",
        "City": "Warszawa",
        "@entityType": "ESPM.Supplier",
        "Address": {
            "Street": "Ul. Woloska",
            "@complexType": "ESPM.Address",
            "@data": {
                "@isReference": "false"
            },
            "PostalCode": "02-675",
            "HouseNumber": "5",
            "Country": "PL",
            "City": "Warszawa"
        },
        "@readLink": "Suppliers('2b1b1348-f60d-4df3-b615-6a1d3da7cf50')",
        "@data": {
            "@isReference": "false"
        },
        "SupplierId": "2b1b1348-f60d-4df3-b615-6a1d3da7cf50",
        "PurchaseOrders": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('2b1b1348-f60d-4df3-b615-6a1d3da7cf50')\/PurchaseOrders",
            "@innerEntityType": "ESPM.PurchaseOrderHeader",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@key": 0,
        "Country": "PL",
        "@oldEntity": {
            "@entityType": "ESPM.Supplier",
            "Street": "Ul. Woloska",
            "HouseNumber": "5",
            "@set": "ESPM.ESPMContainer\/Suppliers",
            "@key": 0,
            "SupplierName": "POLirado",
            "@systemFlags": 0,
            "@data": {
                "@isReference": "false"
            },
            "SupplierId": "2b1b1348-f60d-4df3-b615-6a1d3da7cf50",
            "Address": {
                "Street": "Ul. Woloska",
                "@complexType": "ESPM.Address",
                "@data": {
                    "@isReference": "false"
                },
                "PostalCode": "02-675",
                "HouseNumber": "5",
                "Country": "PL",
                "City": "Warszawa"
            },
            "PhoneNumber": "58837752208",
            "PostalCode": "02-675",
            "Country": "PL",
            "City": "Warszawa"
        },
        "@entityID": "Suppliers('2b1b1348-f60d-4df3-b615-6a1d3da7cf50')",
        "@systemFlags": 0,
        "@set": "ESPM.ESPMContainer\/Suppliers",
        "Products": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('2b1b1348-f60d-4df3-b615-6a1d3da7cf50')\/Products",
            "@innerEntityType": "ESPM.Product",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@editLink": "Suppliers('2b1b1348-f60d-4df3-b615-6a1d3da7cf50')",
        "HouseNumber": "5"
    },
    {
        "Street": "2601 Westheimer Road",
        "SupplierName": "FamousUS",
        "PostalCode": "TX 77098",
        "PhoneNumber": "4612001085",
        "City": "Houston",
        "@entityType": "ESPM.Supplier",
        "Address": {
            "Street": "2601 Westheimer Road",
            "@complexType": "ESPM.Address",
            "@data": {
                "@isReference": "false"
            },
            "PostalCode": "TX 77098",
            "HouseNumber": "Suite C250",
            "Country": "US",
            "City": "Houston"
        },
        "@readLink": "Suppliers('6a691f37-2da6-4f42-b973-db5eea069ebe')",
        "@data": {
            "@isReference": "false"
        },
        "SupplierId": "6a691f37-2da6-4f42-b973-db5eea069ebe",
        "PurchaseOrders": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('6a691f37-2da6-4f42-b973-db5eea069ebe')\/PurchaseOrders",
            "@innerEntityType": "ESPM.PurchaseOrderHeader",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@key": 0,
        "Country": "US",
        "@oldEntity": {
            "@entityType": "ESPM.Supplier",
            "Street": "2601 Westheimer Road",
            "HouseNumber": "Suite C250",
            "@set": "ESPM.ESPMContainer\/Suppliers",
            "@key": 0,
            "SupplierName": "FamousUS",
            "@systemFlags": 0,
            "@data": {
                "@isReference": "false"
            },
            "SupplierId": "6a691f37-2da6-4f42-b973-db5eea069ebe",
            "Address": {
                "Street": "2601 Westheimer Road",
                "@complexType": "ESPM.Address",
                "@data": {
                    "@isReference": "false"
                },
                "PostalCode": "TX 77098",
                "HouseNumber": "Suite C250",
                "Country": "US",
                "City": "Houston"
            },
            "PhoneNumber": "4612001085",
            "PostalCode": "TX 77098",
            "Country": "US",
            "City": "Houston"
        },
        "@entityID": "Suppliers('6a691f37-2da6-4f42-b973-db5eea069ebe')",
        "@systemFlags": 0,
        "@set": "ESPM.ESPMContainer\/Suppliers",
        "Products": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('6a691f37-2da6-4f42-b973-db5eea069ebe')\/Products",
            "@innerEntityType": "ESPM.Product",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@editLink": "Suppliers('6a691f37-2da6-4f42-b973-db5eea069ebe')",
        "HouseNumber": "Suite C250"
    },
    {
        "Street": "City View Plaza",
        "SupplierName": "OffiPOR",
        "PostalCode": "PR 00968",
        "PhoneNumber": "63138515864",
        "City": "Guaynabo",
        "@entityType": "ESPM.Supplier",
        "Address": {
            "Street": "City View Plaza",
            "@complexType": "ESPM.Address",
            "@data": {
                "@isReference": "false"
            },
            "PostalCode": "PR 00968",
            "HouseNumber": "301",
            "Country": "PR",
            "City": "Guaynabo"
        },
        "@readLink": "Suppliers('23b27a76-cf95-4ab1-9d59-fde29b8e6d4e')",
        "@data": {
            "@isReference": "false"
        },
        "SupplierId": "23b27a76-cf95-4ab1-9d59-fde29b8e6d4e",
        "PurchaseOrders": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('23b27a76-cf95-4ab1-9d59-fde29b8e6d4e')\/PurchaseOrders",
            "@innerEntityType": "ESPM.PurchaseOrderHeader",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@key": 0,
        "Country": "PR",
        "@oldEntity": {
            "@entityType": "ESPM.Supplier",
            "Street": "City View Plaza",
            "HouseNumber": "301",
            "@set": "ESPM.ESPMContainer\/Suppliers",
            "@key": 0,
            "SupplierName": "OffiPOR",
            "@systemFlags": 0,
            "@data": {
                "@isReference": "false"
            },
            "SupplierId": "23b27a76-cf95-4ab1-9d59-fde29b8e6d4e",
            "Address": {
                "Street": "City View Plaza",
                "@complexType": "ESPM.Address",
                "@data": {
                    "@isReference": "false"
                },
                "PostalCode": "PR 00968",
                "HouseNumber": "301",
                "Country": "PR",
                "City": "Guaynabo"
            },
            "PhoneNumber": "63138515864",
            "PostalCode": "PR 00968",
            "Country": "PR",
            "City": "Guaynabo"
        },
        "@entityID": "Suppliers('23b27a76-cf95-4ab1-9d59-fde29b8e6d4e')",
        "@systemFlags": 0,
        "@set": "ESPM.ESPMContainer\/Suppliers",
        "Products": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('23b27a76-cf95-4ab1-9d59-fde29b8e6d4e')\/Products",
            "@innerEntityType": "ESPM.Product",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@editLink": "Suppliers('23b27a76-cf95-4ab1-9d59-fde29b8e6d4e')",
        "HouseNumber": "301"
    },
    {
        "Street": "Birlenbacher Str.",
        "SupplierName": "Büro-Guru AG",
        "PostalCode": "57078",
        "PhoneNumber": "20772209547",
        "City": "Siegen",
        "@entityType": "ESPM.Supplier",
        "Address": {
            "Street": "Birlenbacher Str.",
            "@complexType": "ESPM.Address",
            "@data": {
                "@isReference": "false"
            },
            "PostalCode": "57078",
            "HouseNumber": "19-21",
            "Country": "DE",
            "City": "Siegen"
        },
        "@readLink": "Suppliers('7b597b00-49b9-483f-a098-7f90c2cb0450')",
        "@data": {
            "@isReference": "false"
        },
        "SupplierId": "7b597b00-49b9-483f-a098-7f90c2cb0450",
        "PurchaseOrders": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('7b597b00-49b9-483f-a098-7f90c2cb0450')\/PurchaseOrders",
            "@innerEntityType": "ESPM.PurchaseOrderHeader",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@key": 0,
        "Country": "DE",
        "@oldEntity": {
            "@entityType": "ESPM.Supplier",
            "Street": "Birlenbacher Str.",
            "HouseNumber": "19-21",
            "@set": "ESPM.ESPMContainer\/Suppliers",
            "@key": 0,
            "SupplierName": "Büro-Guru AG",
            "@systemFlags": 0,
            "@data": {
                "@isReference": "false"
            },
            "SupplierId": "7b597b00-49b9-483f-a098-7f90c2cb0450",
            "Address": {
                "Street": "Birlenbacher Str.",
                "@complexType": "ESPM.Address",
                "@data": {
                    "@isReference": "false"
                },
                "PostalCode": "57078",
                "HouseNumber": "19-21",
                "Country": "DE",
                "City": "Siegen"
            },
            "PhoneNumber": "20772209547",
            "PostalCode": "57078",
            "Country": "DE",
            "City": "Siegen"
        },
        "@entityID": "Suppliers('7b597b00-49b9-483f-a098-7f90c2cb0450')",
        "@systemFlags": 0,
        "@set": "ESPM.ESPMContainer\/Suppliers",
        "Products": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('7b597b00-49b9-483f-a098-7f90c2cb0450')\/Products",
            "@innerEntityType": "ESPM.Product",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@editLink": "Suppliers('7b597b00-49b9-483f-a098-7f90c2cb0450')",
        "HouseNumber": "19-21"
    },
    {
        "Street": "Vyskocilova",
        "SupplierName": "Office Line Prag",
        "PostalCode": "140 00",
        "PhoneNumber": "39947387923",
        "City": "Praha",
        "@entityType": "ESPM.Supplier",
        "Address": {
            "Street": "Vyskocilova",
            "@complexType": "ESPM.Address",
            "@data": {
                "@isReference": "false"
            },
            "PostalCode": "140 00",
            "HouseNumber": "1481\/4",
            "Country": "CZ",
            "City": "Praha"
        },
        "@readLink": "Suppliers('90fe96c1-53ed-4c78-9d15-f17d53813760')",
        "@data": {
            "@isReference": "false"
        },
        "SupplierId": "90fe96c1-53ed-4c78-9d15-f17d53813760",
        "PurchaseOrders": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('90fe96c1-53ed-4c78-9d15-f17d53813760')\/PurchaseOrders",
            "@innerEntityType": "ESPM.PurchaseOrderHeader",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@key": 0,
        "Country": "CZ",
        "@oldEntity": {
            "@entityType": "ESPM.Supplier",
            "Street": "Vyskocilova",
            "HouseNumber": "1481\/4",
            "@set": "ESPM.ESPMContainer\/Suppliers",
            "@key": 0,
            "SupplierName": "Office Line Prag",
            "@systemFlags": 0,
            "@data": {
                "@isReference": "false"
            },
            "SupplierId": "90fe96c1-53ed-4c78-9d15-f17d53813760",
            "Address": {
                "Street": "Vyskocilova",
                "@complexType": "ESPM.Address",
                "@data": {
                    "@isReference": "false"
                },
                "PostalCode": "140 00",
                "HouseNumber": "1481\/4",
                "Country": "CZ",
                "City": "Praha"
            },
            "PhoneNumber": "39947387923",
            "PostalCode": "140 00",
            "Country": "CZ",
            "City": "Praha"
        },
        "@entityID": "Suppliers('90fe96c1-53ed-4c78-9d15-f17d53813760')",
        "@systemFlags": 0,
        "@set": "ESPM.ESPMContainer\/Suppliers",
        "Products": {
            "@isReference": true,
            "@changedLinksPart2": [],
            "@readLink": "Suppliers('90fe96c1-53ed-4c78-9d15-f17d53813760')\/Products",
            "@innerEntityType": "ESPM.Product",
            "@values": [],
            "@changedLinksPart1": []
        },
        "@editLink": "Suppliers('90fe96c1-53ed-4c78-9d15-f17d53813760')",
        "HouseNumber": "1481\/4"
    }];

project.prods = [
    {
    "DimensionWidth": "30.4000",
    "ProductId": "0d1942af-e952-4687-984c-052d1344b181",
    "LongDescription": "720p, DLP Projector max. 8,45 Meter, 2D",
    "DimensionHeight": "23.0000",
    "CategoryName": "Projectors",
    "@entityType": "ESPM.Product",
    "Name": "Beam Breaker B-1",
    "StockDetails": {
        "@entityType": "ESPM.Stock",
        "@data": {"@isReference": "false"},
        "@readLink": "Products('0d1942af-e952-4687-984c-052d1344b181')\/StockDetails",
        "@systemFlags": 33,
        "@key": 0
    },
    "@data": {"@isReference": "false"},
    "@readLink": "Products('0d1942af-e952-4687-984c-052d1344b181')",
    "DimensionDepth": "23.1000",
    "SupplierId": "0b8357de-0b27-477f-b2f8-e3d05ba766b3",
    "@media": {
        "@isOffline": "false",
        "@mediaType": "application\/binary",
        "@owningType": "ESPM.Product",
        "@readLink": "Products('0d1942af-e952-4687-984c-052d1344b181')\/$value",
        "@entitySet": "ESPMContainer.Products",
        "@streamProperty": "ESPM.Product\/media",
        "@editLink": "Products('0d1942af-e952-4687-984c-052d1344b181')\/$value"
    },
    "@key": 0,
    "@oldEntity": {
        "DimensionWidth": "30.4000",
        "ProductId": "0d1942af-e952-4687-984c-052d1344b181",
        "LongDescription": "720p, DLP Projector max. 8,45 Meter, 2D",
        "DimensionHeight": "23.0000",
        "CategoryName": "Projectors",
        "@entityType": "ESPM.Product",
        "Name": "Beam Breaker B-1",
        "@data": {"@isReference": "false"},
        "DimensionDepth": "23.1000",
        "SupplierId": "0b8357de-0b27-477f-b2f8-e3d05ba766b3",
        "@media": {
            "@owningType": "ESPM.Product",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@isOffline": "false"
        },
        "@key": 0,
        "ShortDescription": "720p, DLP Projector max. 8,45 Meter, 2D",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "DimensionUnit": "cm",
        "PictureUrl": "\/imgs\/HT-6100.jpg",
        "Category": "Projectors",
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "469.000",
        "Weight": "1.700",
        "WeightUnit": "KG",
        "QuantityUnit": "EA"
    },
    "@entityID": "Products('0d1942af-e952-4687-984c-052d1344b181')",
    "DimensionUnit": "cm",
    "CurrencyCode": "EUR",
    "@systemFlags": 0,
    "PictureUrl": "\/imgs\/HT-6100.jpg",
    "Category": "Projectors",
    "ShortDescription": "720p, DLP Projector max. 8,45 Meter, 2D",
    "SupplierDetails": {
        "@entityType": "ESPM.Supplier",
        "@data": {"@isReference": "false"},
        "@readLink": "Products('0d1942af-e952-4687-984c-052d1344b181')\/SupplierDetails",
        "@systemFlags": 33,
        "@key": 0
    },
    "@set": "ESPM.ESPMContainer\/Products",
    "Price": "469.000",
    "@editLink": "Products('0d1942af-e952-4687-984c-052d1344b181')",
    "Weight": "1.700",
    "QuantityUnit": "EA",
    "WeightUnit": "KG"
},
    {
        "DimensionWidth": "37.0000",
        "ProductId": "6e07297b-125f-47cf-9070-bf818c16ea98",
        "LongDescription": "CD-RW, DVD+R\/RW, DVD-R\/RW, MPEG 2 (Video-DVD), MPEG 4, VCD, SVCD, DivX, Xvid",
        "DimensionHeight": "6.0000",
        "CategoryName": "Portable Players",
        "@entityType": "ESPM.Product",
        "Name": "Play Movie",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('6e07297b-125f-47cf-9070-bf818c16ea98')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('6e07297b-125f-47cf-9070-bf818c16ea98')",
        "DimensionDepth": "24.0000",
        "SupplierId": "83903818-f461-4435-95ec-6f05e0adec78",
        "@media": {
            "@isOffline": "false",
            "@mediaType": "application\/binary",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('6e07297b-125f-47cf-9070-bf818c16ea98')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('6e07297b-125f-47cf-9070-bf818c16ea98')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "37.0000",
            "ProductId": "6e07297b-125f-47cf-9070-bf818c16ea98",
            "LongDescription": "CD-RW, DVD+R\/RW, DVD-R\/RW, MPEG 2 (Video-DVD), MPEG 4, VCD, SVCD, DivX, Xvid",
            "DimensionHeight": "6.0000",
            "CategoryName": "Portable Players",
            "@entityType": "ESPM.Product",
            "Name": "Play Movie",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "24.0000",
            "SupplierId": "83903818-f461-4435-95ec-6f05e0adec78",
            "@media": {
                "@owningType": "ESPM.Product",
                "@entitySet": "ESPMContainer.Products",
                "@streamProperty": "ESPM.Product\/media",
                "@isOffline": "false"
            },
            "@key": 0,
            "ShortDescription": "CD-RW, DVD+R\/RW, DVD-R\/RW, MPEG 2 (Video-DVD), MPEG 4, VCD, SVCD, DivX, Xvid",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-6110.jpg",
            "Category": "Portable Players",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "130.000",
            "Weight": "2.400",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('6e07297b-125f-47cf-9070-bf818c16ea98')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-6110.jpg",
        "Category": "Portable Players",
        "ShortDescription": "CD-RW, DVD+R\/RW, DVD-R\/RW, MPEG 2 (Video-DVD), MPEG 4, VCD, SVCD, DivX, Xvid",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('6e07297b-125f-47cf-9070-bf818c16ea98')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "130.000",
        "@editLink": "Products('6e07297b-125f-47cf-9070-bf818c16ea98')",
        "Weight": "2.400",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "11.0000",
        "ProductId": "869704a0-9999-4636-b12c-309bc7838598",
        "LongDescription": "Complete package, 1 User, different Multimedia applications, playing music, watching DVDs, only with this Smart package",
        "DimensionHeight": "22.0000",
        "CategoryName": "Software",
        "@entityType": "ESPM.Product",
        "Name": "Smart Multimedia",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('869704a0-9999-4636-b12c-309bc7838598')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('869704a0-9999-4636-b12c-309bc7838598')",
        "DimensionDepth": "3.4000",
        "SupplierId": "83903818-f461-4435-95ec-6f05e0adec78",
        "@media": {
            "@isOffline": "false",
            "@mediaType": "application\/binary",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('869704a0-9999-4636-b12c-309bc7838598')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('869704a0-9999-4636-b12c-309bc7838598')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "11.0000",
            "ProductId": "869704a0-9999-4636-b12c-309bc7838598",
            "LongDescription": "Complete package, 1 User, different Multimedia applications, playing music, watching DVDs, only with this Smart package",
            "DimensionHeight": "22.0000",
            "CategoryName": "Software",
            "@entityType": "ESPM.Product",
            "Name": "Smart Multimedia",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "3.4000",
            "SupplierId": "83903818-f461-4435-95ec-6f05e0adec78",
            "@media": {
                "@owningType": "ESPM.Product",
                "@isOffline": "false",
                "@streamProperty": "ESPM.Product\/media",
                "@entitySet": "ESPMContainer.Products"
            },
            "@key": 0,
            "ShortDescription": "Complete package, 1 User, different Multimedia applications, playing music, watching DVDs, only with this Smart package",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1103.jpg",
            "Category": "Software",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "77.000",
            "Weight": "0.800",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('869704a0-9999-4636-b12c-309bc7838598')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1103.jpg",
        "Category": "Software",
        "ShortDescription": "Complete package, 1 User, different Multimedia applications, playing music, watching DVDs, only with this Smart package",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('869704a0-9999-4636-b12c-309bc7838598')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "77.000",
        "@editLink": "Products('869704a0-9999-4636-b12c-309bc7838598')",
        "Weight": "0.800",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "30.0000",
        "ProductId": "58dfab0b-07b1-4dd5-bb07-3894ec99295a",
        "LongDescription": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
        "DimensionHeight": "3.0000",
        "CategoryName": "Notebooks",
        "@entityType": "ESPM.Product",
        "Name": "Notebook Basic 15",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('58dfab0b-07b1-4dd5-bb07-3894ec99295a')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('58dfab0b-07b1-4dd5-bb07-3894ec99295a')",
        "DimensionDepth": "18.0000",
        "SupplierId": "0b8357de-0b27-477f-b2f8-e3d05ba766b3",
        "@media": {
            "@mediaType": "application\/binary",
            "@isOffline": "false",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('58dfab0b-07b1-4dd5-bb07-3894ec99295a')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('58dfab0b-07b1-4dd5-bb07-3894ec99295a')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "30.0000",
            "ProductId": "58dfab0b-07b1-4dd5-bb07-3894ec99295a",
            "LongDescription": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
            "DimensionHeight": "3.0000",
            "CategoryName": "Notebooks",
            "@entityType": "ESPM.Product",
            "Name": "Notebook Basic 15",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "18.0000",
            "SupplierId": "0b8357de-0b27-477f-b2f8-e3d05ba766b3",
            "@media": {
                "@owningType": "ESPM.Product",
                "@isOffline": "false",
                "@streamProperty": "ESPM.Product\/media",
                "@entitySet": "ESPMContainer.Products"
            },
            "@key": 0,
            "ShortDescription": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1000.jpg",
            "Category": "Notebooks",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "956.000",
            "Weight": "4.200",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('58dfab0b-07b1-4dd5-bb07-3894ec99295a')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1000.jpg",
        "Category": "Notebooks",
        "ShortDescription": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('58dfab0b-07b1-4dd5-bb07-3894ec99295a')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "956.000",
        "@editLink": "Products('58dfab0b-07b1-4dd5-bb07-3894ec99295a')",
        "Weight": "4.200",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "29.0000",
        "ProductId": "215860df-abe9-43ae-8ffa-51ad851f1dc1",
        "LongDescription": "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
        "DimensionHeight": "3.1000",
        "CategoryName": "Notebooks",
        "@entityType": "ESPM.Product",
        "Name": "Notebook Basic 17",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('215860df-abe9-43ae-8ffa-51ad851f1dc1')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('215860df-abe9-43ae-8ffa-51ad851f1dc1')",
        "DimensionDepth": "17.0000",
        "SupplierId": "4aa01199-5e1d-4f6a-93d0-bbe4a2021cbd",
        "@media": {
            "@isOffline": "false",
            "@mediaType": "application\/binary",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('215860df-abe9-43ae-8ffa-51ad851f1dc1')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('215860df-abe9-43ae-8ffa-51ad851f1dc1')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "29.0000",
            "ProductId": "215860df-abe9-43ae-8ffa-51ad851f1dc1",
            "LongDescription": "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
            "DimensionHeight": "3.1000",
            "CategoryName": "Notebooks",
            "@entityType": "ESPM.Product",
            "Name": "Notebook Basic 17",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "17.0000",
            "SupplierId": "4aa01199-5e1d-4f6a-93d0-bbe4a2021cbd",
            "@media": {
                "@owningType": "ESPM.Product",
                "@isOffline": "false",
                "@streamProperty": "ESPM.Product\/media",
                "@entitySet": "ESPMContainer.Products"
            },
            "@key": 0,
            "ShortDescription": "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1001.jpg",
            "Category": "Notebooks",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "1249.000",
            "Weight": "4.500",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('215860df-abe9-43ae-8ffa-51ad851f1dc1')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1001.jpg",
        "Category": "Notebooks",
        "ShortDescription": "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('215860df-abe9-43ae-8ffa-51ad851f1dc1')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "1249.000",
        "@editLink": "Products('215860df-abe9-43ae-8ffa-51ad851f1dc1')",
        "Weight": "4.500",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "28.0000",
        "ProductId": "9b2bfd4c-b270-4daa-84e8-4dfe5bc14a1d",
        "LongDescription": "Notebook Basic 18 with 2,80 GHz quad core, 18\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
        "DimensionHeight": "2.5000",
        "CategoryName": "Notebooks",
        "@entityType": "ESPM.Product",
        "Name": "Notebook Basic 18",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('9b2bfd4c-b270-4daa-84e8-4dfe5bc14a1d')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('9b2bfd4c-b270-4daa-84e8-4dfe5bc14a1d')",
        "DimensionDepth": "19.0000",
        "SupplierId": "f0852775-275e-4026-b243-5d708a316c57",
        "@media": {
            "@mediaType": "application\/binary",
            "@isOffline": "false",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('9b2bfd4c-b270-4daa-84e8-4dfe5bc14a1d')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('9b2bfd4c-b270-4daa-84e8-4dfe5bc14a1d')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "28.0000",
            "ProductId": "9b2bfd4c-b270-4daa-84e8-4dfe5bc14a1d",
            "LongDescription": "Notebook Basic 18 with 2,80 GHz quad core, 18\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
            "DimensionHeight": "2.5000",
            "CategoryName": "Notebooks",
            "@entityType": "ESPM.Product",
            "Name": "Notebook Basic 18",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "19.0000",
            "SupplierId": "f0852775-275e-4026-b243-5d708a316c57",
            "@media": {
                "@owningType": "ESPM.Product",
                "@isOffline": "false",
                "@streamProperty": "ESPM.Product\/media",
                "@entitySet": "ESPMContainer.Products"
            },
            "@key": 0,
            "ShortDescription": "Notebook Basic 18 with 2,80 GHz quad core, 18\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1002.jpg",
            "Category": "Notebooks",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "1570.000",
            "Weight": "4.200",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('9b2bfd4c-b270-4daa-84e8-4dfe5bc14a1d')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1002.jpg",
        "Category": "Notebooks",
        "ShortDescription": "Notebook Basic 18 with 2,80 GHz quad core, 18\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('9b2bfd4c-b270-4daa-84e8-4dfe5bc14a1d')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "1570.000",
        "@editLink": "Products('9b2bfd4c-b270-4daa-84e8-4dfe5bc14a1d')",
        "Weight": "4.200",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "32.0000",
        "ProductId": "76f0d456-5d90-4d86-b5f5-7199d28bbff4",
        "LongDescription": "Notebook Basic 19 with 2,80 GHz quad core, 19\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
        "DimensionHeight": "4.0000",
        "CategoryName": "Notebooks",
        "@entityType": "ESPM.Product",
        "Name": "Notebook Basic 19",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('76f0d456-5d90-4d86-b5f5-7199d28bbff4')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('76f0d456-5d90-4d86-b5f5-7199d28bbff4')",
        "DimensionDepth": "21.0000",
        "SupplierId": "81f2a7dd-9ed7-4b0e-9f17-3b70c3e553fb",
        "@media": {
            "@mediaType": "application\/binary",
            "@isOffline": "false",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('76f0d456-5d90-4d86-b5f5-7199d28bbff4')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('76f0d456-5d90-4d86-b5f5-7199d28bbff4')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "32.0000",
            "ProductId": "76f0d456-5d90-4d86-b5f5-7199d28bbff4",
            "LongDescription": "Notebook Basic 19 with 2,80 GHz quad core, 19\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
            "DimensionHeight": "4.0000",
            "CategoryName": "Notebooks",
            "@entityType": "ESPM.Product",
            "Name": "Notebook Basic 19",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "21.0000",
            "SupplierId": "81f2a7dd-9ed7-4b0e-9f17-3b70c3e553fb",
            "@media": {
                "@owningType": "ESPM.Product",
                "@entitySet": "ESPMContainer.Products",
                "@streamProperty": "ESPM.Product\/media",
                "@isOffline": "false"
            },
            "@key": 0,
            "ShortDescription": "Notebook Basic 19 with 2,80 GHz quad core, 19\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1003.jpg",
            "Category": "Notebooks",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "1650.000",
            "Weight": "4.200",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('76f0d456-5d90-4d86-b5f5-7199d28bbff4')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1003.jpg",
        "Category": "Notebooks",
        "ShortDescription": "Notebook Basic 19 with 2,80 GHz quad core, 19\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('76f0d456-5d90-4d86-b5f5-7199d28bbff4')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "1650.000",
        "@editLink": "Products('76f0d456-5d90-4d86-b5f5-7199d28bbff4')",
        "Weight": "4.200",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "32.0000",
        "ProductId": "26ab4700-61cd-4878-a17d-b330587bcda6",
        "LongDescription": "Digital Organizer with State-of-the-Art Storage Encryption",
        "DimensionHeight": "3.0000",
        "CategoryName": "PDAs & Organizers",
        "@entityType": "ESPM.Product",
        "Name": "ITelO Vault",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('26ab4700-61cd-4878-a17d-b330587bcda6')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('26ab4700-61cd-4878-a17d-b330587bcda6')",
        "DimensionDepth": "22.0000",
        "SupplierId": "8f02dd8c-3f53-4497-ab50-56685a95d576",
        "@media": {
            "@isOffline": "false",
            "@mediaType": "application\/binary",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('26ab4700-61cd-4878-a17d-b330587bcda6')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('26ab4700-61cd-4878-a17d-b330587bcda6')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "32.0000",
            "ProductId": "26ab4700-61cd-4878-a17d-b330587bcda6",
            "LongDescription": "Digital Organizer with State-of-the-Art Storage Encryption",
            "DimensionHeight": "3.0000",
            "CategoryName": "PDAs & Organizers",
            "@entityType": "ESPM.Product",
            "Name": "ITelO Vault",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "22.0000",
            "SupplierId": "8f02dd8c-3f53-4497-ab50-56685a95d576",
            "@media": {
                "@owningType": "ESPM.Product",
                "@entitySet": "ESPMContainer.Products",
                "@streamProperty": "ESPM.Product\/media",
                "@isOffline": "false"
            },
            "@key": 0,
            "ShortDescription": "Digital Organizer with State-of-the-Art Storage Encryption",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1007.jpg",
            "Category": "PDAs & Organizers",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "299.000",
            "Weight": "0.200",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('26ab4700-61cd-4878-a17d-b330587bcda6')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1007.jpg",
        "Category": "PDAs & Organizers",
        "ShortDescription": "Digital Organizer with State-of-the-Art Storage Encryption",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('26ab4700-61cd-4878-a17d-b330587bcda6')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "299.000",
        "@editLink": "Products('26ab4700-61cd-4878-a17d-b330587bcda6')",
        "Weight": "0.200",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "33.0000",
        "ProductId": "23ffbe63-62e0-4790-b4c5-a5ec2863b268",
        "LongDescription": "Notebook Professional 15 with 2,80 GHz quad core, 15\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R\/+R\/-RW\/-RAM),Windows 8 Pro",
        "DimensionHeight": "3.0000",
        "CategoryName": "Notebooks",
        "@entityType": "ESPM.Product",
        "Name": "Notebook Professional 15",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('23ffbe63-62e0-4790-b4c5-a5ec2863b268')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('23ffbe63-62e0-4790-b4c5-a5ec2863b268')",
        "DimensionDepth": "20.0000",
        "SupplierId": "83903818-f461-4435-95ec-6f05e0adec78",
        "@media": {
            "@isOffline": "false",
            "@mediaType": "application\/binary",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('23ffbe63-62e0-4790-b4c5-a5ec2863b268')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('23ffbe63-62e0-4790-b4c5-a5ec2863b268')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "33.0000",
            "ProductId": "23ffbe63-62e0-4790-b4c5-a5ec2863b268",
            "LongDescription": "Notebook Professional 15 with 2,80 GHz quad core, 15\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R\/+R\/-RW\/-RAM),Windows 8 Pro",
            "DimensionHeight": "3.0000",
            "CategoryName": "Notebooks",
            "@entityType": "ESPM.Product",
            "Name": "Notebook Professional 15",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "20.0000",
            "SupplierId": "83903818-f461-4435-95ec-6f05e0adec78",
            "@media": {
                "@owningType": "ESPM.Product",
                "@isOffline": "false",
                "@streamProperty": "ESPM.Product\/media",
                "@entitySet": "ESPMContainer.Products"
            },
            "@key": 0,
            "ShortDescription": "Notebook Professional 15 with 2,80 GHz quad core, 15\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R\/+R\/-RW\/-RAM),Windows 8 Pro",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1010.jpg",
            "Category": "Notebooks",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "1999.000",
            "Weight": "4.300",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('23ffbe63-62e0-4790-b4c5-a5ec2863b268')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1010.jpg",
        "Category": "Notebooks",
        "ShortDescription": "Notebook Professional 15 with 2,80 GHz quad core, 15\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R\/+R\/-RW\/-RAM),Windows 8 Pro",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('23ffbe63-62e0-4790-b4c5-a5ec2863b268')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "1999.000",
        "@editLink": "Products('23ffbe63-62e0-4790-b4c5-a5ec2863b268')",
        "Weight": "4.300",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "33.0000",
        "ProductId": "efc42953-b517-4f61-b7ad-1b2eadaa0b4e",
        "LongDescription": "Notebook Professional 17 with 2,80 GHz quad core, 17\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R\/+R\/-RW\/-RAM),Windows 8 Pro",
        "DimensionHeight": "2.0000",
        "CategoryName": "Notebooks",
        "@entityType": "ESPM.Product",
        "Name": "Notebook Professional 17",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('efc42953-b517-4f61-b7ad-1b2eadaa0b4e')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('efc42953-b517-4f61-b7ad-1b2eadaa0b4e')",
        "DimensionDepth": "23.0000",
        "SupplierId": "df144c46-ef38-48a9-bccf-7278ee4ea5ff",
        "@media": {
            "@isOffline": "false",
            "@mediaType": "application\/binary",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('efc42953-b517-4f61-b7ad-1b2eadaa0b4e')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('efc42953-b517-4f61-b7ad-1b2eadaa0b4e')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "33.0000",
            "ProductId": "efc42953-b517-4f61-b7ad-1b2eadaa0b4e",
            "LongDescription": "Notebook Professional 17 with 2,80 GHz quad core, 17\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R\/+R\/-RW\/-RAM),Windows 8 Pro",
            "DimensionHeight": "2.0000",
            "CategoryName": "Notebooks",
            "@entityType": "ESPM.Product",
            "Name": "Notebook Professional 17",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "23.0000",
            "SupplierId": "df144c46-ef38-48a9-bccf-7278ee4ea5ff",
            "@media": {
                "@owningType": "ESPM.Product",
                "@isOffline": "false",
                "@streamProperty": "ESPM.Product\/media",
                "@entitySet": "ESPMContainer.Products"
            },
            "@key": 0,
            "ShortDescription": "Notebook Professional 17 with 2,80 GHz quad core, 17\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R\/+R\/-RW\/-RAM),Windows 8 Pro",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1011.jpg",
            "Category": "Notebooks",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "2299.000",
            "Weight": "4.100",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('efc42953-b517-4f61-b7ad-1b2eadaa0b4e')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1011.jpg",
        "Category": "Notebooks",
        "ShortDescription": "Notebook Professional 17 with 2,80 GHz quad core, 17\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R\/+R\/-RW\/-RAM),Windows 8 Pro",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('efc42953-b517-4f61-b7ad-1b2eadaa0b4e')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "2299.000",
        "@editLink": "Products('efc42953-b517-4f61-b7ad-1b2eadaa0b4e')",
        "Weight": "4.100",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "10.0000",
        "ProductId": "872ca179-cf09-44b0-bf30-15c84aa3aca4",
        "LongDescription": "Digital Organizer with State-of-the-Art Encryption for Storage and Network Communications",
        "DimensionHeight": "17.0000",
        "CategoryName": "PDAs & Organizers",
        "@entityType": "ESPM.Product",
        "Name": "ITelO Vault Net",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('872ca179-cf09-44b0-bf30-15c84aa3aca4')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('872ca179-cf09-44b0-bf30-15c84aa3aca4')",
        "DimensionDepth": "1.8000",
        "SupplierId": "5969471d-449f-4951-bdee-b963f9c6e589",
        "@media": {
            "@isOffline": "false",
            "@mediaType": "application\/binary",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('872ca179-cf09-44b0-bf30-15c84aa3aca4')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('872ca179-cf09-44b0-bf30-15c84aa3aca4')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "10.0000",
            "ProductId": "872ca179-cf09-44b0-bf30-15c84aa3aca4",
            "LongDescription": "Digital Organizer with State-of-the-Art Encryption for Storage and Network Communications",
            "DimensionHeight": "17.0000",
            "CategoryName": "PDAs & Organizers",
            "@entityType": "ESPM.Product",
            "Name": "ITelO Vault Net",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "1.8000",
            "SupplierId": "5969471d-449f-4951-bdee-b963f9c6e589",
            "@media": {
                "@owningType": "ESPM.Product",
                "@isOffline": "false",
                "@streamProperty": "ESPM.Product\/media",
                "@entitySet": "ESPMContainer.Products"
            },
            "@key": 0,
            "ShortDescription": "Digital Organizer with State-of-the-Art Encryption for Storage and Network Communications",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1020.jpg",
            "Category": "PDAs & Organizers",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "459.000",
            "Weight": "0.160",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('872ca179-cf09-44b0-bf30-15c84aa3aca4')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1020.jpg",
        "Category": "PDAs & Organizers",
        "ShortDescription": "Digital Organizer with State-of-the-Art Encryption for Storage and Network Communications",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('872ca179-cf09-44b0-bf30-15c84aa3aca4')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "459.000",
        "@editLink": "Products('872ca179-cf09-44b0-bf30-15c84aa3aca4')",
        "Weight": "0.160",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "11.0000",
        "ProductId": "631330ed-9e51-46d5-bca3-0194e0d6d4f3",
        "LongDescription": "Digital Organizer with State-of-the-Art Encryption for Storage and Secure Stellite Link",
        "DimensionHeight": "18.0000",
        "CategoryName": "PDAs & Organizers",
        "@entityType": "ESPM.Product",
        "Name": "ITelO Vault SAT",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('631330ed-9e51-46d5-bca3-0194e0d6d4f3')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('631330ed-9e51-46d5-bca3-0194e0d6d4f3')",
        "DimensionDepth": "1.7000",
        "SupplierId": "265162e3-cb05-4e8d-b03d-209eb2c71dc0",
        "@media": {
            "@mediaType": "application\/binary",
            "@isOffline": "false",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('631330ed-9e51-46d5-bca3-0194e0d6d4f3')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('631330ed-9e51-46d5-bca3-0194e0d6d4f3')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "11.0000",
            "ProductId": "631330ed-9e51-46d5-bca3-0194e0d6d4f3",
            "LongDescription": "Digital Organizer with State-of-the-Art Encryption for Storage and Secure Stellite Link",
            "DimensionHeight": "18.0000",
            "CategoryName": "PDAs & Organizers",
            "@entityType": "ESPM.Product",
            "Name": "ITelO Vault SAT",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "1.7000",
            "SupplierId": "265162e3-cb05-4e8d-b03d-209eb2c71dc0",
            "@media": {
                "@owningType": "ESPM.Product",
                "@isOffline": "false",
                "@streamProperty": "ESPM.Product\/media",
                "@entitySet": "ESPMContainer.Products"
            },
            "@key": 0,
            "ShortDescription": "Digital Organizer with State-of-the-Art Encryption for Storage and Secure Stellite Link",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1021.jpg",
            "Category": "PDAs & Organizers",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "149.000",
            "Weight": "0.180",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('631330ed-9e51-46d5-bca3-0194e0d6d4f3')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1021.jpg",
        "Category": "PDAs & Organizers",
        "ShortDescription": "Digital Organizer with State-of-the-Art Encryption for Storage and Secure Stellite Link",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('631330ed-9e51-46d5-bca3-0194e0d6d4f3')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "149.000",
        "@editLink": "Products('631330ed-9e51-46d5-bca3-0194e0d6d4f3')",
        "Weight": "0.180",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "84.0000",
        "ProductId": "1fc237f1-cb3f-4a3b-b368-0929aebd7173",
        "LongDescription": "32 GB Digital Assistant with high-resolution color screen",
        "DimensionHeight": "14.0000",
        "CategoryName": "PDAs & Organizers",
        "@entityType": "ESPM.Product",
        "Name": "Comfort Easy",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('1fc237f1-cb3f-4a3b-b368-0929aebd7173')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('1fc237f1-cb3f-4a3b-b368-0929aebd7173')",
        "DimensionDepth": "1.5000",
        "SupplierId": "0b8357de-0b27-477f-b2f8-e3d05ba766b3",
        "@media": {
            "@isOffline": "false",
            "@mediaType": "application\/binary",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('1fc237f1-cb3f-4a3b-b368-0929aebd7173')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('1fc237f1-cb3f-4a3b-b368-0929aebd7173')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "84.0000",
            "ProductId": "1fc237f1-cb3f-4a3b-b368-0929aebd7173",
            "LongDescription": "32 GB Digital Assistant with high-resolution color screen",
            "DimensionHeight": "14.0000",
            "CategoryName": "PDAs & Organizers",
            "@entityType": "ESPM.Product",
            "Name": "Comfort Easy",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "1.5000",
            "SupplierId": "0b8357de-0b27-477f-b2f8-e3d05ba766b3",
            "@media": {
                "@owningType": "ESPM.Product",
                "@isOffline": "false",
                "@streamProperty": "ESPM.Product\/media",
                "@entitySet": "ESPMContainer.Products"
            },
            "@key": 0,
            "ShortDescription": "32 GB Digital Assistant with high-resolution color screen",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1022.jpg",
            "Category": "PDAs & Organizers",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "1679.000",
            "Weight": "0.200",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('1fc237f1-cb3f-4a3b-b368-0929aebd7173')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1022.jpg",
        "Category": "PDAs & Organizers",
        "ShortDescription": "32 GB Digital Assistant with high-resolution color screen",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('1fc237f1-cb3f-4a3b-b368-0929aebd7173')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "1679.000",
        "@editLink": "Products('1fc237f1-cb3f-4a3b-b368-0929aebd7173')",
        "Weight": "0.200",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "80.0000",
        "ProductId": "cb4e194d-a294-4d2b-a831-9ea6e96137f5",
        "LongDescription": "64 GB Digital Assistant with high-resolution color screen and synthesized voice output",
        "DimensionHeight": "13.0000",
        "CategoryName": "PDAs & Organizers",
        "@entityType": "ESPM.Product",
        "Name": "Comfort Senior",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('cb4e194d-a294-4d2b-a831-9ea6e96137f5')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('cb4e194d-a294-4d2b-a831-9ea6e96137f5')",
        "DimensionDepth": "1.6000",
        "SupplierId": "4aa01199-5e1d-4f6a-93d0-bbe4a2021cbd",
        "@media": {
            "@isOffline": "false",
            "@mediaType": "application\/binary",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('cb4e194d-a294-4d2b-a831-9ea6e96137f5')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('cb4e194d-a294-4d2b-a831-9ea6e96137f5')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "80.0000",
            "ProductId": "cb4e194d-a294-4d2b-a831-9ea6e96137f5",
            "LongDescription": "64 GB Digital Assistant with high-resolution color screen and synthesized voice output",
            "DimensionHeight": "13.0000",
            "CategoryName": "PDAs & Organizers",
            "@entityType": "ESPM.Product",
            "Name": "Comfort Senior",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "1.6000",
            "SupplierId": "4aa01199-5e1d-4f6a-93d0-bbe4a2021cbd",
            "@media": {
                "@owningType": "ESPM.Product",
                "@isOffline": "false",
                "@streamProperty": "ESPM.Product\/media",
                "@entitySet": "ESPMContainer.Products"
            },
            "@key": 0,
            "ShortDescription": "64 GB Digital Assistant with high-resolution color screen and synthesized voice output",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1023.jpg",
            "Category": "PDAs & Organizers",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "512.000",
            "Weight": "0.800",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('cb4e194d-a294-4d2b-a831-9ea6e96137f5')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1023.jpg",
        "Category": "PDAs & Organizers",
        "ShortDescription": "64 GB Digital Assistant with high-resolution color screen and synthesized voice output",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('cb4e194d-a294-4d2b-a831-9ea6e96137f5')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "512.000",
        "@editLink": "Products('cb4e194d-a294-4d2b-a831-9ea6e96137f5')",
        "Weight": "0.800",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "37.0000",
        "ProductId": "3500a8b1-8f63-47cb-9271-64532ddc252f",
        "LongDescription": "Optimum Hi-Resolution max. 1920 x 1080 @ 85Hz, Dot Pitch: 0.27mm",
        "DimensionHeight": "36.0000",
        "CategoryName": "Flat Screen Monitors",
        "@entityType": "ESPM.Product",
        "Name": "Ergo Screen E-I",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('3500a8b1-8f63-47cb-9271-64532ddc252f')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('3500a8b1-8f63-47cb-9271-64532ddc252f')",
        "DimensionDepth": "12.0000",
        "SupplierId": "f0852775-275e-4026-b243-5d708a316c57",
        "@media": {
            "@mediaType": "application\/binary",
            "@isOffline": "false",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('3500a8b1-8f63-47cb-9271-64532ddc252f')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('3500a8b1-8f63-47cb-9271-64532ddc252f')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "37.0000",
            "ProductId": "3500a8b1-8f63-47cb-9271-64532ddc252f",
            "LongDescription": "Optimum Hi-Resolution max. 1920 x 1080 @ 85Hz, Dot Pitch: 0.27mm",
            "DimensionHeight": "36.0000",
            "CategoryName": "Flat Screen Monitors",
            "@entityType": "ESPM.Product",
            "Name": "Ergo Screen E-I",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "12.0000",
            "SupplierId": "f0852775-275e-4026-b243-5d708a316c57",
            "@media": {
                "@owningType": "ESPM.Product",
                "@entitySet": "ESPMContainer.Products",
                "@streamProperty": "ESPM.Product\/media",
                "@isOffline": "false"
            },
            "@key": 0,
            "ShortDescription": "Optimum Hi-Resolution max. 1920 x 1080 @ 85Hz, Dot Pitch: 0.27mm",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1030.jpg",
            "Category": "Flat Screen Monitors",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "230.000",
            "Weight": "21.000",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('3500a8b1-8f63-47cb-9271-64532ddc252f')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1030.jpg",
        "Category": "Flat Screen Monitors",
        "ShortDescription": "Optimum Hi-Resolution max. 1920 x 1080 @ 85Hz, Dot Pitch: 0.27mm",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('3500a8b1-8f63-47cb-9271-64532ddc252f')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "230.000",
        "@editLink": "Products('3500a8b1-8f63-47cb-9271-64532ddc252f')",
        "Weight": "21.000",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "40.8000",
        "ProductId": "6e633688-ff7d-442d-a8c4-f74699c3aa75",
        "LongDescription": "Optimum Hi-Resolution max. 1920 x 1200 @ 85Hz, Dot Pitch: 0.26mm",
        "DimensionHeight": "43.0000",
        "CategoryName": "Flat Screen Monitors",
        "@entityType": "ESPM.Product",
        "Name": "Ergo Screen E-II",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('6e633688-ff7d-442d-a8c4-f74699c3aa75')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('6e633688-ff7d-442d-a8c4-f74699c3aa75')",
        "DimensionDepth": "19.0000",
        "SupplierId": "81f2a7dd-9ed7-4b0e-9f17-3b70c3e553fb",
        "@media": {
            "@mediaType": "application\/binary",
            "@isOffline": "false",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('6e633688-ff7d-442d-a8c4-f74699c3aa75')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('6e633688-ff7d-442d-a8c4-f74699c3aa75')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "40.8000",
            "ProductId": "6e633688-ff7d-442d-a8c4-f74699c3aa75",
            "LongDescription": "Optimum Hi-Resolution max. 1920 x 1200 @ 85Hz, Dot Pitch: 0.26mm",
            "DimensionHeight": "43.0000",
            "CategoryName": "Flat Screen Monitors",
            "@entityType": "ESPM.Product",
            "Name": "Ergo Screen E-II",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "19.0000",
            "SupplierId": "81f2a7dd-9ed7-4b0e-9f17-3b70c3e553fb",
            "@media": {
                "@owningType": "ESPM.Product",
                "@entitySet": "ESPMContainer.Products",
                "@streamProperty": "ESPM.Product\/media",
                "@isOffline": "false"
            },
            "@key": 0,
            "ShortDescription": "Optimum Hi-Resolution max. 1920 x 1200 @ 85Hz, Dot Pitch: 0.26mm",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1031.jpg",
            "Category": "Flat Screen Monitors",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "285.000",
            "Weight": "21.000",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('6e633688-ff7d-442d-a8c4-f74699c3aa75')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1031.jpg",
        "Category": "Flat Screen Monitors",
        "ShortDescription": "Optimum Hi-Resolution max. 1920 x 1200 @ 85Hz, Dot Pitch: 0.26mm",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('6e633688-ff7d-442d-a8c4-f74699c3aa75')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "285.000",
        "@editLink": "Products('6e633688-ff7d-442d-a8c4-f74699c3aa75')",
        "Weight": "21.000",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "40.8000",
        "ProductId": "5b5bb33a-ad95-4147-8cde-c74e05aede55",
        "LongDescription": "Optimum Hi-Resolution max. 2560 x 1440 @ 85Hz, Dot Pitch: 0.25mm",
        "DimensionHeight": "43.0000",
        "CategoryName": "Flat Screen Monitors",
        "@entityType": "ESPM.Product",
        "Name": "Ergo Screen E-III",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('5b5bb33a-ad95-4147-8cde-c74e05aede55')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('5b5bb33a-ad95-4147-8cde-c74e05aede55')",
        "DimensionDepth": "19.0000",
        "SupplierId": "8f02dd8c-3f53-4497-ab50-56685a95d576",
        "@media": {
            "@mediaType": "application\/binary",
            "@isOffline": "false",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('5b5bb33a-ad95-4147-8cde-c74e05aede55')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('5b5bb33a-ad95-4147-8cde-c74e05aede55')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "40.8000",
            "ProductId": "5b5bb33a-ad95-4147-8cde-c74e05aede55",
            "LongDescription": "Optimum Hi-Resolution max. 2560 x 1440 @ 85Hz, Dot Pitch: 0.25mm",
            "DimensionHeight": "43.0000",
            "CategoryName": "Flat Screen Monitors",
            "@entityType": "ESPM.Product",
            "Name": "Ergo Screen E-III",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "19.0000",
            "SupplierId": "8f02dd8c-3f53-4497-ab50-56685a95d576",
            "@media": {
                "@owningType": "ESPM.Product",
                "@isOffline": "false",
                "@streamProperty": "ESPM.Product\/media",
                "@entitySet": "ESPMContainer.Products"
            },
            "@key": 0,
            "ShortDescription": "Optimum Hi-Resolution max. 2560 x 1440 @ 85Hz, Dot Pitch: 0.25mm",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1032.jpg",
            "Category": "Flat Screen Monitors",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "345.000",
            "Weight": "21.000",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('5b5bb33a-ad95-4147-8cde-c74e05aede55')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1032.jpg",
        "Category": "Flat Screen Monitors",
        "ShortDescription": "Optimum Hi-Resolution max. 2560 x 1440 @ 85Hz, Dot Pitch: 0.25mm",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('5b5bb33a-ad95-4147-8cde-c74e05aede55')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "345.000",
        "@editLink": "Products('5b5bb33a-ad95-4147-8cde-c74e05aede55')",
        "Weight": "21.000",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "39.0000",
        "ProductId": "bdc942b2-f511-4972-b228-d0af63a6b18f",
        "LongDescription": "Optimum Hi-Resolution max. 1600 x 1200 @ 85Hz, Dot Pitch: 0.24mm",
        "DimensionHeight": "41.0000",
        "CategoryName": "Flat Screen Monitors",
        "@entityType": "ESPM.Product",
        "Name": "Flat Basic",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('bdc942b2-f511-4972-b228-d0af63a6b18f')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('bdc942b2-f511-4972-b228-d0af63a6b18f')",
        "DimensionDepth": "20.0000",
        "SupplierId": "83903818-f461-4435-95ec-6f05e0adec78",
        "@media": {
            "@isOffline": "false",
            "@mediaType": "application\/binary",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('bdc942b2-f511-4972-b228-d0af63a6b18f')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('bdc942b2-f511-4972-b228-d0af63a6b18f')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "39.0000",
            "ProductId": "bdc942b2-f511-4972-b228-d0af63a6b18f",
            "LongDescription": "Optimum Hi-Resolution max. 1600 x 1200 @ 85Hz, Dot Pitch: 0.24mm",
            "DimensionHeight": "41.0000",
            "CategoryName": "Flat Screen Monitors",
            "@entityType": "ESPM.Product",
            "Name": "Flat Basic",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "20.0000",
            "SupplierId": "83903818-f461-4435-95ec-6f05e0adec78",
            "@media": {
                "@owningType": "ESPM.Product",
                "@entitySet": "ESPMContainer.Products",
                "@streamProperty": "ESPM.Product\/media",
                "@isOffline": "false"
            },
            "@key": 0,
            "ShortDescription": "Optimum Hi-Resolution max. 1600 x 1200 @ 85Hz, Dot Pitch: 0.24mm",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1035.jpg",
            "Category": "Flat Screen Monitors",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "399.000",
            "Weight": "14.000",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('bdc942b2-f511-4972-b228-d0af63a6b18f')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1035.jpg",
        "Category": "Flat Screen Monitors",
        "ShortDescription": "Optimum Hi-Resolution max. 1600 x 1200 @ 85Hz, Dot Pitch: 0.24mm",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('bdc942b2-f511-4972-b228-d0af63a6b18f')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "399.000",
        "@editLink": "Products('bdc942b2-f511-4972-b228-d0af63a6b18f')",
        "Weight": "14.000",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "45.0000",
        "ProductId": "a6148c4e-8efe-4efb-bf6c-50bdf99741e2",
        "LongDescription": "Optimum Hi-Resolution max. 2048 x 1080 @ 85Hz, Dot Pitch: 0.26mm",
        "DimensionHeight": "46.0000",
        "CategoryName": "Flat Screen Monitors",
        "@entityType": "ESPM.Product",
        "Name": "Flat Future",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('a6148c4e-8efe-4efb-bf6c-50bdf99741e2')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('a6148c4e-8efe-4efb-bf6c-50bdf99741e2')",
        "DimensionDepth": "26.0000",
        "SupplierId": "df144c46-ef38-48a9-bccf-7278ee4ea5ff",
        "@media": {
            "@mediaType": "application\/binary",
            "@isOffline": "false",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('a6148c4e-8efe-4efb-bf6c-50bdf99741e2')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('a6148c4e-8efe-4efb-bf6c-50bdf99741e2')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "45.0000",
            "ProductId": "a6148c4e-8efe-4efb-bf6c-50bdf99741e2",
            "LongDescription": "Optimum Hi-Resolution max. 2048 x 1080 @ 85Hz, Dot Pitch: 0.26mm",
            "DimensionHeight": "46.0000",
            "CategoryName": "Flat Screen Monitors",
            "@entityType": "ESPM.Product",
            "Name": "Flat Future",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "26.0000",
            "SupplierId": "df144c46-ef38-48a9-bccf-7278ee4ea5ff",
            "@media": {
                "@owningType": "ESPM.Product",
                "@isOffline": "false",
                "@streamProperty": "ESPM.Product\/media",
                "@entitySet": "ESPMContainer.Products"
            },
            "@key": 0,
            "ShortDescription": "Optimum Hi-Resolution max. 2048 x 1080 @ 85Hz, Dot Pitch: 0.26mm",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1036.jpg",
            "Category": "Flat Screen Monitors",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "430.000",
            "Weight": "15.000",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('a6148c4e-8efe-4efb-bf6c-50bdf99741e2')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1036.jpg",
        "Category": "Flat Screen Monitors",
        "ShortDescription": "Optimum Hi-Resolution max. 2048 x 1080 @ 85Hz, Dot Pitch: 0.26mm",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('a6148c4e-8efe-4efb-bf6c-50bdf99741e2')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "430.000",
        "@editLink": "Products('a6148c4e-8efe-4efb-bf6c-50bdf99741e2')",
        "Weight": "15.000",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    },
    {
        "DimensionWidth": "54.5000",
        "ProductId": "fe024c36-989e-46ca-8c07-0fb8d997346c",
        "LongDescription": "Optimum Hi-Resolution max. 2016 x 1512 @ 85Hz, Dot Pitch: 0.24mm",
        "DimensionHeight": "39.1000",
        "CategoryName": "Flat Screen Monitors",
        "@entityType": "ESPM.Product",
        "Name": "Flat XL",
        "StockDetails": {
            "@entityType": "ESPM.Stock",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('fe024c36-989e-46ca-8c07-0fb8d997346c')\/StockDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@data": {"@isReference": "false"},
        "@readLink": "Products('fe024c36-989e-46ca-8c07-0fb8d997346c')",
        "DimensionDepth": "22.1000",
        "SupplierId": "5969471d-449f-4951-bdee-b963f9c6e589",
        "@media": {
            "@isOffline": "false",
            "@mediaType": "application\/binary",
            "@owningType": "ESPM.Product",
            "@readLink": "Products('fe024c36-989e-46ca-8c07-0fb8d997346c')\/$value",
            "@entitySet": "ESPMContainer.Products",
            "@streamProperty": "ESPM.Product\/media",
            "@editLink": "Products('fe024c36-989e-46ca-8c07-0fb8d997346c')\/$value"
        },
        "@key": 0,
        "@oldEntity": {
            "DimensionWidth": "54.5000",
            "ProductId": "fe024c36-989e-46ca-8c07-0fb8d997346c",
            "LongDescription": "Optimum Hi-Resolution max. 2016 x 1512 @ 85Hz, Dot Pitch: 0.24mm",
            "DimensionHeight": "39.1000",
            "CategoryName": "Flat Screen Monitors",
            "@entityType": "ESPM.Product",
            "Name": "Flat XL",
            "@data": {"@isReference": "false"},
            "DimensionDepth": "22.1000",
            "SupplierId": "5969471d-449f-4951-bdee-b963f9c6e589",
            "@media": {
                "@owningType": "ESPM.Product",
                "@isOffline": "false",
                "@streamProperty": "ESPM.Product\/media",
                "@entitySet": "ESPMContainer.Products"
            },
            "@key": 0,
            "ShortDescription": "Optimum Hi-Resolution max. 2016 x 1512 @ 85Hz, Dot Pitch: 0.24mm",
            "CurrencyCode": "EUR",
            "@systemFlags": 0,
            "DimensionUnit": "cm",
            "PictureUrl": "\/imgs\/HT-1037.jpg",
            "Category": "Flat Screen Monitors",
            "@set": "ESPM.ESPMContainer\/Products",
            "Price": "1230.000",
            "Weight": "17.000",
            "WeightUnit": "KG",
            "QuantityUnit": "EA"
        },
        "@entityID": "Products('fe024c36-989e-46ca-8c07-0fb8d997346c')",
        "DimensionUnit": "cm",
        "CurrencyCode": "EUR",
        "@systemFlags": 0,
        "PictureUrl": "\/imgs\/HT-1037.jpg",
        "Category": "Flat Screen Monitors",
        "ShortDescription": "Optimum Hi-Resolution max. 2016 x 1512 @ 85Hz, Dot Pitch: 0.24mm",
        "SupplierDetails": {
            "@entityType": "ESPM.Supplier",
            "@data": {"@isReference": "false"},
            "@readLink": "Products('fe024c36-989e-46ca-8c07-0fb8d997346c')\/SupplierDetails",
            "@systemFlags": 33,
            "@key": 0
        },
        "@set": "ESPM.ESPMContainer\/Products",
        "Price": "1230.000",
        "@editLink": "Products('fe024c36-989e-46ca-8c07-0fb8d997346c')",
        "Weight": "17.000",
        "QuantityUnit": "EA",
        "WeightUnit": "KG"
    }];
