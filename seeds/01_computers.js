exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('computers').del();

    // Inserts seed entries
    await knex('computers').insert([
        {
            id: 1,
            serial: "nxhqbaa0011123d6107600",
            model: "CP713-2W",
            brand: "Acer",
            processor: "Intel® Core™ i3-10110U processor Dual-core 2.10 GHz",
            ram: "8 GB, DDR4 SDRAM",
            storage: "256 GB SSD",
            os: "ChromeOS",
            screen: '13.5" 2K (2256 x 1504) 3:2 IPS Touchscreen',
        }
    ]);
};


//         {
//             id: 1,
//             serial: "nxhqbaa0011123d6107600",
//             batteryInfo: {
//                 batteryChemistry: "Lithium Ion",
//                 numOfCells: "3-cell",
//                 batteryEnergy: "48 Wh",
//                 maxRunTime: "10 Hours",
//             },
//             builtInDevices: {
//                 soundMode: "Stereo",
//                 speakers: true,
//                 microphone: true,
//                 sensorType: ["Accelerometer", "Gyroscope"],
//                 numOfSpeakers: 2,
//                 fingerPrint: false,
//                 frontCamera: {
//                     resolution: "1280 x 720"
//                 },
//                 numOfMics: 2
//             },
//             interfaces: {
//                 hdmi: {
//                     numOfOutputs: 1,
//                 },
//                 usb: {
//                     totalPorts: 3,
//                     numOfUSB3Ports: 1,
//                     USBTypeC: {
//                         detail: "USB Type-C port supporting: USB 3.2 Gen 1 (up to 5 Gbps), DisplayPort over USB-C, USB charging 5 V; 3 A, DC-in port 5 or 9 or 15 or 20 V; 45 W",
//                         numOfPorts: 2
//                     }
//                 },
//             },
//             display: {
//                 aspectRatio: "3:2",
//                 resolution: "2256 x 1504",
//                 size: "13.5",
//                 mode: "2K",
//                 hdcp: true,
//                 touchscreen: true,
//                 type: "LCD",
//                 technology: ["In-plane Switching (IPS) Technology", "CineCrystal (Glare)"],
//                 backlight: "LED",
//                 multiTouch: true,
//             },
//             graphics: {
//                 manufacturer: "Intel",
//                 model: "UHD Graphics",
//                 memoryAccessibility: "Shared",
//             },
//             generalInfo: {
//                 productType: "2 in 1 Chromebook",
//                 partNumber: "NX.HQBAA.001",
//                 website: "https://www.acer.ca",
//                 marketing: `When you're on the go, you need a laptop that can keep up with you. With a 10th Gen Intel® Core™ i71 processor, this Chromebook can be woken up from sleep in less than a second while also boasting a 10-hour1 battery life.

// The Power to Perform
// When you're on the go, you need a laptop that can keep up with you. With a 10th Gen Intel® Core™ i71 processor, this Chromebook can be woken up from sleep in less than a second while also boasting a 10-hour1 battery life.

// Optimized Manageability
// Chrome Enterprise simplifies the way you run your business. Cut costs, simplify operations, reduce security risks, and greatly lower required IT resources by being able to deploy, update and manage all your devices at any scale.

// See More, Do More
// The VertiView Display gives you 18% more vertical screen space to work on and view documents, spreadsheets, and websites without the need scroll.

// Stylishly Rugged
// Worry less about your device and focus on your work. This Chromebook features a metal chassis with a streamlined, reinforced design that delivers a stylishly modern look as well as independently verified MIL-STD-810G military-grade durability.

// Fully Connected
// Specifically designed with the needs of business users in mind, this Chromebook comes with a bevy of functional features including Wi-Fi 6, Corning® Gorilla® Glass touchscreen and touchpad, a backlit keyboard, a built-in HDMI port, as well as dual USB Type-C ports to deal with everyday challenges.

// Convenient Convertibility
// Utilize your Chromebook in ways you've never thought of before. With its 360-degree convertible modes, work in space-limited environments such as in-flight or while on the train, while also easily making presentations or sharing your screen in convenient and collaborative ways.`,
//                 manufacturer: "Acer, Inc",
//                 model: "CP713-2W-38P1",
//                 name: "Chromebook Spin 713 CP713-2W-38P1 2 in 1 Chromebook",
//                 series: "CP713-2W",
//                 brand: "Acer",
//             },
//             inputDevices: {
//                 keyboard: true,
//                 pointingDevice: "TouchPad",
//                 backlight: true,
//                 localization: "English (US)"
//             },
//             memory: {
//                 cardSupport: "microSD",
//                 cardReader: true,
//                 totalInstalledMemory: "8 GB",
//                 technology: "DDR4 SDRAM",
//                 installedSlot: "1 x 8GB",
//             },
//             miscellaneous: {
//                 packageContents: ["Chromebook Spin 713 CP713-2W-38P1 2 in 1 Chromebook", "Lithium Ion Battery", "AC Adapter"],
//                 certifications: ["High Temperature (MIL-STD 810G)", "Low Temperature (MIL-STD 810G)", "Rain (MIL-STD 810G)", "Humidity (MIL-STD 810G)", "Vibration (MIL-STD 810G)", "Mechanical Shock, Transit Drop 122 cm (MIL-STD 810G)"],
//                 securityFeatures: "Discrete H1 Trusted Platform Module (TPM) solution for Chromebook",
//                 origin: "China"
//             },
//             network: {
//                 bluetooth: {
//                     standard: "Bluetooth 5.0",
//                 },
//                 wireless: {
//                     manufacturer: "Intel",
//                     model: "Wireless Wi-Fi 6 AX201",
//                     standard: "IEEE 802.11 a/b/g/n/ac/ax"
//                 }
//             },
//             physical: {
//                 weight: "1.37 kg",
//                 formFactor: "Convertible",
//                 height: '0.66" (16.80 mm)',
//                 width: '11.83" (300.60 mm)',
//                 depth: '9.25" (235 mm)',
//                 color: "Steel Gray",
//             },
//             power: {
//                 maxWatts: "45 W",
//             },
//             storage: {
//                 opticalDrive: false,
//                 ssdConfig: "1 x 256GB",
//                 ssdCapacity: "256 GB",
//             },
//             warranty: {
//                 duration: "1 Year",
//             },
//             processor: {
//                 cache: "4 MB",
//                 speed: "2.10 GHz",
//                 type: "Core i3",
//                 model: "i3-10110U",
//                 core: "Dual-core (2 Core)",
//                 _64bit: true,
//                 manufacturer: "Intel",
//                 hyperThread: true,
//                 vPro: false,
//                 directMediaInterface: "4 GT/s",
//                 maxTurboSpeed: "4.10 GHz",
//                 gen: "10th Gen",
//             },
//             os: {
//                 type: "ChromeOS",
//                 platform: "ChromeOS",
//             },
//             quickSpecs: {
//                 graphics: "Intel UHD Graphics shared memory",
//                 os: "ChromeOS",
//                 memory: "8 GB, DDR4 SDRAM",
//                 storage: "256 GB SSD",
//                 screen: '13.5" 2K (2256 x 1504) 3:2 IPS Touchscreen',
//                 processor: "Intel® Core™ i3-10110U processor Dual-core 2.10 GHz"
//             },
//         },
